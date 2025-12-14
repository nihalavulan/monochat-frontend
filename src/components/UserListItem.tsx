import Avatar from './Avatar'

interface User {
  id: string
  name: string
  lastMessage?: string
  timestamp?: string
  unreadCount?: number
  online?: boolean
}

interface UserListItemProps {
  user: User
  onClick?: () => void
}

function UserListItem({ user, onClick }: UserListItemProps) {
  const hasUnread = user.unreadCount && user.unreadCount > 0

  return (
    <button
      onClick={onClick}
      className="w-full flex items-start gap-4 py-3 md:py-4 hover:bg-bg-secondary transition-colors duration-200 active:bg-bg-tertiary"
    >
      <Avatar name={user.name} size="md" online={user.online} />
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-text-primary font-medium truncate">{user.name}</h3>
            {user.lastMessage && (
              <p className="text-text-tertiary text-sm truncate mt-0.5">{user.lastMessage}</p>
            )}
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0 h-8 justify-start">
            {user.timestamp && (
              <span className="text-text-tertiary text-xs whitespace-nowrap">
                {user.timestamp}
              </span>
            )}
            {hasUnread && (
              <div className="bg-accent-primary text-button-primary-text text-xs font-semibold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">
                {user.unreadCount! > 9 ? '9+' : user.unreadCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </button>
  )
}

export default UserListItem

