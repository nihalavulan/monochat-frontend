import { useEffect, useState, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNavigation from '../components/BottomNavigation'
import UserListItem from '../components/UserListItem'
import ComingSoon from '../components/ComingSoon'
import Profile from '../components/Profile'
import Dropdown from '../components/Dropdown'
import Input from '../components/Input'
import { useSocketStore } from '../store/socket.store'
import { useAuthStore } from '../store/auth.store'
import { getUsersByUsername } from '../services/users.api'

type Tab = 'chat' | 'communities' | 'profile'

interface User {
  id: string
  name: string
  lastMessage?: string
  timestamp?: string
  unreadCount?: number
  online?: boolean
}

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'malayalam', label: 'Malayalam' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'hindi', label: 'Hindi' }
]

function Chat() {
  const [activeTab, setActiveTab] = useState<Tab>('chat')
  const [language, setLanguage] = useState('english')
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()


  const token = useAuthStore(state => state.token)
  const connectSocket = useSocketStore(state => state.connect)
  const disconnectSocket = useSocketStore(state => state.disconnect)


  useEffect(() => {
    if(!token) {
      disconnectSocket();
      return;
    }

    connectSocket(token as string);
    
    // Only disconnect if token becomes null (user logged out)
    // Don't disconnect on component unmount to keep socket alive during navigation
  },[token , connectSocket , disconnectSocket])

  // Filter users based on search query
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const debounceTimeoutRef = useRef<number | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  const searchUsers = useCallback(async (query: string) => {
    // Cancel previous request if it exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    // Create new abort controller for this request
    const abortController = new AbortController()
    abortControllerRef.current = abortController

    try {
      const response = await getUsersByUsername({ username: query })
      
      // Only update state if the request wasn't aborted
      if (!abortController.signal.aborted) {
        // Map API response to User format expected by UserListItem
        const mappedUsers: User[] = response.users.map((apiUser) => ({
          id: apiUser._id,
          name: apiUser.username,
          // Optional fields can be added later if needed
          // lastMessage, timestamp, unreadCount, online
        }))
        setFilteredUsers(mappedUsers)
      }
    } catch (error) {
      // Ignore abort errors
      if (error instanceof Error && error.name !== 'AbortError' && !abortController.signal.aborted) {
        console.error(error)
        setFilteredUsers([])
      }
    }
  }, [])

  useEffect(() => {
    // Clear previous debounce timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }

    // Clear previous abort controller
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    if (searchQuery.length > 0) {
      // Debounce the search to avoid excessive API calls
      debounceTimeoutRef.current = window.setTimeout(() => {
        searchUsers(searchQuery)
      }, 300) // 300ms debounce delay
    } else {
      // Schedule state update asynchronously to avoid synchronous setState in effect
      debounceTimeoutRef.current = window.setTimeout(() => {
        setFilteredUsers([])
      }, 0)
    }

    // Cleanup function
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [searchQuery, searchUsers])

  
  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return (
          <div className="flex-1 overflow-y-auto pb-20">
            <div className="sticky top-0 bg-bg-panel border-b border-border-primary px-4 md:px-6 py-4 md:py-5 z-10">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl md:text-3xl font-semibold text-text-primary">Chats</h1>
                <Dropdown
                  value={language}
                  onChange={setLanguage}
                  options={languageOptions}
                />
              </div>
              <Input
                type="text"
                placeholder="Search users by username..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="divide-y divide-border-primary px-4 md:px-6">
              {searchQuery.length > 0 ? (
                filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <UserListItem
                      key={user.id}
                      user={user}
                      onClick={() => {
                        navigate(`/chats/${user.id}`)
                      }}
                    />
                  ))
                ) : (
                  <div className="py-8 text-center">
                    <p className="text-text-tertiary">No users found matching "{searchQuery}"</p>
                  </div>
                )
              ) : (
                <div className="py-8 text-center">
                  <p className="text-text-tertiary">Start typing to search for users</p>
                </div>
              )}
            </div>
          </div>
        )
      case 'communities':
        return <ComingSoon />
      case 'profile':
        return <Profile />
      default:
        return null
    }
  }

  return (
    <div className="h-screen flex flex-col bg-bg-primary safe-area-inset-top overflow-hidden">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto flex-1 flex flex-col overflow-hidden md:shadow-lg md:border-x md:border-border-primary">
        {renderContent()}
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}

export default Chat

