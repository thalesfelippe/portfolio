import { coreTranslations } from '../i18n/core'
import type { Language } from '../i18n/translations'

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
  const t = coreTranslations[language]
  const currentLanguageLabel = language.toUpperCase()

  return (
    <button
      aria-label={t.languageToggleLabel}
      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-[10px] border border-violet/16 bg-[#fbfaff]/64 px-2.5 text-xs font-semibold text-dark-text shadow-[0_8px_24px_rgba(31,17,71,0.045)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:border-violet/30 hover:bg-[#f7f3ff]/86 hover:shadow-[0_12px_32px_rgba(31,17,71,0.07)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:border-soft-lavender/25 dark:hover:bg-white/12 sm:h-8"
      onClick={onLanguageChange}
      type="button"
    >
      <LanguageIcon />
      <span>{currentLanguageLabel}</span>
    </button>
  )
}
