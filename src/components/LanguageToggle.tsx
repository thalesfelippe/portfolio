import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'

type LanguageToggleProps = {
  language: Language
  onLanguageChange: () => void
}

function LanguageIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 5h9M9 3v2m2.5 0c-.7 4.1-2.9 7.2-6.5 9.4m2.5-6.7c1.1 2 2.6 3.6 4.5 4.8M14 19l4-9 4 9m-6.7-3h5.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function LanguageToggle({
  language,
  onLanguageChange,
}: LanguageToggleProps) {
  const t = translations[language]
  const currentLanguageLabel = language.toUpperCase()

  return (
    <button
      aria-label={t.languageToggleLabel}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-violet/15 bg-white/70 px-3 text-sm font-semibold text-dark-text shadow-[0_10px_30px_rgba(31,17,71,0.06)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:border-violet/30 hover:bg-white hover:shadow-[0_16px_40px_rgba(31,17,71,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:border-soft-lavender/25 dark:hover:bg-white/12"
      onClick={onLanguageChange}
      type="button"
    >
      <LanguageIcon />
      <span>{currentLanguageLabel}</span>
    </button>
  )
}
