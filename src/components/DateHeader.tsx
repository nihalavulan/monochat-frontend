import { useState } from 'react'

interface DateHeaderProps {
  date: string
  messageCount: number
  children: React.ReactNode
}

function DateHeader({ date, messageCount, children }: DateHeaderProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return 'Today'
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday'
    } else {
      return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    }
  }

  return (
    <div className="my-4">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="w-full flex items-center justify-center gap-2 py-2 group"
      >
        <div className="flex-1 h-px bg-border-primary"></div>
        <div className="flex items-center gap-2 px-3">
          <span className="text-text-tertiary text-xs font-medium">{formatDate(date)}</span>
          <span className="text-text-muted text-xs">({messageCount})</span>
          <svg
            className={`w-4 h-4 text-text-tertiary transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="flex-1 h-px bg-border-primary"></div>
      </button>
      {!isCollapsed && <div>{children}</div>}
    </div>
  )
}

export default DateHeader

