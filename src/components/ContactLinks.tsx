import { profile } from '../data/profile'
import { getWhatsAppUrl } from '../config/contact'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { ScrollReveal } from './ScrollReveal'
import { WhatsAppIcon } from './WhatsAppIcon'
import { Button, Card } from './ui'

type ContactLinksProps = {
  language: Language
}

type ContactItemKey = 'email' | 'github' | 'linkedin' | 'whatsapp'
type ContactItem = {
  ariaLabel: string
  href: string
  isExternal: boolean
  key: ContactItemKey
  label: string
  reserveText: [string, string]
  variant: 'primary' | 'secondary'
}

const whatsappAriaLabels = {
  en: 'Chat on WhatsApp',
  pt: 'Conversar pelo WhatsApp',
} satisfies Record<Language, string>

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

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.5 9.4H3.8V20h2.7V9.4ZM5.1 4a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 5.1 4Zm8.2 8.3c1.5 0 2.2 1 2.2 2.6V20h2.7v-5.6c0-3-1.6-4.7-4.1-4.7-1.7 0-2.7.9-3.1 1.7h-.1V9.4H8.4V20h2.7v-5.4c0-1.4.8-2.3 2.2-2.3Z" />
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
        d="M4.5 7.5 12 13l7.5-5.5M6 19h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M12 2.8a9.7 9.7 0 0 0-3.1 18.9c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.3 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.8 0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A9.7 9.7 0 0 0 12 2.8Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

function ContactIcon({ name }: { name: ContactItemKey }) {
  if (name === 'linkedin') {
    return <LinkedInIcon />
  }

  if (name === 'email') {
    return <MailIcon />
  }

  if (name === 'whatsapp') {
    return <WhatsAppIcon />
  }

  return <GitHubIcon />
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
  const eyebrow = language === 'pt' ? 'Contato' : 'Contact'
  const contactItems: ContactItem[] = [
    {
      ariaLabel: `${t.linkedin}: linkedin.com/in/thales-felippe`,
      href: profile.links.linkedin,
      isExternal: true,
      key: 'linkedin',
      label: t.linkedin,
      reserveText: [translations.en.linkedin, translations.pt.linkedin],
      variant: 'primary',
    },
    {
      ariaLabel: `${t.email}: ${profile.email}`,
      href: `mailto:${profile.email}`,
      isExternal: false,
      key: 'email',
      label: t.email,
      reserveText: [translations.en.email, translations.pt.email],
      variant: 'secondary',
    },
    {
      ariaLabel: `${t.github}: github.com/thalesfelippe`,
      href: profile.links.github,
      isExternal: true,
      key: 'github',
      label: t.github,
      reserveText: [translations.en.github, translations.pt.github],
      variant: 'secondary',
    },
    {
      ariaLabel: whatsappAriaLabels[language],
      href: getWhatsAppUrl(language),
      isExternal: true,
      key: 'whatsapp',
      label: 'WhatsApp',
      reserveText: ['WhatsApp', 'WhatsApp'],
      variant: 'secondary',
    },
  ]

  return (
    <section
      aria-labelledby="contact-title"
      className="relative isolate py-10 sm:py-12 lg:py-20"
      id="contact"
    >
      <ContactBackground />

      <div className="relative grid gap-6">
        <ScrollReveal className="grid max-w-2xl gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet dark:text-soft-lavender">
            <LanguageTransitionText
              as="span"
              reserveText={['Contact', 'Contato']}
              speed={12}
              text={eyebrow}
            />
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-dark-text dark:text-white sm:text-4xl lg:text-5xl"
            id="contact-title"
          >
            <LanguageTransitionText
              as="span"
              reserveText={[
                translations.en.contactTitle,
                translations.pt.contactTitle,
              ]}
              speed={12}
              text={t.contactTitle}
            />
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
        <Card className="relative overflow-hidden border-violet/14 bg-white/78 p-0 shadow-[0_22px_80px_rgba(31,17,71,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-[0_24px_90px_rgba(0,0,0,0.22)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_4%,rgba(108,43,217,0.13),transparent_30%),linear-gradient(135deg,rgba(108,43,217,0.055),transparent_46%)] dark:bg-[radial-gradient(circle_at_84%_6%,rgba(185,167,255,0.11),transparent_32%),linear-gradient(135deg,rgba(108,43,217,0.09),transparent_48%)]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet/34 to-transparent dark:via-soft-lavender/28" />

          <div className="relative grid gap-5 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
            <p className="max-w-2xl text-base font-medium leading-7 text-muted-text dark:text-slate-300 sm:text-lg sm:leading-8">
              <LanguageTransitionText
                as="span"
                mode="fade"
                reserveText={[
                  translations.en.contactSubtitle,
                  translations.pt.contactSubtitle,
                ]}
                text={t.contactSubtitle}
              />
            </p>

            <ul className="grid gap-3 sm:grid-cols-2 lg:min-w-[34rem] lg:grid-cols-4">
              {contactItems.map((item, index) => (
                <li key={item.key}>
                  <Button
                    aria-label={item.ariaLabel}
                    className={`min-h-11 w-full gap-2.5 px-4 py-0 ${
                      index === 0
                        ? ''
                        : 'hover:border-violet/35 dark:hover:border-soft-lavender/28'
                    }`}
                    href={item.href}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    target={item.isExternal ? '_blank' : undefined}
                    variant={item.variant}
                  >
                    <ContactIcon name={item.key} />
                    <LanguageTransitionText
                      as="span"
                      reserveText={item.reserveText}
                      speed={12}
                      text={item.label}
                    />
                    <ArrowRightIcon />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
