import { useState, useRef, useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Avatar from '../components/Avatar'
import MessageBubble from '../components/MessageBubble'
import ChatInput from '../components/ChatInput'
import DateHeader from '../components/DateHeader'
import { useAuthStore } from '../store/auth.store'
import { useSocketStore } from '../store/socket.store'
import { v4 as uuidv4 } from 'uuid';


interface Message {
  id: string
  text: string
  timestamp: string
  date: string
  isMe: boolean
  senderName?: string
}

// const dummyMessages: Message[] = [
//   {
//     id: '1',
//     text: 'Hi, good to see you! We\'re starting work on a presentation for a new product today, right?',
//     timestamp: '8:36 PM',
//     date: new Date().toISOString().split('T')[0],
//     isMe: true
//   },
//   {
//     id: '2',
//     text: 'Yes, that\'s right. Let\'s discuss the main points and structure of the presentation',
//     timestamp: '8:38 PM',
//     date: new Date().toISOString().split('T')[0],
//     isMe: false,
//     senderName: 'Aysha Hayes'
//   },
//   {
//     id: '3',
//     text: 'Okay, then let\'s divide the presentation into a few main sections: introduction, product description, features and benefits, use cases, and conclusion.',
//     timestamp: '8:52 PM',
//     date: new Date().toISOString().split('T')[0],
//     isMe: false,
//     senderName: 'Aysha Hayes'
//   },
//   {
//     id: '4',
//     text: 'It\'s a deal',
//     timestamp: '8:53 PM',
//     date: new Date().toISOString().split('T')[0],
//     isMe: true
//   },
//   {
//     id: '5',
//     text: 'Good morning! How are you doing today?',
//     timestamp: '9:15 AM',
//     date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
//     isMe: false,
//     senderName: 'Aysha Hayes'
//   },
//   {
//     id: '6',
//     text: 'I\'m doing great, thanks for asking!',
//     timestamp: '9:20 AM',
//     date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
//     isMe: true
//   }
// ]

const dummyUsers: Record<string, { name: string; online: boolean }> = {
  '1': { name: 'Aysha Hayes', online: true },
  '2': { name: 'Katy Johnson', online: true },
  '3': { name: 'Michael Chen', online: false },
  '4': { name: 'Sarah Williams', online: true },
  '5': { name: 'David Brown', online: false },
  '6': { name: 'Emily Davis', online: true },
  '7': { name: 'James Wilson', online: false },
  '8': { name: 'Olivia Martinez', online: true },
  '9': { name: 'Robert Taylor', online: false },
  '10': { name: 'Sophia Anderson', online: true }
}

function ChatConversation() {

  const socket = useSocketStore(state => state.socket)
  const currentUser = useAuthStore(state => state.user)

  const toUserId = currentUser?.id == "693ef531b4e9bd489e3ba006" ? "693f010599bf864295fa740d" : "693ef531b4e9bd489e3ba006";
const currentUserId = currentUser?.id;


  const { id } = useParams<{ id: string }>()


  const navigate = useNavigate()
  const [messages, setMessages] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const user = id ? dummyUsers[id] : null

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])


  useEffect(() => {

    if(!socket || !currentUserId || !toUserId) return;

    const handleReceive = (payload: {
      fromUserId: string
      text: string
      createdAt: string
    }) => {
      if (
        payload.fromUserId !== toUserId &&
        payload.fromUserId !== currentUser.id
      ) {
        return
      }

            const date = payload.createdAt.split('T')[0]


      setMessages(prev => [
        ...prev,
        {
          id: uuidv4(),
          text: payload.text,
          timestamp: new Date(payload.createdAt).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          }),
          date,
          isMe: payload.fromUserId === currentUser.id,
          fromUserId: currentUser?.id == "693ef531b4e9bd489e3ba006" ? "693f010599bf864295fa740d" : "693ef531b4e9bd489e3ba006",
          senderName: currentUser?.id == "693ef531b4e9bd489e3ba006" ? "Mubashir Vp" : "Nihal Avulan",
        },
      ])
    }
    socket.on('receive_message', handleReceive)

    return () => {
      socket.off('receive_message', handleReceive)
    }
  },[socket , currentUserId , toUserId])

  const groupedMessages = useMemo(() => {
    const groups: Record<string, Message[]> = {}
    messages.forEach((message) => {
      if (!groups[message.date]) {
        groups[message.date] = []
      }
      groups[message.date].push(message)
    })
    return groups
  }, [messages])

  const today = new Date().toISOString().split('T')[0]

  const sortedDates = useMemo(() => {
    return Object.keys(groupedMessages).sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
  }, [groupedMessages])

  useEffect(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'auto' })
    }, 100)
  }, [])

  const handleSend = (text: string) => {
    // const today = new Date().toISOString().split('T')[0]
    // const newMessage: Message = {
    //   id: Date.now().toString(),
    //   text,
    //   timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
    //   date: today,
    //   isMe: true,
    // }

    if(!socket) return;

    socket.emit('send_message', {
      toUserId : currentUser?.id == "693ef531b4e9bd489e3ba006" ? "693f010599bf864295fa740d" : "693ef531b4e9bd489e3ba006",
      text,
      createdAt: new Date().toISOString(),
    })
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-bg-primary">
        <p className="text-text-secondary">User not found</p>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col bg-bg-primary safe-area-inset-top overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent-primary opacity-[0.02] rounded-3xl blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-primary opacity-[0.02] rounded-3xl blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto flex-1 flex flex-col overflow-hidden md:shadow-lg md:border-x md:border-border-primary relative z-10">
        <div className="bg-bg-panel border-b border-border-primary px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => navigate('/chats')}
            className="flex-shrink-0"
          >
            <svg
              className="w-6 h-6 text-text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <Avatar name={user.name} size="md" online={user.online} />
          <div className="flex-1 min-w-0">
            <h2 className="text-text-primary font-medium truncate">{user.name}</h2>
            <p className="text-text-tertiary text-xs">
              {user.online ? 'Online' : 'Offline'}
            </p>
          </div>
          <button className="flex-shrink-0">
            <svg
              className="w-6 h-6 text-text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {sortedDates.map((date) => (
            <DateHeader 
              key={date} 
              date={date} 
              messageCount={groupedMessages[date].length}
              initialCollapsed={date !== today}
            >
              {groupedMessages[date].map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
            </DateHeader>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput onSend={handleSend} />
      </div>
    </div>
  )
}

export default ChatConversation

