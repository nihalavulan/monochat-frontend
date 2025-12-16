import { useNavigate } from 'react-router-dom'
import Avatar from './Avatar'
import Button from './Button'
import { useAuthStore } from '../store/auth.store'
import { useSocketStore } from '../store/socket.store'

function Profile() {
  const { user, logout } = useAuthStore()
  const disconnectSocket = useSocketStore(state => state.disconnect)
  const navigate = useNavigate()

  const handleLogout = () => {
    disconnectSocket()
    logout()
    navigate('/login')
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex-1 overflow-y-auto pb-20">
      <div className="flex flex-col items-center px-4 md:px-6 py-8 md:py-12">
        <div className="mb-6">
          <Avatar name={user.username} size="lg" />
        </div>
        
        <div className="w-full max-w-md space-y-6">
          <div className="bg-bg-panel rounded-lg p-4 md:p-6 space-y-4">
            <div>
              <label className="text-sm text-text-tertiary mb-1 block">Username</label>
              <p className="text-text-primary font-medium">{user.username}</p>
            </div>
            
            <div>
              <label className="text-sm text-text-tertiary mb-1 block">Email</label>
              <p className="text-text-primary font-medium">{user.email}</p>
            </div>
            
            {user.preferredLanguage && (
              <div>
                <label className="text-sm text-text-tertiary mb-1 block">Preferred Language</label>
                <p className="text-text-primary font-medium capitalize">{user.preferredLanguage}</p>
              </div>
            )}
          </div>

          <Button 
            onClick={handleLogout}
            className="bg-button-secondary-bg text-button-secondary-text hover:bg-button-secondary-hover"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Profile

