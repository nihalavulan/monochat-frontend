interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  children: React.ReactNode
}

function Select({ className = '', children, ...props }: SelectProps) {
  return (
    <select
      className={`w-full bg-input-bg border border-input-border rounded-lg px-4 py-3 text-input-text focus:outline-none focus:border-input-focus transition-colors duration-200 appearance-none ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}

export default Select



