import Avatar from './Avatar'

interface Message {
  id: string
  text: string
  timestamp: string
  isMe: boolean
  senderName?: string
}

interface MessageBubbleProps {
  message: Message
}

function MessageBubble({ message }: MessageBubbleProps) {
  if (message.isMe) {
    return (
      <div className="flex items-end justify-end gap-2 mb-4">
        <div className="flex flex-col items-end max-w-[75%]">
          <div className="bg-bubble-me text-bubble-text-me rounded-2xl rounded-br-md px-4 py-2">
            <p className="text-sm break-words">{message.text}</p>
          </div>
          <span className="text-text-tertiary text-xs mt-1 px-1">{message.timestamp}</span>
        </div>
        <Avatar name="You" size="sm" />
      </div>
    )
  }

  return (
    <div className="flex items-end justify-start gap-2 mb-4">
      <Avatar name={message.senderName || 'User'} size="sm" />
      <div className="flex flex-col items-start max-w-[75%]">
        <div className="bg-bubble-other text-bubble-text-other rounded-2xl rounded-bl-md px-4 py-2">
          <p className="text-sm break-words">{message.text}</p>
        </div>
        <span className="text-text-tertiary text-xs mt-1 px-1">{message.timestamp}</span>
      </div>
    </div>
  )
}

export default MessageBubble

