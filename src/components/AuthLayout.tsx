import { ReactNode } from 'react'
import BackgroundPatterns from './BackgroundPatterns'
import AppHeader from './AppHeader'

interface AuthLayoutProps {
  children: ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4 relative overflow-hidden">
      <BackgroundPatterns />
      <div className="w-full max-w-md relative z-10">
        <AppHeader />
        {children}
      </div>
    </div>
  )
}

export default AuthLayout

