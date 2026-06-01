import type { HTMLAttributes, ReactNode } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-violet/10 bg-white/78 p-5 shadow-[0_20px_60px_rgba(11,16,32,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
