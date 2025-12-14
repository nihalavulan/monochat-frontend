import { useState, useRef, useEffect } from 'react'

interface ChatInputProps {
  onSend: (message: string) => void
}

function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim())
      setMessage('')
      if (inputRef.current) {
        inputRef.current.style.height = 'auto'
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`
    }
  }, [message])

  return (
    <div className="bg-bg-panel border-t border-border-primary px-4 py-3 safe-area-inset-bottom">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <textarea
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            rows={1}
            className="w-full bg-input-bg border border-input-border rounded-lg px-4 py-2.5 text-input-text placeholder-input-placeholder focus:outline-none focus:border-input-focus transition-colors duration-200 resize-none max-h-[120px] overflow-y-auto scrollbar-hide"
          />
        </div>
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="bg-accent-primary text-button-primary-text rounded-lg px-4 py-2.5 h-[42px] font-medium hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatInput

