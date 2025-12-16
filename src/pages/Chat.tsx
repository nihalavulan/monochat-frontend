import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNavigation from '../components/BottomNavigation'
import UserListItem from '../components/UserListItem'
import ComingSoon from '../components/ComingSoon'
import Dropdown from '../components/Dropdown'

type Tab = 'chat' | 'communities' | 'profile'

interface User {
  id: string
  name: string
  lastMessage?: string
  timestamp?: string
  unreadCount?: number
  online?: boolean
}

const dummyUsers: User[] = [
  {
    id: '1',
    name: 'Aysha Hayes',
    lastMessage: 'Hi, good to see you! We\'re starting work on a presentation...',
    timestamp: '8:52 PM',
    unreadCount: 12,
    online: true
  },
  {
    id: '2',
    name: 'Katy Johnson',
    lastMessage: 'Yes, that\'s right. Let\'s discuss the main points...',
    timestamp: '8:38 PM',
    online: true
  },
  {
    id: '3',
    name: 'Michael Chen',
    lastMessage: 'Thanks for the update!',
    timestamp: '7:15 PM',
    online: false
  },
  {
    id: '4',
    name: 'Sarah Williams',
    lastMessage: 'See you tomorrow!',
    timestamp: '6:45 PM',
    unreadCount: 3,
    online: true
  },
  {
    id: '5',
    name: 'David Brown',
    lastMessage: 'The meeting is scheduled for 3 PM',
    timestamp: '5:30 PM',
    online: false
  },
  {
    id: '6',
    name: 'Emily Davis',
    lastMessage: 'Can we reschedule?',
    timestamp: '4:20 PM',
    online: true
  },
  {
    id: '7',
    name: 'James Wilson',
    lastMessage: 'Great work on the project!',
    timestamp: '3:10 PM',
    online: false
  },
  {
    id: '8',
    name: 'Olivia Martinez',
    lastMessage: 'Looking forward to it!',
    timestamp: '2:00 PM',
    unreadCount: 1,
    online: true
  },
  {
    id: '9',
    name: 'Robert Taylor',
    lastMessage: 'Let me know when you\'re ready',
    timestamp: '1:30 PM',
    online: false
  },
  {
    id: '10',
    name: 'Sophia Anderson',
    lastMessage: 'Perfect! That works for me.',
    timestamp: '12:15 PM',
    online: true
  }
]

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'malayalam', label: 'Malayalam' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'hindi', label: 'Hindi' }
]

function Chat() {
  const [activeTab, setActiveTab] = useState<Tab>('chat')
  const [language, setLanguage] = useState('english')
  const navigate = useNavigate()

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return (
          <div className="flex-1 overflow-y-auto pb-20">
            <div className="sticky top-0 bg-bg-panel border-b border-border-primary px-4 md:px-6 py-4 md:py-5 z-10">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold text-text-primary">Chats</h1>
                <Dropdown
                  value={language}
                  onChange={setLanguage}
                  options={languageOptions}
                />
              </div>
            </div>
            <div className="divide-y divide-border-primary px-4 md:px-6">
              {dummyUsers.map((user) => (
                <UserListItem
                  key={user.id}
                  user={user}
                  onClick={() => {
                    navigate(`/chats/${user.id}`)
                  }}
                />
              ))}
            </div>
          </div>
        )
      case 'communities':
      case 'profile':
        return <ComingSoon />
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

