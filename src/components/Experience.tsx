import { useEffect, useState } from 'react'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { ScrollReveal } from './ScrollReveal'
import { TechBadgeIcon } from './TechBadgeIcon'
import { Card, SectionTitle } from './ui'

type ExperienceProps = {
  language: Language
}

function BriefcaseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m-9 4h12M5 7h14a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m5 12 4.2 4L19 6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  )
}

function ProjectIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M6.5 7.5h11M6.5 12h7M6.5 16.5h4.5M5.5 21h13A2.5 2.5 0 0 0 21 18.5v-13A2.5 2.5 0 0 0 18.5 3h-13A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 11v5M12 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  )
}

export function Experience({ language }: ExperienceProps) {
  const [activeCompanyContext, setActiveCompanyContext] = useState<number | null>(
    null,
  )
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())
  const t = translations[language]
  const companyInfoLabel =
    language === 'pt' ? 'Informações da empresa' : 'Company information'

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveCompanyContext(null)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    if (activeCompanyContext === null) {
      return
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target

      if (
        target instanceof Element &&
        !target.closest('[data-company-context-popover="true"]')
      ) {
        setActiveCompanyContext(null)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [activeCompanyContext])

  function toggleExpanded(index: number) {
    setExpandedItems((current) => {
      const next = new Set(current)

      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }

      return next
    })
  }

  return (
    <section
      aria-labelledby="experience-title"
      className="grid gap-6 py-10 sm:gap-8 sm:py-12 lg:py-20"
      id="experience"
    >
      <SectionTitle
        eyebrow={
          <LanguageTransitionText
            as="span"
            reserveText={[
              translations.en.experience.eyebrow,
              translations.pt.experience.eyebrow,
            ]}
            speed={12}
            text={t.experience.eyebrow}
          />
        }
        id="experience-title"
        subtitle={
          t.experience.subtitle ? (
            <LanguageTransitionText
              as="span"
              mode="fade"
              reserveText={[
                translations.en.experience.subtitle,
                translations.pt.experience.subtitle,
              ]}
              text={t.experience.subtitle}
            />
          ) : undefined
        }
        title={
          <LanguageTransitionText
            as="span"
            mode="fade"
            reserveText={[
              translations.en.experience.title,
              translations.pt.experience.title,
            ]}
            text={t.experience.title}
          />
        }
      />

      <ol className="relative grid gap-4 before:absolute before:bottom-3 before:left-3 before:top-3 before:w-px before:bg-gradient-to-b before:from-violet/35 before:via-violet/18 before:to-transparent dark:before:from-soft-lavender/35 dark:before:via-soft-lavender/15 sm:gap-5 sm:before:left-4 lg:gap-6">
        {t.experience.items.map((item, index) => {
          const companyContextId = `company-context-${index}`
          const enItem = translations.en.experience.items[index]
          const hasCompanyContext = Boolean(item.companyContext)
          const isCompanyContextActive = activeCompanyContext === index
          const isExpanded = expandedItems.has(index)
          const ptItem = translations.pt.experience.items[index]
          const visibleHighlightCount = index === 0 ? 4 : 3
          const visibleHighlights = isExpanded
            ? item.highlights
            : item.highlights.slice(0, visibleHighlightCount)
          const hiddenHighlightCount = item.highlights.length - visibleHighlights.length

          return (
            <ScrollReveal
              as="li"
              className="relative pl-7 sm:pl-11"
              delay={Math.min(index * 70, 280)}
              key={index}
            >
              <span className="absolute left-0 top-4 grid h-6 w-6 place-items-center rounded-[10px] border border-violet/20 bg-white text-violet shadow-[0_14px_34px_rgba(108,43,217,0.12)] dark:border-soft-lavender/20 dark:bg-deep-navy dark:text-soft-lavender sm:top-5 sm:h-8 sm:w-8 sm:rounded-xl">
                <BriefcaseIcon />
              </span>

              <Card className="group relative overflow-visible p-0 transition duration-300 hover:-translate-y-0.5 hover:border-violet/25 hover:shadow-[0_24px_70px_rgba(108,43,217,0.12)] dark:hover:border-soft-lavender/20">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/35 to-transparent dark:via-soft-lavender/30" />
                <div className="grid gap-3 p-3 sm:gap-5 sm:p-6">
                  <div className="grid gap-3 sm:gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                    <div className="grid gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="min-w-0 text-[0.95rem] font-semibold tracking-tight text-dark-text dark:text-white sm:text-lg">
                          <LanguageTransitionText
                            as="span"
                            reserveText={[enItem.company, ptItem.company]}
                            speed={12}
                            text={item.company}
                          />
                        </h3>
                        {hasCompanyContext ? (
                          <span
                            className="relative inline-flex shrink-0"
                            data-company-context-popover="true"
                            onMouseEnter={() => setActiveCompanyContext(index)}
                            onMouseLeave={() => setActiveCompanyContext(null)}
                          >
                            <button
                              aria-describedby={
                                isCompanyContextActive
                                  ? `${companyContextId}-desktop-tooltip ${companyContextId}-mobile-tooltip`
                                  : undefined
                              }
                              aria-expanded={isCompanyContextActive}
                              aria-label={`${companyInfoLabel}: ${item.company}`}
                              className="grid h-8 w-8 place-items-center rounded-[10px] border border-violet/12 bg-white/65 text-violet shadow-[0_8px_22px_rgba(108,43,217,0.08)] transition hover:-translate-y-0.5 hover:border-violet/25 hover:bg-violet/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet dark:border-white/10 dark:bg-white/[0.06] dark:text-soft-lavender dark:hover:bg-white/10 sm:h-7 sm:w-7"
                              onClick={() =>
                                setActiveCompanyContext((current) =>
                                  current === index ? null : index,
                                )
                              }
                              type="button"
                            >
                              <InfoIcon />
                            </button>
                            {isCompanyContextActive ? (
                              <>
                                <span
                                  className="absolute left-0 top-full z-30 mt-2 hidden w-[min(17rem,calc(100vw-4rem))] rounded-2xl border border-violet/12 bg-white/95 p-3 text-xs font-medium leading-5 text-muted-text shadow-[0_18px_55px_rgba(31,17,71,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-[#101329]/95 dark:text-slate-300 sm:block"
                                  id={`${companyContextId}-desktop-tooltip`}
                                  role="tooltip"
                                >
                                  <LanguageTransitionText
                                    as="span"
                                    mode="fade"
                                    reserveText={[
                                      enItem.companyContext ?? '',
                                      ptItem.companyContext ?? '',
                                    ]}
                                    text={item.companyContext ?? ''}
                                  />
                                </span>
                                <span
                                  className="absolute left-1/2 top-full z-30 mt-2 w-[min(18rem,calc(100vw-4.5rem))] -translate-x-1/2 rounded-2xl border border-violet/12 bg-white/95 p-3 text-xs font-medium leading-5 text-muted-text shadow-[0_18px_45px_rgba(31,17,71,0.12)] backdrop-blur-xl before:absolute before:-top-1.5 before:left-1/2 before:h-3 before:w-3 before:-translate-x-1/2 before:rotate-45 before:border-l before:border-t before:border-violet/12 before:bg-white/95 dark:border-white/10 dark:bg-[#101329]/95 dark:text-slate-300 dark:before:border-white/10 dark:before:bg-[#101329]/95 sm:hidden"
                                  id={`${companyContextId}-mobile-tooltip`}
                                  role="tooltip"
                                >
                                  <LanguageTransitionText
                                    as="span"
                                    mode="fade"
                                    reserveText={[
                                      enItem.companyContext ?? '',
                                      ptItem.companyContext ?? '',
                                    ]}
                                    text={item.companyContext ?? ''}
                                  />
                                </span>
                              </>
                            ) : null}
                          </span>
                        ) : null}
                        {item.type ? (
                          <span className="inline-flex w-fit max-w-full items-center whitespace-nowrap rounded-full border border-violet/12 bg-violet/8 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-violet dark:border-soft-lavender/18 dark:bg-soft-lavender/10 dark:text-soft-lavender sm:px-2.5 sm:py-1 sm:text-[0.68rem] sm:tracking-[0.14em]">
                            <LanguageTransitionText
                              as="span"
                              mode="fade"
                              text={item.type}
                            />
                          </span>
                        ) : null}
                      </div>
                      <p className="text-sm font-semibold text-violet dark:text-soft-lavender">
                        <LanguageTransitionText
                          as="span"
                          reserveText={[enItem.role, ptItem.role]}
                          speed={12}
                          text={item.role}
                        />
                      </p>
                    </div>

                    <div className="grid gap-1 text-left text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-text dark:text-slate-400 sm:text-xs sm:tracking-[0.14em] lg:text-right">
                      <p>
                        <LanguageTransitionText
                          as="span"
                          reserveText={[enItem.period, ptItem.period]}
                          speed={10}
                          text={item.period}
                        />
                      </p>
                      <p className="normal-case tracking-normal">
                        <LanguageTransitionText
                          as="span"
                          reserveText={[enItem.location, ptItem.location]}
                          speed={10}
                          text={item.location}
                        />
                      </p>
                    </div>
                  </div>

                  <p className="max-w-4xl text-sm leading-6 text-muted-text dark:text-slate-300 sm:leading-7">
                    <LanguageTransitionText
                      as="span"
                      mode="fade"
                      reserveText={[enItem.context, ptItem.context]}
                      text={item.context}
                    />
                  </p>

                {item.featuredProject ? (
                  <div className="grid gap-2 rounded-2xl border border-violet/10 bg-white/50 p-3 shadow-[0_14px_36px_rgba(31,17,71,0.04)] dark:border-white/10 dark:bg-white/[0.04] sm:p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet dark:text-soft-lavender">
                      <ProjectIcon />
                      <LanguageTransitionText
                        as="span"
                        reserveText={[
                          translations.en.experience.featuredProjectLabel,
                          translations.pt.experience.featuredProjectLabel,
                        ]}
                        speed={12}
                        text={t.experience.featuredProjectLabel}
                      />
                    </div>
                    <p className="text-sm font-medium leading-6 text-dark-text dark:text-slate-100">
                      <LanguageTransitionText
                        as="span"
                        mode="fade"
                        reserveText={[
                          enItem.featuredProject ?? '',
                          ptItem.featuredProject ?? '',
                        ]}
                        text={item.featuredProject}
                      />
                    </p>
                  </div>
                ) : null}

                <div className="grid gap-3">
                  <ul className="grid gap-2.5 lg:grid-cols-2">
                    {visibleHighlights.map((highlight, highlightIndex) => (
                      <li
                        className="flex gap-2 text-sm leading-6 text-muted-text dark:text-slate-300 sm:gap-3"
                        key={highlightIndex}
                      >
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-lg border border-success-accent/20 bg-success-accent/10 text-success-accent">
                          <CheckIcon />
                        </span>
                        <LanguageTransitionText
                          as="span"
                          mode="fade"
                          reserveText={[
                            enItem.highlights[highlightIndex],
                            ptItem.highlights[highlightIndex],
                          ]}
                          text={highlight}
                        />
                      </li>
                    ))}
                  </ul>

                  {item.highlights.length > visibleHighlightCount ? (
                    <button
                      className="min-h-10 w-fit rounded-xl border border-violet/12 bg-violet/8 px-3 py-2 text-xs font-semibold text-violet transition hover:-translate-y-0.5 hover:border-violet/25 hover:bg-violet/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet dark:border-soft-lavender/16 dark:bg-soft-lavender/10 dark:text-soft-lavender dark:hover:bg-soft-lavender/14"
                      onClick={() => toggleExpanded(index)}
                      type="button"
                    >
                      <LanguageTransitionText
                        reserveText={[
                          translations.en.experience.viewMore,
                          translations.pt.experience.viewMore,
                          translations.en.experience.viewLess,
                          translations.pt.experience.viewLess,
                        ]}
                        speed={11}
                        text={
                          isExpanded
                            ? t.experience.viewLess
                            : `${t.experience.viewMore} (+${hiddenHighlightCount})`
                        }
                      />
                    </button>
                  ) : null}
                </div>

                <div className="grid gap-3 border-t border-violet/8 pt-4 dark:border-white/8 sm:pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-text dark:text-slate-400">
                    <LanguageTransitionText
                      as="span"
                      reserveText={[
                        translations.en.experience.stackLabel,
                        translations.pt.experience.stackLabel,
                      ]}
                      speed={12}
                      text={t.experience.stackLabel}
                    />
                  </p>
                  <ul className="flex flex-wrap gap-2" aria-label={t.experience.stackLabel}>
                    {item.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/12 bg-white/55 px-2 py-1 text-[0.65rem] font-semibold text-muted-text shadow-[0_8px_24px_rgba(31,17,71,0.04)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 sm:px-2.5 sm:text-[0.68rem]">
                          <TechBadgeIcon name={skill} />
                          <LanguageTransitionText
                            as="span"
                            reserveText={[
                              enItem.skills[skillIndex],
                              ptItem.skills[skillIndex],
                            ]}
                            speed={9}
                            text={skill}
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              </Card>
            </ScrollReveal>
          )
        })}
      </ol>
    </section>
  )
}
