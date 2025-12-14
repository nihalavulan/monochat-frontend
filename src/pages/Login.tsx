import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-text-primary mb-2">MonoChat</h1>
          <p className="text-sm text-text-tertiary">One chat. Many languages.</p>
        </div>

        <div className="bg-bg-panel rounded-xl p-6 border border-border-primary">
          <h2 className="text-2xl font-medium text-text-primary mb-6">Login to your account</h2>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full bg-input-bg border border-input-border rounded-lg px-4 py-3 text-input-text placeholder-input-placeholder focus:outline-none focus:border-input-focus transition-colors duration-200"
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-input-bg border border-input-border rounded-lg px-4 py-3 text-input-text placeholder-input-placeholder focus:outline-none focus:border-input-focus transition-colors duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-button-primary-bg text-button-primary-text font-medium rounded-lg py-3 px-4 hover:bg-button-primary-hover transition-colors duration-200"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-text-secondary text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-accent-primary hover:text-accent-hover transition-colors duration-200">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

