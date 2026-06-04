import { profile } from '../data/profile'
import { coreTranslations, stackBadges } from '../i18n/core'
import { getPrimaryResumeHref } from '../i18n/resumeFiles'
import type { Language } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { ScrollReveal } from './ScrollReveal'
import { TechBadgeIcon } from './TechBadgeIcon'
import { Badge, Button } from './ui'

type HeroProps = {
  introReady?: boolean
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

export function Hero({ introReady = true, language }: HeroProps) {
  const t = coreTranslations[language]
  const otherLanguage = language === 'en' ? 'pt' : 'en'
  const primaryResumeHref = getPrimaryResumeHref(language)

  return (
    <section
      className="grid min-h-[calc(100svh-3.5rem)] gap-8 py-10 sm:gap-10 sm:py-20 md:gap-12 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center lg:gap-16 lg:py-12"
      id="home"
    >
      <div className="grid min-w-0 max-w-[43rem] gap-5 sm:gap-6">
        <ScrollReveal trigger={introReady}>
          <Badge>
            <LanguageTransitionText mode="fade" text={t.availability} />
          </Badge>
        </ScrollReveal>
        <div className="grid gap-4">
          <ScrollReveal delay={90} trigger={introReady}>
            <h1 className="max-w-[39rem] text-[clamp(1.95rem,8.5vw,4.05rem)] font-bold leading-[1.04] tracking-[-0.03em] text-dark-text dark:text-white sm:leading-[1.01] sm:tracking-[-0.045em]">
              <span className="block">{t.heroTitleLead}</span>
              <LanguageTransitionText
                ariaLive="polite"
                as="span"
                className="block text-violet dark:text-soft-lavender"
                reserveText={[
                  coreTranslations.en.heroTitleAccent,
                  coreTranslations.pt.heroTitleAccent,
                ]}
                showCursor
                speed={14}
                text={t.heroTitleAccent}
              />
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={170} trigger={introReady}>
            <LanguageTransitionText
              as="p"
              className="max-w-2xl text-[0.95rem] font-medium leading-6 text-muted-text dark:text-slate-200 sm:text-lg sm:leading-8"
              mode="fade"
              reserveText={[
                coreTranslations.en.subheadline,
                coreTranslations.pt.subheadline,
              ]}
              text={t.subheadline}
            />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={250} trigger={introReady}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              className="min-h-11 w-full gap-2 px-5 py-0 sm:h-10 sm:w-auto sm:min-w-36"
              href="#projects"
            >
              {t.projectsCta}
              <ArrowRightIcon />
            </Button>
            <Button
              className="min-h-11 w-full gap-2 px-5 py-0 sm:h-10 sm:w-auto sm:min-w-40"
              download
              href={primaryResumeHref}
              variant="secondary"
            >
              <DownloadIcon />
              {t.resumeCta}
            </Button>
            <Button
              aria-label={`${t.contactCta}: ${profile.email}`}
              className="group min-h-11 w-full min-w-36 gap-2 border-violet/12 bg-white/45 px-5 py-0 text-muted-text shadow-[0_10px_30px_rgba(31,17,71,0.045)] backdrop-blur-md hover:border-violet/28 hover:bg-violet/8 hover:text-violet hover:shadow-[0_16px_40px_rgba(108,43,217,0.09)] dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-300 dark:hover:border-soft-lavender/24 dark:hover:bg-white/[0.08] dark:hover:text-white sm:h-10 sm:w-auto"
              href={`mailto:${profile.email}`}
              variant="ghost"
            >
              <span className="text-violet transition group-hover:text-violet dark:text-soft-lavender">
                <MailIcon />
              </span>
              {t.contactCta}
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={320} trigger={introReady}>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-text dark:text-slate-400">
            <LocationIcon />
            <span>{profile.location}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={380} trigger={introReady}>
          <ul
            className="flex max-w-3xl flex-wrap gap-1.5"
            aria-label="Tech stack"
          >
            {stackBadges.map((badge) => (
              <li key={badge}>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/12 bg-white/55 px-2 py-1 text-[0.65rem] font-semibold leading-none text-muted-text shadow-[0_8px_24px_rgba(31,17,71,0.04)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 sm:px-2.5 sm:text-[0.68rem]">
                  <TechBadgeIcon name={badge} />
                  {badge}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>

      <ScrollReveal
        as="aside"
        aria-label={t.visualLabel}
        className="relative overflow-hidden rounded-2xl border border-violet/20 bg-deep-navy/95 p-4 text-white shadow-[0_28px_90px_rgba(108,43,217,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl dark:border-soft-lavender/20 dark:bg-white/[0.055] dark:shadow-[0_28px_110px_rgba(108,43,217,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-3xl sm:p-5"
        delay={300}
        direction="scale"
        trigger={introReady}
      >
        <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_50%_0%,rgba(185,167,255,0.22),transparent_34%),radial-gradient(circle_at_8%_100%,rgba(108,43,217,0.18),transparent_34%)]" />
        <div className="relative">
          <div className="mb-4 flex items-center justify-between gap-3 sm:mb-6 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-success-accent" />
            </div>
            <LanguageTransitionText
              as="p"
              className="text-xs font-medium text-soft-lavender/75"
              reserveText={[
                coreTranslations.en.heroProfileCard.title,
                coreTranslations.pt.heroProfileCard.title,
              ]}
              speed={11}
              text={t.heroProfileCard.title}
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {t.heroProfileCard.cards.map((card, index) => (
              <div
                className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 sm:p-4"
                key={index}
              >
                <LanguageTransitionText
                  as="p"
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-soft-lavender/70"
                  reserveText={[
                    coreTranslations.en.heroProfileCard.cards[index]?.label ?? card.label,
                    coreTranslations.pt.heroProfileCard.cards[index]?.label ?? card.label,
                  ]}
                  speed={10}
                  text={card.label}
                />
                <LanguageTransitionText
                  as="p"
                  className="mt-1.5 break-words text-sm font-semibold text-white sm:mt-2 sm:text-base"
                  reserveText={[
                    coreTranslations.en.heroProfileCard.cards[index]?.value ?? card.value,
                    coreTranslations.pt.heroProfileCard.cards[index]?.value ?? card.value,
                  ]}
                  speed={10}
                  text={card.value}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-white/6 bg-white/[0.04] p-3 font-mono text-[0.7rem] leading-5 text-slate-200 sm:mt-5 sm:p-4 sm:text-xs sm:leading-6">
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
                    coreTranslations[otherLanguage].heroProfileCard.logs[index]?.slice(1) ??
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
      </ScrollReveal>
    </section>
  )
}
