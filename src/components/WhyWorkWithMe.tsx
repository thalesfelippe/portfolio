import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { ScrollReveal } from './ScrollReveal'
import { Card, SectionTitle } from './ui'

type WhyWorkWithMeProps = {
  language: Language
}

function ProductIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM12 3v3M12 18v3M3 12h3M18 12h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function FullStackIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M6 7.5 12 4l6 3.5-6 3.5-6-3.5ZM6 12l6 3.5 6-3.5M6 16.5l6 3.5 6-3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function IntegrationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M8.5 8.5 6.8 6.8a3 3 0 0 0-4.2 4.2l2.8 2.8a3 3 0 0 0 4.2 0l.8-.8M15.5 15.5l1.7 1.7a3 3 0 1 0 4.2-4.2l-2.8-2.8a3 3 0 0 0-4.2 0l-.8.8M8.8 15.2l6.4-6.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function OperationsIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 19V5M8 17v-5M12 17V8M16 17v-3M20 17V7M3.5 19h17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ReliableCodeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21s7-3.2 7-9.2V5.5L12 3 5 5.5v6.3C5 17.8 12 21 12 21ZM9 12l2 2 4-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ValueIcon({ index }: { index: number }) {
  if (index === 1) {
    return <FullStackIcon />
  }

  if (index === 2) {
    return <IntegrationIcon />
  }

  if (index === 3) {
    return <OperationsIcon />
  }

  if (index === 4) {
    return <ReliableCodeIcon />
  }

  return <ProductIcon />
}

export function WhyWorkWithMe({ language }: WhyWorkWithMeProps) {
  const t = translations[language]

  return (
    <section
      aria-labelledby="why-work-title"
      className="grid gap-6 py-10 sm:gap-8 sm:py-12 lg:py-20"
      id="why-work-with-me"
    >
      <SectionTitle
        eyebrow={
          <LanguageTransitionText
            as="span"
            reserveText={[
              translations.en.whyWorkWithMe.eyebrow,
              translations.pt.whyWorkWithMe.eyebrow,
            ]}
            speed={12}
            text={t.whyWorkWithMe.eyebrow}
          />
        }
        id="why-work-title"
        subtitle={
          t.whyWorkWithMe.subtitle ? (
            <LanguageTransitionText
              as="span"
              mode="fade"
              reserveText={[
                translations.en.whyWorkWithMe.subtitle,
                translations.pt.whyWorkWithMe.subtitle,
              ]}
              text={t.whyWorkWithMe.subtitle}
            />
          ) : undefined
        }
        title={
          <LanguageTransitionText
            as="span"
            mode="fade"
            reserveText={[
              translations.en.whyWorkWithMe.title,
              translations.pt.whyWorkWithMe.title,
            ]}
            text={t.whyWorkWithMe.title}
          />
        }
      />

      <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-6">
        {t.whyWorkWithMe.items.map((item, index) => (
          <ScrollReveal
            as="li"
            className={`lg:col-span-2 ${
              index === 3 ? 'lg:col-start-2' : ''
            }`}
            delay={Math.min(index * 70, 260)}
            key={item.title}
          >
            <Card className="group h-full overflow-hidden p-4 transition duration-300 hover:-translate-y-0.5 hover:border-violet/25 hover:shadow-[0_24px_70px_rgba(108,43,217,0.11)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:hover:border-soft-lavender/20 sm:p-5">
              <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-violet/30 to-transparent dark:via-soft-lavender/24" />
              <div className="grid gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-2xl border border-violet/14 bg-violet/10 text-violet shadow-[0_12px_30px_rgba(108,43,217,0.1)] transition group-hover:border-violet/24 group-hover:bg-violet/12 dark:border-soft-lavender/18 dark:bg-soft-lavender/10 dark:text-soft-lavender">
                  <ValueIcon index={index} />
                </span>

                <div className="grid gap-2">
                  <h3 className="text-base font-semibold tracking-tight text-dark-text dark:text-white">
                    <LanguageTransitionText
                      as="span"
                      reserveText={[
                        translations.en.whyWorkWithMe.items[index].title,
                        translations.pt.whyWorkWithMe.items[index].title,
                      ]}
                      speed={12}
                      text={item.title}
                    />
                  </h3>
                  <p className="text-sm leading-6 text-muted-text dark:text-slate-300">
                    <LanguageTransitionText
                      as="span"
                      mode="fade"
                      reserveText={[
                        translations.en.whyWorkWithMe.items[index].description,
                        translations.pt.whyWorkWithMe.items[index].description,
                      ]}
                      text={item.description}
                    />
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  )
}
