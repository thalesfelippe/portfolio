import { profile } from '../data/profile'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'

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
    <header className="flex flex-col gap-4 border-b border-slate-200 py-5 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
      <a
        className="text-base font-semibold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 dark:text-white dark:focus-visible:outline-white"
        href={`https://${profile.domain}`}
      >
        {profile.domain}
      </a>
      <nav aria-label="Portfolio controls" className="flex flex-wrap gap-2">
        <button
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-800 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:focus-visible:outline-white"
          onClick={onLanguageChange}
          type="button"
        >
          {t.switchLanguage}
        </button>
        <button
          aria-pressed={isDark}
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-800 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:focus-visible:outline-white"
          onClick={onThemeChange}
          type="button"
        >
          {isDark ? t.themeDark : t.themeLight}
        </button>
      </nav>
    </header>
  )
}
