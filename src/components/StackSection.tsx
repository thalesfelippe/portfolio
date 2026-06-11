import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { ScrollReveal } from './ScrollReveal'
import { TechBadgeIcon } from './TechBadgeIcon'
import { Card, SectionTitle } from './ui'

type StackSectionProps = {
  language: Language
}

export function StackSection({ language }: StackSectionProps) {
  const t = translations[language]

  return (
    <section
      aria-labelledby="stack-title"
      className="grid gap-6 py-10 sm:gap-8 sm:py-12 lg:py-20"
    >
      <SectionTitle
        eyebrow={
          <LanguageTransitionText
            as="span"
            reserveText={[
              translations.en.stack.eyebrow,
              translations.pt.stack.eyebrow,
            ]}
            speed={12}
            text={t.stack.eyebrow}
          />
        }
        id="stack-title"
        subtitle={
          t.stack.subtitle ? (
            <LanguageTransitionText
              as="span"
              mode="fade"
              reserveText={[
                translations.en.stack.subtitle,
                translations.pt.stack.subtitle,
              ]}
              text={t.stack.subtitle}
            />
          ) : undefined
        }
        title={
          <LanguageTransitionText
            as="span"
            mode="fade"
            reserveText={[
              translations.en.stack.title,
              translations.pt.stack.title,
            ]}
            text={t.stack.title}
          />
        }
      />

      <div className="grid items-stretch gap-3.5 sm:gap-4 md:grid-cols-2 xl:grid-cols-6">
        {t.stack.categories.map((category, index) => {
          const enCategory = translations.en.stack.categories[index]
          const ptCategory = translations.pt.stack.categories[index]

          return (
            <ScrollReveal
              className={`h-full xl:col-span-2 ${
                index === 3 ? 'xl:col-start-2' : ''
              }`}
              delay={Math.min(index * 70, 240)}
              key={category.name}
            >
              <Card
                className="group relative h-full overflow-hidden p-4 transition duration-300 hover:-translate-y-0.5 hover:border-violet/25 hover:shadow-[0_24px_70px_rgba(108,43,217,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:hover:border-soft-lavender/20 sm:p-5"
              >
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-violet/30 to-transparent dark:via-soft-lavender/24" />
                <div className="grid gap-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-violet dark:text-soft-lavender sm:text-sm sm:tracking-[0.18em]">
                    <LanguageTransitionText
                      as="span"
                      reserveText={[enCategory.name, ptCategory.name]}
                      speed={11}
                      text={category.name}
                    />
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={`${category.name}-${item}`}>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/12 bg-[#fbfaff]/62 px-2 py-1 text-[0.65rem] font-semibold text-muted-text shadow-[0_8px_22px_rgba(31,17,71,0.035)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 sm:px-2.5 sm:text-[0.7rem]">
                          <TechBadgeIcon name={item} />
                          <LanguageTransitionText
                            as="span"
                            reserveText={[
                              enCategory.items[itemIndex],
                              ptCategory.items[itemIndex],
                            ]}
                            speed={8}
                            text={item}
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
