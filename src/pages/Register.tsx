import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [language, setLanguage] = useState('')

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent-primary opacity-5 rounded-3xl blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-accent-primary opacity-5 rounded-2xl blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-accent-primary opacity-5 rounded-3xl blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent-primary opacity-5 rounded-2xl blur-3xl"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent-primary opacity-10 rounded-2xl rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent-primary opacity-10 rounded-xl -rotate-12"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 border border-accent-primary opacity-10 rounded-2xl rotate-45"></div>
        <div className="absolute bottom-20 right-16 w-20 h-20 border border-accent-primary opacity-10 rounded-xl -rotate-45"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-text-primary mb-2">MonoChat</h1>
          <p className="text-sm text-text-tertiary">One chat. Many languages.</p>
        </div>

        <div className="bg-bg-panel rounded-xl p-6 border border-border-primary relative">
          <div className="absolute -top-2 -right-2 w-16 h-16 border border-accent-primary opacity-20 rounded-2xl"></div>
          <div className="absolute -bottom-2 -left-2 w-12 h-12 border border-accent-primary opacity-20 rounded-xl"></div>
          <h2 className="text-2xl font-medium text-text-primary mb-6 relative z-10">Create your account</h2>

          <form className="space-y-4 relative z-10">
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

          <div className="mt-6 text-center relative z-10">
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

