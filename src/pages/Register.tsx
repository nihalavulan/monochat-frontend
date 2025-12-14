import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [language, setLanguage] = useState('')

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-text-primary mb-2">MonoChat</h1>
          <p className="text-sm text-text-tertiary">One chat. Many languages.</p>
        </div>

        <div className="bg-bg-panel rounded-xl p-6 border border-border-primary">
          <h2 className="text-2xl font-medium text-text-primary mb-6">Create your account</h2>

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
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
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

            <div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-input-bg border border-input-border rounded-lg px-4 py-3 text-input-text focus:outline-none focus:border-input-focus transition-colors duration-200 appearance-none"
              >
                <option value="" disabled className="bg-input-bg text-input-text">Preferred language</option>
                <option value="english" className="bg-input-bg text-input-text">English</option>
                <option value="malayalam" className="bg-input-bg text-input-text">Malayalam</option>
                <option value="arabic" className="bg-input-bg text-input-text">Arabic</option>
                <option value="hindi" className="bg-input-bg text-input-text">Hindi</option>
              </select>
              <p className="text-text-tertiary text-xs mt-2">This can be changed later</p>
            </div>

            <button
              type="submit"
              className="w-full bg-button-primary-bg text-button-primary-text font-medium rounded-lg py-3 px-4 hover:bg-button-primary-hover transition-colors duration-200"
            >
              Create account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-text-secondary text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-accent-primary hover:text-accent-hover transition-colors duration-200">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

