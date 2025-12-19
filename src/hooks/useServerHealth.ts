import { useState, useEffect, useRef, useCallback } from 'react'

export type ServerStatus = 'checking' | 'waking-up' | 'healthy' | 'down'

interface UseServerHealthReturn {
  status: ServerStatus
  retry: () => void
}

const MAX_RETRIES = 5
const RETRY_INTERVAL = 3000 // 3 seconds
const REQUEST_TIMEOUT = 10000 // 10 seconds timeout for fetch

const getHealthEndpoint = (): string => {
  const baseURL = import.meta.env.VITE_BASE_URL || ''
  return `${baseURL}/api/v1/health`
}

export function useServerHealth(): UseServerHealthReturn {
  const [status, setStatus] = useState<ServerStatus>('checking')
  const retryCountRef = useRef(0)
  const isCheckingRef = useRef(false)
  const abortControllerRef = useRef<AbortController | null>(null)
  const retryTimeoutRef = useRef<number | null>(null)
  const checkHealthRef = useRef<((isRetry: boolean) => Promise<void>) | null>(null)

  const performHealthCheck = useCallback(async (isRetry: boolean = false) => {
    // Prevent parallel checks
    if (isCheckingRef.current) {
      return
    }

    isCheckingRef.current = true

    // Abort any previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    // Create new AbortController for this check
    const abortController = new AbortController()
    abortControllerRef.current = abortController

    // Set initial status
    if (!isRetry) {
      setStatus('checking')
      retryCountRef.current = 0
    }

    try {
      const healthUrl = getHealthEndpoint()
      
      // Create a timeout promise
      const timeoutPromise = new Promise<never>((_, reject) => {
        const timeoutId = setTimeout(() => {
          reject(new Error('Request timeout'))
        }, REQUEST_TIMEOUT)

        // Clear timeout if request completes
        abortController.signal.addEventListener('abort', () => {
          clearTimeout(timeoutId)
        })
      })

      // Create fetch promise
      const fetchPromise = fetch(healthUrl, {
        method: 'GET',
        cache: 'no-store',
        signal: abortController.signal,
      })

      // Race between fetch and timeout
      const response = await Promise.race([fetchPromise, timeoutPromise])

      // Check if request was aborted
      if (abortController.signal.aborted) {
        isCheckingRef.current = false
        return
      }

      // Handle response
      if (response.status === 200) {
        setStatus('healthy')
        retryCountRef.current = 0
        isCheckingRef.current = false
        return
      }

      // 5xx errors indicate server is down
      if (response.status >= 500 && response.status < 600) {
        setStatus('down')
        retryCountRef.current = 0
        isCheckingRef.current = false
        return
      }

      // Other status codes - treat as waking up
      setStatus('waking-up')
    } catch (error) {
      // Check if request was aborted
      if (abortController.signal.aborted) {
        isCheckingRef.current = false
        return
      }

      // Network errors, timeouts, or fetch failures indicate waking up
      const isNetworkError = 
        error instanceof TypeError || 
        (error instanceof Error && (
          error.message === 'Request timeout' ||
          error.message.includes('Failed to fetch') ||
          error.message.includes('NetworkError')
        ))

      if (isNetworkError) {
        setStatus('waking-up')
      } else {
        // Unknown error - treat as down
        setStatus('down')
        isCheckingRef.current = false
        return
      }
    }

    // Retry logic
    retryCountRef.current += 1

    if (retryCountRef.current >= MAX_RETRIES) {
      setStatus('down')
      isCheckingRef.current = false
      return
    }

    // Schedule next retry using ref to avoid circular dependency
    retryTimeoutRef.current = window.setTimeout(() => {
      if (!abortController.signal.aborted && checkHealthRef.current) {
        checkHealthRef.current(true)
      }
    }, RETRY_INTERVAL)
  }, [])

  // Update ref in effect to avoid render-time ref updates
  useEffect(() => {
    checkHealthRef.current = performHealthCheck
  }, [performHealthCheck])

  const retry = useCallback(() => {
    // Clear any pending retries
    if (retryTimeoutRef.current !== null) {
      clearTimeout(retryTimeoutRef.current)
      retryTimeoutRef.current = null
    }

    // Reset retry count and check again
    retryCountRef.current = 0
    isCheckingRef.current = false
    performHealthCheck(false)
  }, [performHealthCheck])

  // Initial check on mount
  useEffect(() => {
    // Schedule initial check to avoid synchronous setState warning
    const timeoutId = setTimeout(() => {
      performHealthCheck(false)
    }, 0)

    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId)
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
      if (retryTimeoutRef.current !== null) {
        clearTimeout(retryTimeoutRef.current)
      }
      isCheckingRef.current = false
    }
  }, [performHealthCheck])

  return { status, retry }
}

