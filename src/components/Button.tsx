interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function Button({ className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`w-full bg-button-primary-bg text-button-primary-text font-medium rounded-lg py-3 px-4 hover:bg-button-primary-hover transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button






