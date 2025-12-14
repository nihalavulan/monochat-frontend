import type { ReactNode } from 'react'

interface FormCardProps {
  title: string
  children: ReactNode
}

function FormCard({ title, children }: FormCardProps) {
  return (
    <div className="bg-bg-panel rounded-xl p-6 border border-border-primary relative">
      <div className="absolute -top-2 -right-2 w-16 h-16 border border-accent-primary opacity-20 rounded-2xl"></div>
      <div className="absolute -bottom-2 -left-2 w-12 h-12 border border-accent-primary opacity-20 rounded-xl"></div>
      <h2 className="text-2xl font-medium text-text-primary mb-6 relative z-10">{title}</h2>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default FormCard

