import { useState } from 'react'
import AuthLayout from '../components/AuthLayout'
import FormCard from '../components/FormCard'
import Input from '../components/Input'
import Button from '../components/Button'
import AuthLink from '../components/AuthLink'
import { handleApiError } from '../utils/errorHandler'
import { loginUser } from '../services/auth.api'
import { ShowAlert } from '../utils/Alert'
import { useAuthStore } from '../store/auth.store'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { setAuth } = useAuthStore()
  const navigate = useNavigate()

  const handleLogin = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = await loginUser({ username, password })
      setAuth(data.user, data.token)
      ShowAlert("success", "Login successful.")
      navigate('/chat')
    } catch (error) {
      console.log("Error on logging in user", error);
      handleApiError(error, "An error occurred during login. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <FormCard title="Login to your account">
        <form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button type="submit">{loading ? 'Loading...' : 'Login'}</Button>
        </form>
        <AuthLink text="Don't have an account?" linkText="Register" to="/register" />
      </FormCard>
    </AuthLayout>
  )
}

export default Login

