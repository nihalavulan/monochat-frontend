interface AvatarProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  online?: boolean
}

function Avatar({ name, size = 'md', online = false }: AvatarProps) {
  const getInitials = (name: string) => {
    const parts = name.trim().split(' ')
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  const getColor = (name: string) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
      '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#52BE80',
      '#EC7063', '#5DADE2', '#58D68D', '#F4D03F', '#AF7AC5',
      '#85C1E9', '#F7DC6F', '#82E0AA', '#F1948A', '#85C1E2'
    ]
    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    return colors[Math.abs(hash) % colors.length]
  }

  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-xl'
  }

  const initials = getInitials(name)
  const bgColor = getColor(name)

  return (
    <div className="relative">
      <div
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-semibold text-white`}
        style={{ backgroundColor: bgColor }}
      >
        {initials}
      </div>
      {online && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-online rounded-full border-2 border-bg-primary"></div>
      )}
    </div>
  )
}

export default Avatar





