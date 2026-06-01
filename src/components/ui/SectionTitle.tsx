import type { ReactNode } from 'react'

type SectionTitleProps = {
  eyebrow?: ReactNode
  id?: string
  subtitle?: ReactNode
  title: ReactNode
}

export function SectionTitle({ eyebrow, id, subtitle, title }: SectionTitleProps) {
  return (
    <div className="grid max-w-2xl gap-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet dark:text-soft-lavender">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-dark-text dark:text-white sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base leading-7 text-muted-text dark:text-slate-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
