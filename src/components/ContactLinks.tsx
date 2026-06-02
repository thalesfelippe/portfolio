import { profile } from '../data/profile'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { Button, Card, SectionTitle } from './ui'

type ContactLinksProps = {
  language: Language
}

const contactItems = [
  {
    key: 'linkedin',
    labelKey: 'linkedin',
    href: profile.links.linkedin,
    value: 'linkedin.com/in/thales-felippe',
  },
  {
    key: 'email',
    labelKey: 'email',
    href: `mailto:${profile.email}`,
    value: profile.email,
  },
  {
    key: 'github',
    labelKey: 'github',
    href: profile.links.github,
    value: 'github.com/thalesfelippe',
  },
] as const

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

function ContactBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-[-3rem] left-1/2 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.9)_20%,rgba(0,0,0,0.92)_82%,transparent_100%)]"
    >
      <div className="contact-ambient-glow absolute left-1/2 top-14 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-violet/12 blur-3xl dark:bg-soft-lavender/[0.09]" />
      <svg
        className="contact-signal-lines absolute inset-0 h-full w-full text-violet/28 dark:text-soft-lavender/24"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 460"
      >
        <path
          d="M156 312 C330 210 494 206 672 274 C846 340 1018 316 1288 174"
          stroke="currentColor"
          strokeLinecap="round"
          strokeOpacity="0.36"
          strokeWidth="1"
        />
        <path
          d="M206 366 C420 270 552 300 718 340 C920 388 1048 306 1238 246"
          stroke="currentColor"
          strokeLinecap="round"
          strokeOpacity="0.24"
          strokeWidth="1"
        />
        <path
          d="M360 126 C522 206 696 194 858 126 C1010 62 1142 98 1300 158"
          stroke="currentColor"
          strokeLinecap="round"
          strokeOpacity="0.22"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

export function ContactLinks({ language }: ContactLinksProps) {
  const t = translations[language]

  return (
    <section
      aria-labelledby="contact-title"
      className="relative isolate py-10 sm:py-12 lg:py-20"
      id="contact"
    >
      <ContactBackground />

      <Card className="relative overflow-hidden p-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(108,43,217,0.14),transparent_36%),linear-gradient(135deg,rgba(108,43,217,0.07),transparent_42%)] dark:bg-[radial-gradient(circle_at_80%_0%,rgba(185,167,255,0.12),transparent_36%),linear-gradient(135deg,rgba(108,43,217,0.12),transparent_46%)]" />
        <div className="relative grid gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <SectionTitle
            id="contact-title"
            subtitle={
              <LanguageTransitionText
                as="span"
                mode="fade"
                reserveText={[
                  translations.en.contactSubtitle,
                  translations.pt.contactSubtitle,
                ]}
                text={t.contactSubtitle}
              />
            }
            title={
              <LanguageTransitionText
                as="span"
                reserveText={[
                  translations.en.contactTitle,
                  translations.pt.contactTitle,
                ]}
                speed={12}
                text={t.contactTitle}
              />
            }
          />

          <ul className="grid gap-3 sm:grid-cols-3 lg:min-w-[28rem]">
            {contactItems.map((item, index) => (
              <li key={item.key}>
                <Button
                  aria-label={`${t[item.labelKey]}: ${item.value}`}
                  className="min-h-11 w-full gap-2 px-4 py-0"
                  href={item.href}
                  rel={item.key === 'email' ? undefined : 'noopener noreferrer'}
                  target={item.key === 'email' ? undefined : '_blank'}
                  variant={index === 0 ? 'primary' : 'secondary'}
                >
                  <LanguageTransitionText
                    as="span"
                    reserveText={[
                      translations.en[item.labelKey],
                      translations.pt[item.labelKey],
                    ]}
                    speed={12}
                    text={t[item.labelKey]}
                  />
                  <ArrowRightIcon />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </section>
  )
}
