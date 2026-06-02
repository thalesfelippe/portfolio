import { translations, type Language } from '../i18n/translations'

type Theme = 'light' | 'dark'

type ThemeToggleProps = {
  language: Language
  onThemeChange: () => void
  theme: Theme
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4.5 w-4.5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.2 14.4A7.9 7.9 0 0 1 9.6 3.8 8.7 8.7 0 1 0 20.2 14.4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4.5 w-4.5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM12 2.8v2M12 19.2v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.8 12h2M19.2 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function ThemeToggle({
  language,
  onThemeChange,
  theme,
}: ThemeToggleProps) {
  const t = translations[language]
  const isDark = theme === 'dark'
  const label = isDark ? t.themeSwitchToLight : t.themeSwitchToDark

  return (
    <button
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-violet/15 bg-white/55 text-violet shadow-[0_8px_24px_rgba(31,17,71,0.05)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:border-violet/30 hover:bg-white/80 hover:text-dark-purple hover:shadow-[0_12px_32px_rgba(31,17,71,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet dark:border-white/10 dark:bg-white/[0.06] dark:text-soft-lavender dark:hover:border-soft-lavender/25 dark:hover:bg-white/12 dark:hover:text-white sm:h-8 sm:w-8"
      onClick={onThemeChange}
      type="button"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
