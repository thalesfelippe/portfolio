import { profile } from '../data/profile'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'

type HeroProps = {
  language: Language
}

export function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section className="grid gap-6 py-16 sm:py-20 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
        {t.introLabel}
      </p>
      <div className="grid gap-4">
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="text-xl font-medium text-slate-700 dark:text-slate-200">
          {profile.role}
        </p>
      </div>
      <p className="max-w-3xl text-balance text-2xl font-medium leading-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
        {t.headline}
      </p>
      <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
        {t.summary}
      </p>
    </section>
  )
}
