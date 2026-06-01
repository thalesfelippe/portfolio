import type { HTMLAttributes, ReactNode } from 'react'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

export function Badge({ children, className = '', ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full border border-violet/15 bg-violet/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet dark:border-soft-lavender/20 dark:bg-soft-lavender/10 dark:text-soft-lavender ${className}`}
      {...props}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-success-accent shadow-[0_0_16px_rgba(34,197,94,0.8)]" />
      {children}
    </span>
  )
}
