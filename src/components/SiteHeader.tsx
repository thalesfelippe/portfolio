import { profile } from '../data/profile'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { Button } from './ui'

type Theme = 'light' | 'dark'

type SiteHeaderProps = {
  language: Language
  onLanguageChange: () => void
  onThemeChange: () => void
  theme: Theme
}

export function SiteHeader({
  language,
  onLanguageChange,
  onThemeChange,
  theme,
}: SiteHeaderProps) {
  const t = translations[language]
  const isDark = theme === 'dark'

  return (
    <header className="flex flex-col gap-4 border-b border-violet/10 py-5 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
      <a
        className="text-base font-semibold text-dark-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet dark:text-white"
        href={`https://${profile.domain}`}
      >
        {profile.domain}
      </a>
      <nav aria-label="Portfolio controls" className="flex flex-wrap gap-2">
        <Button onClick={onLanguageChange} type="button" variant="ghost">
          {t.switchLanguage}
        </Button>
        <Button
          aria-pressed={isDark}
          onClick={onThemeChange}
          type="button"
          variant="secondary"
        >
          {isDark ? t.themeDark : t.themeLight}
        </Button>
      </nav>
    </header>
  )
}
