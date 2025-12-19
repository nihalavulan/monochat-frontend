import { Link } from 'react-router-dom'

interface AuthLinkProps {
  text: string
  linkText: string
  to: string
}

function AuthLink({ text, linkText, to }: AuthLinkProps) {
  return (
    <div className="mt-6 text-center relative z-10">
      <p className="text-text-secondary text-sm">
        {text}{' '}
        <Link to={to} className="text-accent-primary hover:text-accent-hover transition-colors duration-200">
          {linkText}
        </Link>
      </p>
    </div>
  )
}

export default AuthLink






