import type { ReactNode } from 'react'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { ScrollReveal } from './ScrollReveal'
import { SectionTitle } from './ui'

type AboutProps = {
  language: Language
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m5 12 4.2 4L19 6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function ProfileMarker() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-lg border border-violet/12 bg-violet/8 text-violet dark:border-soft-lavender/12 dark:bg-soft-lavender/8 dark:text-soft-lavender"
    >
      <span className="h-1 w-1 rounded-full bg-current" />
    </span>
  )
}

function AboutCardShell({
  children,
  title,
}: {
  children: ReactNode
  title: ReactNode
}) {
  return (
    <section className="group relative overflow-hidden rounded-2xl border border-violet/12 bg-white/68 p-3.5 shadow-[0_14px_42px_rgba(31,17,71,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-violet/22 hover:shadow-[0_18px_52px_rgba(108,43,217,0.11)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-soft-lavender/12 dark:bg-[#111528]/70 dark:shadow-[0_18px_52px_rgba(0,0,0,0.2)]">
      <div className="pointer-events-none absolute inset-x-3.5 top-0 h-px bg-gradient-to-r from-transparent via-violet/28 to-transparent dark:via-soft-lavender/24" />
      <div className="pointer-events-none absolute right-[-3rem] top-[-3rem] h-20 w-20 rounded-full bg-violet/8 blur-2xl dark:bg-soft-lavender/8" />
      <div className="relative grid gap-2.5">
        <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.17em] text-violet/82 dark:text-soft-lavender/82">
          {title}
        </h3>
        {children}
      </div>
    </section>
  )
}

function AboutSnapshotCard({ language }: AboutProps) {
  const t = translations[language]

  return (
    <AboutCardShell
      title={
        <LanguageTransitionText
          as="span"
          mode="fade"
          reserveText={[
            translations.en.about.snapshotTitle,
            translations.pt.about.snapshotTitle,
          ]}
          text={t.about.snapshotTitle}
        />
      }
    >
      <dl className="divide-y divide-violet/10 dark:divide-soft-lavender/10">
        {t.about.snapshot.map((item, index) => (
          <div className="flex gap-2 py-2 first:pt-0 last:pb-0" key={item.label}>
            <ProfileMarker />
            <div className="min-w-0">
              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-text dark:text-slate-400">
                <LanguageTransitionText
                  as="span"
                  mode="fade"
                  reserveText={[
                    translations.en.about.snapshot[index].label,
                    translations.pt.about.snapshot[index].label,
                  ]}
                  text={item.label}
                />
              </dt>
              <dd className="mt-0.5 text-[0.84rem] font-bold leading-snug text-dark-text dark:text-white">
                <LanguageTransitionText
                  as="span"
                  mode="fade"
                  reserveText={[
                    translations.en.about.snapshot[index].value,
                    translations.pt.about.snapshot[index].value,
                  ]}
                  text={item.value}
                />
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </AboutCardShell>
  )
}

function AboutSolveCard({ language }: AboutProps) {
  const t = translations[language]

  return (
    <AboutCardShell
      title={
        <LanguageTransitionText
          as="span"
          mode="fade"
          reserveText={[
            translations.en.about.usuallySolveTitle,
            translations.pt.about.usuallySolveTitle,
          ]}
          text={t.about.usuallySolveTitle}
        />
      }
    >
      <ul className="grid gap-1.5">
        {t.about.usuallySolve.map((item, index) => (
          <li
            className="flex items-center gap-2 rounded-xl border border-violet/10 bg-violet/[0.035] px-3 py-2 text-[0.84rem] font-semibold text-dark-text dark:border-soft-lavender/10 dark:bg-soft-lavender/[0.045] dark:text-slate-100"
            key={item}
          >
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-lg border border-success-accent/18 bg-success-accent/10 text-success-accent [&>svg]:h-3.5 [&>svg]:w-3.5">
              <CheckIcon />
            </span>
            <LanguageTransitionText
              as="span"
              mode="fade"
              reserveText={[
                translations.en.about.usuallySolve[index],
                translations.pt.about.usuallySolve[index],
              ]}
              text={item}
            />
          </li>
        ))}
      </ul>
    </AboutCardShell>
  )
}

function AboutBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-[-4rem] left-1/2 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.95)_18%,rgba(0,0,0,0.95)_82%,transparent_100%)]"
    >
      <div className="about-system-glow-drift absolute inset-0 bg-[radial-gradient(ellipse_at_82%_48%,rgba(108,43,217,0.18),rgba(185,167,255,0.08)_30%,transparent_68%)] dark:bg-[radial-gradient(ellipse_at_82%_48%,rgba(108,43,217,0.26),rgba(185,167,255,0.08)_34%,transparent_72%)]" />
      <div className="about-system-sheen-drift absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_42%,rgba(108,43,217,0.06)_64%,transparent_86%)] dark:bg-[linear-gradient(115deg,transparent_0%,transparent_42%,rgba(185,167,255,0.055)_64%,transparent_86%)]" />

      <svg
        className="about-system-map-float absolute inset-0 h-full w-full text-violet/44 dark:text-soft-lavender/36"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 620"
      >
        <defs>
          <linearGradient id="about-line-fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="28%" stopColor="currentColor" stopOpacity="0.035" />
            <stop offset="58%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="82%" stopColor="currentColor" stopOpacity="0.62" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="about-node-fade" cx="82%" cy="48%" r="58%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.62" />
            <stop offset="52%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g
          className="about-system-lines"
          stroke="url(#about-line-fade)"
          strokeLinecap="round"
          strokeWidth="1"
        >
          <path d="M104 430 C246 286 392 248 572 266 C760 284 884 210 1184 92" />
          <path d="M186 146 C342 224 508 214 680 142 C830 80 1004 94 1296 190" />
          <path d="M80 532 C284 404 452 374 656 408 C836 438 994 386 1330 274" />
          <path d="M296 322 H532 C606 322 642 286 642 224 V112" />
          <path d="M748 276 V346 C748 400 786 426 852 426 H1236" />
          <path d="M410 90 V164 C410 218 446 248 506 248 H880 C960 248 1000 286 1000 356 V530" />
          <path d="M902 132 C962 178 1020 190 1098 164 C1180 138 1246 158 1348 234" />
          <path d="M694 482 C780 444 848 448 932 492 C1018 536 1108 522 1266 448" />
        </g>
        <g className="about-system-nodes" fill="url(#about-node-fade)">
          {[
            [186, 146],
            [296, 322],
            [410, 90],
            [506, 248],
            [572, 266],
            [642, 112],
            [748, 276],
            [852, 426],
            [902, 132],
            [1000, 356],
            [1098, 164],
            [1184, 92],
            [1236, 426],
            [1296, 190],
            [1330, 274],
          ].map(([cx, cy]) => (
            <circle
              cx={cx}
              cy={cy}
              key={`${cx}-${cy}`}
              r="3.5"
            />
          ))}
        </g>
        <g
          className="about-system-orbits"
          stroke="url(#about-line-fade)"
          strokeWidth="1"
        >
          <circle cx="1040" cy="190" r="66" />
          <circle cx="1192" cy="366" r="96" />
          <ellipse cx="910" cy="332" rx="148" ry="72" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#F8F7FF_0%,rgba(248,247,255,0.78)_42%,transparent_72%)] dark:bg-[linear-gradient(90deg,#070a18_0%,rgba(7,10,24,0.74)_42%,transparent_72%)]" />
    </div>
  )
}

export function About({ language }: AboutProps) {
  const t = translations[language]

  return (
    <section
      aria-labelledby="about-title"
      className="relative isolate grid gap-6 py-10 lg:grid-cols-[minmax(0,1fr)_20.5rem] lg:gap-10 lg:py-18"
      id="about"
    >
      <AboutBackground />

      <div className="relative z-10 grid min-w-0 max-w-[44rem] gap-3.5 sm:gap-4">
        <SectionTitle
          eyebrow={
            <LanguageTransitionText
              as="span"
              reserveText={[
                translations.en.about.eyebrow,
                translations.pt.about.eyebrow,
              ]}
              speed={12}
              text={t.about.eyebrow}
            />
          }
          id="about-title"
          title={
            <LanguageTransitionText
              as="span"
              mode="fade"
              reserveText={[
                translations.en.about.title,
                translations.pt.about.title,
              ]}
              text={t.about.title}
            />
          }
        />

        <ScrollReveal
          className="grid gap-2.5 text-[0.95rem] leading-[1.62] text-muted-text dark:text-slate-300 sm:text-base sm:leading-[1.68]"
          delay={80}
        >
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={paragraph}>
              <LanguageTransitionText
                as="span"
                mode="fade"
                reserveText={[
                  translations.en.about.paragraphs[index],
                  translations.pt.about.paragraphs[index],
                ]}
                text={paragraph}
              />
            </p>
          ))}
        </ScrollReveal>
      </div>

      <aside className="relative z-10 grid min-w-0 gap-2.5">
        <ScrollReveal delay={120} direction="right">
          <AboutSnapshotCard language={language} />
        </ScrollReveal>
        <ScrollReveal delay={190} direction="right">
          <AboutSolveCard language={language} />
        </ScrollReveal>
      </aside>
    </section>
  )
}
