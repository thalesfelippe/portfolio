import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
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

export function ResumeSection({ language }: ResumeSectionProps) {
  const t = translations[language]

  return (
    <section
      aria-labelledby="resume-title"
      className="grid gap-6 py-10 sm:py-12 lg:py-20"
      id="resume"
    >
      <Card className="relative overflow-hidden p-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(108,43,217,0.12),transparent_36%)] dark:bg-[radial-gradient(circle_at_82%_18%,rgba(185,167,255,0.1),transparent_36%)]" />
        <div className="relative grid gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
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
              <LanguageTransitionText
                as="span"
                mode="fade"
                reserveText={[
                  translations.en.resumeSection.subtitle,
                  translations.pt.resumeSection.subtitle,
                ]}
                text={t.resumeSection.subtitle}
              />
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

          <div className="grid gap-3 md:grid-cols-3 lg:min-w-[35rem]">
            {t.resumeSection.buttons.map((button, index) => (
              <Button
                className="h-auto min-h-11 w-full gap-2 px-4 py-3 text-center"
                download
                href={button.href}
                key={button.href}
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
            ))}
          </div>
        </div>
      </Card>
    </section>
  )
}
