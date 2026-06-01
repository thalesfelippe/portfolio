import type { ReactNode } from 'react'

type AppBackgroundProps = {
  children: ReactNode
}

export function AppBackground({ children }: AppBackgroundProps) {
  return (
    <div className="relative min-h-svh overflow-hidden bg-light-bg text-dark-text transition-colors duration-300 dark:bg-deep-navy dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(108,43,217,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(108,43,217,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)] dark:bg-[linear-gradient(rgba(185,167,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(185,167,255,0.08)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-violet/18 blur-3xl dark:bg-violet/30" />
      <div className="pointer-events-none absolute right-[-8rem] top-10 h-96 w-96 rounded-full bg-soft-lavender/40 blur-3xl dark:bg-soft-lavender/15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/65 to-transparent dark:from-dark-purple/25" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rotate-45 rounded-[2rem] border border-violet/20 dark:border-soft-lavender/15" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
