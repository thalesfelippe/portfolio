import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { ScrollReveal } from './ScrollReveal'
import { Button, Card, SectionTitle } from './ui'

type ResumeSectionProps = {
  language: Language
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

function FrontEndIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m8.5 9-3 3 3 3M15.5 9l3 3-3 3M13 7l-2 10M5.5 21h13A2.5 2.5 0 0 0 21 18.5v-13A2.5 2.5 0 0 0 18.5 3h-13A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function BackEndIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M6 6.5c0-1.4 2.7-2.5 6-2.5s6 1.1 6 2.5S15.3 9 12 9 6 7.9 6 6.5Zm0 0v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5M6 11.5v5C6 17.9 8.7 19 12 19s6-1.1 6-2.5v-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ResumeIcon({ index }: { index: number }) {
  if (index === 1) {
    return <FrontEndIcon />
  }

  if (index === 2) {
    return <BackEndIcon />
  }

  return <FullStackIcon />
}

export function ResumeSection({ language }: ResumeSectionProps) {
  const t = translations[language]

  return (
    <section
      aria-labelledby="resume-title"
      className="grid gap-6 py-10 sm:py-12 lg:py-20"
      id="resume"
    >
      <SectionTitle
        eyebrow={
          <LanguageTransitionText
            as="span"
            reserveText={[
              translations.en.resumeSection.eyebrow,
              translations.pt.resumeSection.eyebrow,
            ]}
            speed={12}
            text={t.resumeSection.eyebrow}
          />
        }
        id="resume-title"
        subtitle={
          t.resumeSection.subtitle ? (
            <LanguageTransitionText
              as="span"
              mode="fade"
              reserveText={[
                translations.en.resumeSection.subtitle,
                translations.pt.resumeSection.subtitle,
              ]}
              text={t.resumeSection.subtitle}
            />
          ) : undefined
        }
        title={
          <LanguageTransitionText
            as="span"
            mode="fade"
            reserveText={[
              translations.en.resumeSection.title,
              translations.pt.resumeSection.title,
            ]}
            text={t.resumeSection.title}
          />
        }
      />

      <div className="grid items-stretch gap-4 md:grid-cols-3">
        {t.resumeSection.buttons.map((button, index) => {
          const enButton = translations.en.resumeSection.buttons[index]
          const ptButton = translations.pt.resumeSection.buttons[index]

          return (
            <ScrollReveal
              className="h-full"
              delay={index * 80}
              key={button.href}
            >
              <Card
                className="group relative h-full overflow-hidden p-4 transition duration-300 hover:-translate-y-0.5 hover:border-violet/25 hover:shadow-[0_24px_70px_rgba(108,43,217,0.11)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:hover:border-soft-lavender/20 sm:p-5"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_6%,rgba(108,43,217,0.12),transparent_34%)] opacity-80 dark:bg-[radial-gradient(circle_at_88%_6%,rgba(185,167,255,0.1),transparent_36%)]" />
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-violet/34 to-transparent dark:via-soft-lavender/26" />

                <div className="relative grid h-full gap-4">
                  <div className="grid gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl border border-violet/14 bg-violet/10 text-violet shadow-[0_12px_30px_rgba(108,43,217,0.1)] dark:border-soft-lavender/18 dark:bg-soft-lavender/10 dark:text-soft-lavender">
                      <ResumeIcon index={index} />
                    </span>

                    <div className="grid gap-2">
                      <h3 className="text-base font-semibold tracking-tight text-dark-text dark:text-white">
                        <LanguageTransitionText
                          as="span"
                          reserveText={[enButton.title, ptButton.title]}
                          speed={12}
                          text={button.title}
                        />
                      </h3>
                      <p className="text-sm leading-6 text-muted-text dark:text-slate-300">
                        <LanguageTransitionText
                          as="span"
                          mode="fade"
                          reserveText={[
                            enButton.description,
                            ptButton.description,
                          ]}
                          text={button.description}
                        />
                      </p>
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {button.tags.map((tag, tagIndex) => (
                      <li key={`${button.href}-${tag}`}>
                        <span className="inline-flex rounded-full border border-violet/12 bg-white/55 px-2.5 py-1 text-[0.68rem] font-semibold text-muted-text shadow-[0_8px_24px_rgba(31,17,71,0.04)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                          <LanguageTransitionText
                            as="span"
                            reserveText={[
                              enButton.tags[tagIndex],
                              ptButton.tags[tagIndex],
                            ]}
                            speed={8}
                            text={tag}
                          />
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    aria-label={button.label}
                    className="mt-auto min-h-11 w-full gap-2 px-4 py-0"
                    download
                    href={button.href}
                    variant={index === 0 ? 'primary' : 'secondary'}
                  >
                    <DownloadIcon />
                    <LanguageTransitionText
                      as="span"
                      mode="fade"
                      reserveText={[
                        translations.en.resumeSection.buttons[index].label,
                        translations.pt.resumeSection.buttons[index].label,
                      ]}
                      text={button.label}
                    />
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
