import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { Card, SectionTitle } from './ui'

type AboutProps = {
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
        strokeWidth="2"
      />
    </svg>
  )
}

export function About({ language }: AboutProps) {
  const t = translations[language]

  return (
    <section
      aria-labelledby="about-title"
      className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-16 lg:py-20"
      id="about"
    >
      <div className="grid max-w-3xl gap-8">
        <SectionTitle
          eyebrow={
            <LanguageTransitionText
              as="span"
              reserveText={[
                translations.en.about.eyebrow,
                translations.pt.about.eyebrow,
              ]}
              speed={12}
              text={t.about.eyebrow}
            />
          }
          id="about-title"
          title={
            <LanguageTransitionText
              as="span"
              mode="fade"
              reserveText={[
                translations.en.about.title,
                translations.pt.about.title,
              ]}
              text={t.about.title}
            />
          }
        />

        <div className="grid gap-5 text-base leading-8 text-muted-text dark:text-slate-300">
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={paragraph}>
              <LanguageTransitionText
                as="span"
                mode="fade"
                reserveText={[
                  translations.en.about.paragraphs[index],
                  translations.pt.about.paragraphs[index],
                ]}
                text={paragraph}
              />
            </p>
          ))}
        </div>
      </div>

      <aside className="grid gap-4">
        <Card className="grid gap-5 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-violet dark:text-soft-lavender">
            {t.about.snapshotTitle}
          </h3>
          <dl className="grid gap-4">
            {t.about.snapshot.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-text dark:text-slate-400">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-dark-text dark:text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Card>

        <Card className="grid gap-4 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-violet dark:text-soft-lavender">
            {t.about.usuallySolveTitle}
          </h3>
          <ul className="grid gap-3">
            {t.about.usuallySolve.map((item) => (
              <li
                className="flex items-center gap-3 text-sm font-medium text-dark-text dark:text-slate-200"
                key={item}
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg border border-success-accent/20 bg-success-accent/10 text-success-accent">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </aside>
    </section>
  )
}
