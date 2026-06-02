import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { TechBadgeIcon } from './TechBadgeIcon'
import { Card, SectionTitle } from './ui'

type StackSectionProps = {
  language: Language
}

function StackBackground() {
  const nodes = [
    [180, 120],
    [344, 210],
    [510, 150],
    [690, 280],
    [860, 160],
    [1040, 250],
    [1210, 130],
    [260, 430],
    [520, 490],
    [780, 430],
    [1060, 500],
    [1280, 390],
  ]

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-[-3rem] left-1/2 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.92)_14%,rgba(0,0,0,0.92)_86%,transparent_100%)]"
    >
      <div className="stack-mesh-glow absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(108,43,217,0.105),transparent_62%)] dark:bg-[radial-gradient(ellipse_at_50%_45%,rgba(185,167,255,0.075),transparent_64%)]" />
      <svg
        className="stack-mesh-map absolute inset-0 h-full w-full text-violet/34 dark:text-soft-lavender/28"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 620"
      >
        <defs>
          <linearGradient id="stack-mesh-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="28%" stopColor="currentColor" stopOpacity="0.22" />
            <stop offset="68%" stopColor="currentColor" stopOpacity="0.5" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g
          className="stack-mesh-lines"
          stroke="url(#stack-mesh-line)"
          strokeLinecap="round"
          strokeWidth="1"
        >
          <path d="M180 120 C270 174 332 184 344 210 C420 206 472 166 510 150 C604 176 650 236 690 280 C776 246 824 190 860 160 C946 178 1000 218 1040 250 C1110 216 1168 154 1210 130" />
          <path d="M260 430 C352 388 430 448 520 490 C610 476 704 426 780 430 C866 446 976 486 1060 500 C1148 474 1220 420 1280 390" />
          <path d="M344 210 V352 C344 400 370 430 430 430 H780" />
          <path d="M690 280 H904 C972 280 1020 326 1020 390 V500" />
          <path d="M510 150 V246 C510 292 546 318 610 318 H1040" />
        </g>
        <g className="stack-mesh-nodes" fill="currentColor">
          {nodes.map(([cx, cy]) => (
            <circle cx={cx} cy={cy} key={`${cx}-${cy}`} r="3.2" />
          ))}
        </g>
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,247,255,0.82)_0%,transparent_26%,transparent_74%,rgba(248,247,255,0.5)_100%)] dark:bg-[linear-gradient(90deg,rgba(7,10,24,0.74)_0%,transparent_28%,transparent_74%,rgba(7,10,24,0.42)_100%)]" />
    </div>
  )
}

export function StackSection({ language }: StackSectionProps) {
  const t = translations[language]

  return (
    <section
      aria-labelledby="stack-title"
      className="relative isolate grid gap-6 py-10 sm:gap-8 sm:py-12 lg:py-20"
      id="stack"
    >
      <StackBackground />

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
          <LanguageTransitionText
            as="span"
            mode="fade"
            reserveText={[
              translations.en.stack.subtitle,
              translations.pt.stack.subtitle,
            ]}
            text={t.stack.subtitle}
          />
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

      <div className="grid gap-3.5 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
        {t.stack.categories.map((category, index) => {
          const enCategory = translations.en.stack.categories[index]
          const ptCategory = translations.pt.stack.categories[index]

          return (
            <Card
              className="group relative overflow-hidden p-4 transition duration-300 hover:-translate-y-0.5 hover:border-violet/25 hover:shadow-[0_24px_70px_rgba(108,43,217,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:hover:border-soft-lavender/20 sm:p-5"
              key={category.name}
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
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/12 bg-white/55 px-2 py-1 text-[0.65rem] font-semibold text-muted-text shadow-[0_8px_24px_rgba(31,17,71,0.04)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 sm:px-2.5 sm:text-[0.7rem]">
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
          )
        })}
      </div>
    </section>
  )
}
