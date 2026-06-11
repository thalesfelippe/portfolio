import type { ReactNode } from 'react'

type AppBackgroundProps = {
  children: ReactNode
}

export function AppBackground({ children }: AppBackgroundProps) {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-light-bg text-dark-text transition-colors duration-300 dark:bg-[#070a18] dark:text-white">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[44rem] w-[76rem] -translate-x-1/2 bg-[linear-gradient(rgba(108,43,217,0.048)_1px,transparent_1px),linear-gradient(90deg,rgba(108,43,217,0.048)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_0%,rgba(0,0,0,0.62)_34%,transparent_74%)] dark:bg-[linear-gradient(rgba(185,167,255,0.062)_1px,transparent_1px),linear-gradient(90deg,rgba(185,167,255,0.062)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute left-1/2 top-28 h-[24rem] w-[24rem] -translate-x-1/2 sm:h-[34rem] sm:w-[34rem]">
        <div className="hero-light-drift-primary relative h-full w-full rounded-full bg-violet/13 blur-3xl dark:bg-violet/24">
          <div className="hero-purple-glow-core absolute inset-10 rounded-full bg-violet/12 dark:bg-violet/20" />
        </div>
      </div>
      <div className="pointer-events-none absolute right-[-10rem] top-24 h-56 w-56 sm:right-[-8rem] sm:top-20 sm:h-80 sm:w-80">
        <div className="hero-light-drift-secondary h-full w-full rounded-full bg-soft-lavender/22 blur-3xl dark:bg-soft-lavender/10" />
      </div>
      <div className="pointer-events-none absolute left-[12%] top-72 hidden h-56 w-56 sm:block">
        <div className="hero-light-drift-vertical h-full w-full rounded-full bg-violet/9 blur-3xl dark:bg-soft-lavender/[0.055]" />
      </div>
      <div className="pointer-events-none absolute left-[62%] top-48 hidden h-64 w-64 -translate-x-1/2 sm:block">
        <div className="hero-purple-glow-orbit h-full w-full rounded-full bg-violet/8 blur-3xl dark:bg-violet/12" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#fbfaff]/70 to-transparent dark:from-dark-purple/25" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rotate-45 rounded-[2rem] border border-violet/14 dark:border-soft-lavender/15" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
