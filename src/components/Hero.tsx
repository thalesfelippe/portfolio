import { profile } from '../data/profile'
import { stackBadges } from '../i18n/content'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { TechBadgeIcon } from './TechBadgeIcon'
import { Badge, Button } from './ui'

type HeroProps = {
  language: Language
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 7.5 12 13l8-5.5M5.5 19h13A1.5 1.5 0 0 0 20 17.5v-11A1.5 1.5 0 0 0 18.5 5h-13A1.5 1.5 0 0 0 4 6.5v11A1.5 1.5 0 0 0 5.5 19Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  )
}

export function Hero({ language }: HeroProps) {
  const t = translations[language]
  const otherLanguage = language === 'en' ? 'pt' : 'en'

  return (
    <section
      className="grid min-h-[calc(100svh-4rem)] gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center lg:gap-16 lg:py-12"
      id="home"
    >
      <div className="grid max-w-[43rem] gap-6">
        <Badge>
          <LanguageTransitionText
            mode="fade"
            text={t.availability}
          />
        </Badge>
        <div className="grid gap-4">
          <h1 className="max-w-[39rem] text-[clamp(2.45rem,5vw,4.05rem)] font-bold leading-[0.99] tracking-[-0.045em] text-dark-text dark:text-white">
            <span className="block">{t.heroTitleLead}</span>
            <LanguageTransitionText
              ariaLive="polite"
              as="span"
              className="block text-violet dark:text-soft-lavender"
              reserveText={[
                translations.en.heroTitleAccent,
                translations.pt.heroTitleAccent,
              ]}
              showCursor
              speed={14}
              text={t.heroTitleAccent}
            />
          </h1>
          <LanguageTransitionText
            as="p"
            className="max-w-2xl text-base font-medium leading-8 text-muted-text dark:text-slate-200 sm:text-lg"
            mode="fade"
            reserveText={[translations.en.subheadline, translations.pt.subheadline]}
            text={t.subheadline}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            className="h-10 min-w-36 gap-2 px-5 py-0"
            href={profile.links.github}
            rel="noreferrer"
            target="_blank"
          >
            {t.projectsCta}
            <ArrowRightIcon />
          </Button>
          {profile.links.resume ? (
            <Button
              className="h-10 min-w-40 gap-2 px-5 py-0"
              href={profile.links.resume}
              variant="secondary"
            >
              <DownloadIcon />
              {t.resumeCta}
            </Button>
          ) : (
            <Button
              className="h-10 min-w-40 gap-2 px-5 py-0"
              disabled
              title={t.resumeUnavailable}
              type="button"
              variant="secondary"
            >
              <DownloadIcon />
              {t.resumeCta}
            </Button>
          )}
          <a
            className="inline-flex h-10 min-w-32 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-muted-text transition hover:-translate-y-0.5 hover:text-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet dark:text-slate-300 dark:hover:text-white"
            href={`mailto:${profile.email}`}
          >
            <MailIcon />
            {t.contactCta}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-text dark:text-slate-400">
          <LocationIcon />
          <span>{profile.location}</span>
        </div>

        <ul className="flex max-w-3xl flex-wrap gap-1.5" aria-label="Tech stack">
          {stackBadges.map((badge) => (
            <li key={badge}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/12 bg-white/55 px-2.5 py-1 text-[0.68rem] font-semibold leading-none text-muted-text shadow-[0_8px_24px_rgba(31,17,71,0.04)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                <TechBadgeIcon name={badge} />
                {badge}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <aside
        aria-label={t.visualLabel}
        className="relative overflow-hidden rounded-3xl border border-violet/20 bg-deep-navy/95 p-5 text-white shadow-[0_28px_90px_rgba(108,43,217,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl dark:border-soft-lavender/20 dark:bg-white/[0.055] dark:shadow-[0_28px_110px_rgba(108,43,217,0.24),inset_0_1px_0_rgba(255,255,255,0.08)]"
      >
        <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_50%_0%,rgba(185,167,255,0.22),transparent_34%),radial-gradient(circle_at_8%_100%,rgba(108,43,217,0.18),transparent_34%)]" />
        <div className="relative">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-success-accent" />
            </div>
            <LanguageTransitionText
              as="p"
              className="text-xs font-medium text-soft-lavender/75"
              reserveText={[
                translations.en.heroProfileCard.title,
                translations.pt.heroProfileCard.title,
              ]}
              speed={11}
              text={t.heroProfileCard.title}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {t.heroProfileCard.cards.map((card, index) => (
              <div
                className="rounded-2xl border border-white/8 bg-white/[0.04] p-4"
                key={index}
              >
                <LanguageTransitionText
                  as="p"
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-soft-lavender/70"
                  reserveText={[
                    translations.en.heroProfileCard.cards[index]?.label ?? card.label,
                    translations.pt.heroProfileCard.cards[index]?.label ?? card.label,
                  ]}
                  speed={10}
                  text={card.label}
                />
                <LanguageTransitionText
                  as="p"
                  className="mt-2 text-sm font-semibold text-white sm:text-base"
                  reserveText={[
                    translations.en.heroProfileCard.cards[index]?.value ?? card.value,
                    translations.pt.heroProfileCard.cards[index]?.value ?? card.value,
                  ]}
                  speed={10}
                  text={card.value}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/6 bg-white/[0.04] p-4 font-mono text-xs leading-6 text-slate-200">
            {t.heroProfileCard.logs.map((log, index) => (
              <p key={index}>
                <span
                  className={
                    log.startsWith('$')
                      ? 'text-violet dark:text-soft-lavender'
                      : 'text-success-accent'
                  }
                >
                  {log.slice(0, 1)}
                </span>
                <LanguageTransitionText
                  reserveText={[
                    translations[otherLanguage].heroProfileCard.logs[index]?.slice(1) ??
                      log.slice(1),
                    log.slice(1),
                  ]}
                  speed={9}
                  text={log.slice(1)}
                />
              </p>
            ))}
          </div>
        </div>
      </aside>
    </section>
  )
}
