import type { Language } from '../i18n/languages'

export const WHATSAPP_PHONE = '5548984070647'

export const whatsappMessages = {
  en: 'Hi Thales! I saw your portfolio and would like to talk about an opportunity/project.',
  pt: 'Olá, Thales! Vi seu portfólio e gostaria de conversar sobre uma oportunidade/projeto.',
} satisfies Record<Language, string>

export function getWhatsAppUrl(language: Language) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    whatsappMessages[language],
  )}`
}
