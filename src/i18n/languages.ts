export type Language = 'en' | 'pt'

export const defaultLanguage: Language = 'en'
export const languageStorageKey = 'portfolio-language'

export const htmlLanguageByCode: Record<Language, string> = {
  en: 'en',
  pt: 'pt-BR',
}

export function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'pt'
}

export function getSavedLanguage(): Language | null {
  if (typeof window === 'undefined') {
    return null
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey)
  return isLanguage(savedLanguage) ? savedLanguage : null
}
