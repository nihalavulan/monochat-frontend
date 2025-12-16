import { useState } from 'react'
import AuthLayout from '../components/AuthLayout'
import FormCard from '../components/FormCard'
import Input from '../components/Input'
import Select from '../components/Select'
import Button from '../components/Button'
import AuthLink from '../components/AuthLink'
import { registerUser } from '../services/auth.api'
import { ShowAlert } from '../utils/Alert'
import { handleApiError } from '../utils/errorHandler'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth.store'

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [language, setLanguage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      await registerUser({ username, password, email, preferredLanguage: language })
      ShowAlert("success", "Signup successful. Please verify your email.")
      navigate('/login')
    } catch (error) {
      console.log("Error on registering user", error);
      handleApiError(error, "An error occurred during registration. Please try again.")
    } finally {
      setLoading(false)
    }
  }


  return (
    <AuthLayout>
      <FormCard title="Create your account">
        <form className="space-y-4" onSubmit={(e) => handleRegister(e)}>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="" disabled className="bg-input-bg text-input-text">Preferred language</option>
              <option value="english" className="bg-input-bg text-input-text">English</option>
              <option value="malayalam" className="bg-input-bg text-input-text">Malayalam</option>
              <option value="arabic" className="bg-input-bg text-input-text">Arabic</option>
              <option value="hindi" className="bg-input-bg text-input-text">Hindi</option>
            </Select>
            <p className="text-text-tertiary text-xs mt-2">This can be changed later</p>
          </div>
          <Button type="submit">{loading ? 'Loading...' : 'Create account'}</Button>
        </form>
        <AuthLink text="Already have an account?" linkText="Login" to="/login" />
      </FormCard>
    </AuthLayout>
  )
}

export default Register

