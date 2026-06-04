import type { Language } from './languages'

export const resumeFiles = {
  en: {
    backEnd: '/resumes/thales-felippe-back-end-en.pdf',
    frontEnd: '/resumes/thales-felippe-front-end-en.pdf',
    fullStack: '/resumes/thales-felippe-full-stack-en.pdf',
  },
  pt: {
    backEnd: '/resumes/thales-felippe-back-end-pt-br.pdf',
    frontEnd: '/resumes/thales-felippe-front-end-pt-br.pdf',
    fullStack: '/resumes/thales-felippe-full-stack-pt-br.pdf',
  },
} satisfies Record<
  Language,
  {
    backEnd: string
    frontEnd: string
    fullStack: string
  }
>

export function getPrimaryResumeHref(language: Language) {
  return resumeFiles[language].fullStack
}
