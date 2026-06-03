import { useEffect, useState } from 'react'
import type { Language } from '../i18n/languages'

type PortfolioLoaderProps = {
  language: Language
  onFinish: () => void
  theme: 'dark' | 'light'
}

const loaderCopy = {
  en: {
    label: 'Loading portfolio',
    logo: 'TF',
    status: [
      'initializing portfolio',
      'loading interface',
      'syncing experience',
      'ready',
    ],
  },
  pt: {
    label: 'Carregando portfólio',
    logo: 'TF',
    status: [
      'iniciando portfólio',
      'carregando interface',
      'sincronizando experiência',
      'pronto',
    ],
  },
} satisfies Record<Language, { label: string; logo: string; status: string[] }>

function prefersReducedMotion() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function isMobileViewport() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia('(max-width: 640px)').matches
}

export function PortfolioLoader({
  language,
  onFinish,
  theme,
}: PortfolioLoaderProps) {
  const copy = loaderCopy[language]
  const [activeStatus, setActiveStatus] = useState(0)
  const [isLeaving, setIsLeaving] = useState(false)
  const isDark = theme === 'dark'

  useEffect(() => {
    const reducedMotion = prefersReducedMotion()
    const isMobile = isMobileViewport()
    const exitDelay = reducedMotion ? 120 : isMobile ? 620 : 1180
    const removeDelay = reducedMotion ? 40 : isMobile ? 160 : 260

    const exitTimer = window.setTimeout(() => {
      setIsLeaving(true)
    }, exitDelay)

    const finishTimer = window.setTimeout(() => {
      onFinish()
    }, exitDelay + removeDelay)

    if (reducedMotion) {
      return () => {
        window.clearTimeout(exitTimer)
        window.clearTimeout(finishTimer)
      }
    }

    const statusTimer = window.setInterval(() => {
      setActiveStatus((current) =>
        current >= copy.status.length - 1 ? current : current + 1,
      )
    }, isMobile ? 220 : 300)

    return () => {
      window.clearInterval(statusTimer)
      window.clearTimeout(exitTimer)
      window.clearTimeout(finishTimer)
    }
  }, [copy.status.length, onFinish])

  return (
    <div
      aria-label={copy.label}
      className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden transition duration-300 ease-out ${
        isLeaving
          ? 'scale-[1.01] opacity-0'
          : 'scale-100 opacity-100'
      } ${
        isDark
          ? 'bg-deep-navy text-white'
          : 'bg-light-bg text-dark-text'
      } motion-reduce:transition-none`}
      role="status"
    >
      <span className="sr-only">{copy.label}</span>

      <div
        aria-hidden="true"
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_50%_42%,rgba(108,43,217,0.32),transparent_34%),radial-gradient(circle_at_30%_65%,rgba(185,167,255,0.12),transparent_30%),linear-gradient(135deg,#0B1020_0%,#111735_42%,#1F1147_100%)]'
            : 'bg-[radial-gradient(circle_at_50%_42%,rgba(108,43,217,0.14),transparent_34%),radial-gradient(circle_at_30%_65%,rgba(185,167,255,0.22),transparent_32%),linear-gradient(135deg,#F8F7FF_0%,#FFFFFF_42%,#EEE9FF_100%)]'
        }`}
      />
      <div
        aria-hidden="true"
        className={`portfolio-loader-glow absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl sm:h-[30rem] sm:w-[30rem] sm:blur-3xl ${
          isDark ? 'bg-violet/18' : 'bg-violet/10'
        }`}
      />
      <svg
        aria-hidden="true"
        className={`portfolio-loader-map absolute inset-0 hidden h-full w-full sm:block ${
          isDark ? 'text-soft-lavender/24' : 'text-violet/18'
        }`}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="loader-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="45%" stopColor="currentColor" stopOpacity="0.45" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g
          className="portfolio-loader-lines"
          stroke="url(#loader-line)"
          strokeLinecap="round"
          strokeWidth="1"
        >
          <path d="M120 220 C300 120 450 230 600 180 C760 128 880 290 1040 230 C1170 180 1260 210 1340 150" />
          <path d="M180 640 C360 540 510 656 690 590 C850 532 990 662 1260 540" />
          <path d="M360 180 V340 C360 400 410 440 480 440 H960 C1030 440 1080 486 1080 560 V640" />
        </g>
        <g className="portfolio-loader-nodes" fill="currentColor">
          <circle cx="360" cy="180" r="3.4" />
          <circle cx="600" cy="180" r="3.4" />
          <circle cx="1040" cy="230" r="3.4" />
          <circle cx="480" cy="440" r="3.4" />
          <circle cx="960" cy="440" r="3.4" />
          <circle cx="1080" cy="640" r="3.4" />
        </g>
      </svg>

      <div
        className={`relative grid w-[min(22rem,calc(100vw-2rem))] justify-items-center gap-5 rounded-3xl p-6 text-center backdrop-blur-xl sm:p-7 ${
          isDark
            ? 'border border-soft-lavender/16 bg-white/[0.045] shadow-[0_30px_110px_rgba(108,43,217,0.24),inset_0_1px_0_rgba(255,255,255,0.08)]'
            : 'border border-violet/12 bg-white/72 shadow-[0_26px_90px_rgba(108,43,217,0.14),inset_0_1px_0_rgba(255,255,255,0.85)]'
        }`}
      >
        <div
          className={`portfolio-loader-orbit relative grid h-24 w-24 place-items-center rounded-[2rem] border shadow-[0_18px_60px_rgba(185,167,255,0.14)] ${
            isDark
              ? 'border-soft-lavender/18 bg-white/[0.055]'
              : 'border-violet/14 bg-violet/8'
          }`}
        >
          <div className="absolute inset-[-0.45rem] rounded-[2.25rem] border border-violet/22" />
          <div className="absolute -right-1 top-4 h-2 w-2 rounded-full bg-success-accent shadow-[0_0_22px_rgba(34,197,94,0.85)]" />
          <span
            className={`text-xl font-black tracking-[-0.04em] ${
              isDark ? 'text-white' : 'text-violet'
            }`}
          >
            {copy.logo}
          </span>
        </div>

        <div className="grid gap-2">
          <p
            className={`font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${
              isDark ? 'text-soft-lavender' : 'text-violet'
            }`}
          >
            thales.dev
          </p>
          <p
            className={`min-h-5 font-mono text-xs font-medium uppercase tracking-[0.18em] ${
              isDark ? 'text-slate-300' : 'text-muted-text'
            }`}
          >
            {copy.status[activeStatus]}
          </p>
        </div>

        <div
          className={`h-1.5 w-full overflow-hidden rounded-full border ${
            isDark
              ? 'border-soft-lavender/10 bg-white/[0.06]'
              : 'border-violet/10 bg-violet/8'
          }`}
        >
          <div className="portfolio-loader-progress h-full rounded-full bg-[linear-gradient(90deg,#6C2BD9,#B9A7FF,#22C55E)]" />
        </div>
      </div>
    </div>
  )
}
