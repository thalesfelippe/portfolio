import type { ReactNode } from 'react'

type SectionTitleProps = {
  eyebrow?: ReactNode
  id?: string
  subtitle?: ReactNode
  title: ReactNode
}

export function SectionTitle({ eyebrow, id, subtitle, title }: SectionTitleProps) {
  return (
    <div className="grid max-w-2xl gap-2.5 sm:gap-3">
      {eyebrow ? (
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-violet dark:text-soft-lavender sm:text-xs sm:tracking-[0.2em]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-[1.45rem] font-semibold leading-tight tracking-tight text-dark-text dark:text-white sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="text-[0.95rem] leading-6 text-muted-text dark:text-slate-300 sm:text-base sm:leading-7">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
