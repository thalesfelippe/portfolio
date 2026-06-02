import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { Card, SectionTitle } from './ui'

type WhyWorkWithMeProps = {
  language: Language
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
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

export function WhyWorkWithMe({ language }: WhyWorkWithMeProps) {
  const t = translations[language]

  return (
    <section
      aria-labelledby="why-work-title"
      className="grid gap-6 py-10 sm:gap-8 sm:py-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12 lg:py-20"
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
          <LanguageTransitionText
            as="span"
            mode="fade"
            reserveText={[
              translations.en.whyWorkWithMe.subtitle,
              translations.pt.whyWorkWithMe.subtitle,
            ]}
            text={t.whyWorkWithMe.subtitle}
          />
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

      <ul className="grid gap-3 sm:grid-cols-2">
        {t.whyWorkWithMe.items.map((item, index) => (
          <li key={item}>
            <Card className="h-full p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-violet/25 hover:shadow-[0_22px_65px_rgba(108,43,217,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-4">
              <div className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-success-accent/18 bg-success-accent/10 text-success-accent">
                  <CheckIcon />
                </span>
                <p className="text-sm font-semibold leading-6 text-dark-text dark:text-slate-100">
                  <LanguageTransitionText
                    as="span"
                    mode="fade"
                    reserveText={[
                      translations.en.whyWorkWithMe.items[index],
                      translations.pt.whyWorkWithMe.items[index],
                    ]}
                    text={item}
                  />
                </p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
