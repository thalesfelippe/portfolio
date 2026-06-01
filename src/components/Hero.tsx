import { profile } from '../data/profile'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { Badge, Button } from './ui'

type HeroProps = {
  language: Language
}

export function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_22rem] lg:items-center lg:gap-12 lg:py-24">
      <div className="grid gap-6">
        <Badge>{t.introLabel}</Badge>
        <div className="grid gap-4">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-dark-text dark:text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="text-xl font-medium text-muted-text dark:text-slate-200">
            {profile.role}
          </p>
        </div>
        <p className="max-w-3xl text-balance text-2xl font-medium leading-tight text-dark-text dark:text-slate-100 sm:text-3xl">
          {t.headline}
        </p>
        <p className="max-w-2xl text-base leading-7 text-muted-text dark:text-slate-300 sm:text-lg">
          {t.summary}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={`mailto:${profile.email}`}>{t.email}</Button>
          <Button
            href={profile.links.github}
            rel="noreferrer"
            target="_blank"
            variant="secondary"
          >
            {t.github}
          </Button>
        </div>
      </div>
      <aside
        aria-label={t.visualLabel}
        className="relative min-h-72 overflow-hidden rounded-lg border border-violet/15 bg-deep-navy p-6 shadow-[0_30px_80px_rgba(31,17,71,0.25)] dark:border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(185,167,255,0.28),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(108,43,217,0.42),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(185,167,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(185,167,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative grid h-full min-h-60 content-between">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-soft-lavender">
            <span>{t.systemLabel}</span>
            <span className="rounded-full bg-success-accent/15 px-2 py-1 text-success-accent">
              {t.onlineLabel}
            </span>
          </div>
          <div className="grid gap-4">
            <div className="h-2 w-24 rounded-full bg-soft-lavender/80" />
            <div className="h-2 w-40 rounded-full bg-white/45" />
            <div className="h-2 w-32 rounded-full bg-violet/80" />
          </div>
          <div>
            <p className="text-sm text-slate-300">{profile.domain}</p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white">
              TF
            </p>
          </div>
        </div>
      </aside>
    </section>
  )
}
