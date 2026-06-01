import type { ReactNode } from 'react'

type AppBackgroundProps = {
  children: ReactNode
}

export function AppBackground({ children }: AppBackgroundProps) {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-light-bg text-dark-text transition-colors duration-300 dark:bg-[#070a18] dark:text-white">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[44rem] w-[76rem] -translate-x-1/2 bg-[linear-gradient(rgba(108,43,217,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(108,43,217,0.065)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_0%,rgba(0,0,0,0.72)_34%,transparent_74%)] dark:bg-[linear-gradient(rgba(185,167,255,0.062)_1px,transparent_1px),linear-gradient(90deg,rgba(185,167,255,0.062)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute left-1/2 top-28 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet/18 blur-3xl dark:bg-violet/24" />
      <div className="pointer-events-none absolute right-[-8rem] top-20 h-80 w-80 rounded-full bg-soft-lavender/30 blur-3xl dark:bg-soft-lavender/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/65 to-transparent dark:from-dark-purple/25" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rotate-45 rounded-[2rem] border border-violet/20 dark:border-soft-lavender/15" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
