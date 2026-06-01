import { profile } from '../data/profile'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { Card, SectionTitle } from './ui'

type ContactLinksProps = {
  language: Language
}

const contactItems = [
  {
    key: 'github',
    labelKey: 'github',
    href: profile.links.github,
    value: 'github.com/thalesfelippe',
  },
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
] as const

export function ContactLinks({ language }: ContactLinksProps) {
  const t = translations[language]

  return (
    <section aria-labelledby="contact-title" className="grid gap-5">
      <SectionTitle
        id="contact-title"
        subtitle={t.contactSubtitle}
        title={t.contactTitle}
      />
      <ul className="grid gap-3 sm:grid-cols-3">
        {contactItems.map((item) => (
          <li key={item.key}>
            <Card className="h-full p-0 transition hover:-translate-y-0.5 hover:border-violet/25">
              <a
                className="block h-full p-5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
                href={item.href}
                rel="noreferrer"
                target={item.key === 'email' ? undefined : '_blank'}
              >
                <span className="block font-medium text-dark-text dark:text-white">
                  {t[item.labelKey]}
                </span>
                <span className="mt-1 block break-words text-muted-text dark:text-slate-300">
                  {item.value}
                </span>
              </a>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
