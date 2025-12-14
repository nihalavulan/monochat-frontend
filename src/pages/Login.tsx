import { useState } from 'react'
import AuthLayout from '../components/AuthLayout'
import FormCard from '../components/FormCard'
import Input from '../components/Input'
import Button from '../components/Button'
import AuthLink from '../components/AuthLink'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <AuthLayout>
      <FormCard title="Login to your account">
        <form className="space-y-4">
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
          <Button type="submit">Login</Button>
        </form>
        <AuthLink text="Don't have an account?" linkText="Register" to="/register" />
      </FormCard>
    </AuthLayout>
  )
}

export default Login

