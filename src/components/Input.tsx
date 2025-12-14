interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full bg-input-bg border border-input-border rounded-lg px-4 py-3 text-input-text placeholder-input-placeholder focus:outline-none focus:border-input-focus transition-colors duration-200 ${className}`}
      {...props}
    />
  )
}

export default Input

