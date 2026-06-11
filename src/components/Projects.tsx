import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageTransitionText } from './LanguageTransitionText'
import { ScrollReveal } from './ScrollReveal'
import { TechBadgeIcon } from './TechBadgeIcon'
import { Card, SectionTitle } from './ui'

type ProjectsProps = {
  language: Language
}

type ProjectCover = {
  alt: string
  src?: string
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m5 12 4.2 4L19 6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6v6M11 13 20 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ProjectsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-[-4rem] left-1/2 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.9)_14%,rgba(0,0,0,0.92)_82%,transparent_100%)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_22%_18%,rgba(108,43,217,0.08),transparent_38%),radial-gradient(ellipse_at_78%_66%,rgba(185,167,255,0.12),transparent_36%)] dark:bg-[radial-gradient(ellipse_at_22%_18%,rgba(108,43,217,0.14),transparent_38%),radial-gradient(ellipse_at_78%_66%,rgba(185,167,255,0.08),transparent_36%)]" />
      <div className="projects-gallery-spotlight absolute left-1/2 top-14 h-[30rem] w-[72rem] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(108,43,217,0.12),rgba(185,167,255,0.05)_42%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(108,43,217,0.18),rgba(185,167,255,0.05)_42%,transparent_70%)]" />
      <div className="projects-gallery-plane projects-gallery-plane-a absolute right-[8%] top-24 h-48 w-72 rotate-[-13deg] rounded-[1.7rem] border border-violet/10 bg-[#fbfaff]/16 shadow-[0_24px_80px_rgba(108,43,217,0.07)] dark:border-soft-lavender/10 dark:bg-white/[0.035]" />
      <div className="projects-gallery-plane projects-gallery-plane-b absolute bottom-24 left-[7%] h-40 w-64 rotate-[10deg] rounded-[1.5rem] border border-violet/8 bg-[#fbfaff]/12 shadow-[0_20px_70px_rgba(31,17,71,0.05)] dark:border-soft-lavender/8 dark:bg-white/[0.025]" />
      <div className="projects-gallery-slab absolute left-[17%] top-[30%] h-24 w-[42rem] -rotate-6 rounded-full bg-[linear-gradient(90deg,transparent,rgba(108,43,217,0.08),rgba(185,167,255,0.09),transparent)] blur-2xl dark:bg-[linear-gradient(90deg,transparent,rgba(108,43,217,0.11),rgba(185,167,255,0.06),transparent)]" />
    </div>
  )
}

export function Projects({ language }: ProjectsProps) {
  const t = translations[language]

  return (
    <section
      aria-labelledby="projects-title"
      className="relative isolate grid gap-6 py-10 sm:gap-8 sm:py-12 lg:py-20"
      id="projects"
    >
      <ProjectsBackground />

      <SectionTitle
        eyebrow={
          <LanguageTransitionText
            as="span"
            reserveText={[
              translations.en.projects.eyebrow,
              translations.pt.projects.eyebrow,
            ]}
            speed={12}
            text={t.projects.eyebrow}
          />
        }
        id="projects-title"
        subtitle={
          t.projects.subtitle ? (
            <LanguageTransitionText
              as="span"
              mode="fade"
              reserveText={[
                translations.en.projects.subtitle,
                translations.pt.projects.subtitle,
              ]}
              text={t.projects.subtitle}
            />
          ) : undefined
        }
        title={
          <LanguageTransitionText
            as="span"
            mode="fade"
            reserveText={[
              translations.en.projects.title,
              translations.pt.projects.title,
            ]}
            text={t.projects.title}
          />
        }
      />

      <div className="grid items-stretch gap-4 sm:gap-5 lg:grid-cols-2">
        {t.projects.items.map((project, index) => {
          const enProject = translations.en.projects.items[index]
          const projectCover: ProjectCover | undefined = project.cover
          const ptProject = translations.pt.projects.items[index]
          const visibleHighlights = project.highlights.slice(0, 3)
          const visibleStack = project.stack.slice(0, 6)
          const hiddenStackCount = project.stack.length - visibleStack.length

          return (
            <ScrollReveal
              className="h-full"
              delay={Math.min(index * 80, 260)}
              key={project.name}
            >
              <Card
                className="group relative flex h-full flex-col overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-violet/22 hover:shadow-[0_24px_64px_rgba(108,43,217,0.11)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:hover:border-soft-lavender/18"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/35 to-transparent dark:via-soft-lavender/28" />
                <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-36 w-36 rounded-full bg-violet/8 blur-3xl dark:bg-soft-lavender/6" />

                <div className="relative rounded-[1.35rem] border-b border-violet/9 bg-violet/[0.055] p-2.5 dark:border-white/8 dark:bg-white/[0.035] sm:p-3">
                  {projectCover?.src ? (
                    <div className="relative rounded-[1.18rem] bg-violet/45 p-[2px] shadow-[0_0_0_1px_rgba(108,43,217,0.18),0_18px_48px_rgba(31,17,71,0.08)] transition duration-500 group-hover:-translate-y-0.5 group-hover:bg-violet/70 group-hover:shadow-[0_0_26px_rgba(108,43,217,0.26),0_24px_70px_rgba(108,43,217,0.18)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 dark:bg-soft-lavender/32 dark:shadow-[0_0_0_1px_rgba(185,167,255,0.1),0_18px_48px_rgba(11,16,32,0.22)] dark:group-hover:bg-soft-lavender/52 sm:p-[3px]">
                      <div className="relative rounded-[1.02rem] bg-[linear-gradient(135deg,rgba(251,250,255,0.9),rgba(185,167,255,0.14))] dark:bg-[linear-gradient(135deg,rgba(11,16,32,0.86),rgba(108,43,217,0.12))]">
                        <img
                          alt={projectCover.alt}
                          className="block h-auto w-full rounded-[1.02rem]"
                          decoding="async"
                          height="919"
                          loading="lazy"
                          src={projectCover.src}
                          width="1920"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-[1.02rem] ring-1 ring-inset ring-white/35 transition duration-500 group-hover:ring-violet/30 motion-reduce:transition-none dark:ring-white/10 dark:group-hover:ring-soft-lavender/24" />
                        <div className="pointer-events-none absolute inset-0 rounded-[1.02rem] bg-gradient-to-t from-violet/8 via-transparent to-white/10 opacity-0 transition duration-500 group-hover:opacity-100 motion-reduce:transition-none dark:from-deep-navy/14 dark:to-soft-lavender/8" />
                      </div>
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="relative grid aspect-[1920/919] place-items-center overflow-hidden rounded-[1.15rem] border border-violet/20 dark:border-soft-lavender/16"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(185,167,255,0.34),transparent_30%),linear-gradient(135deg,rgba(108,43,217,0.18),rgba(248,247,255,0.5)_46%,rgba(31,17,71,0.16))] dark:bg-[radial-gradient(circle_at_24%_20%,rgba(185,167,255,0.22),transparent_32%),linear-gradient(135deg,rgba(108,43,217,0.24),rgba(31,17,71,0.38)_48%,rgba(11,16,32,0.72))]" />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,43,217,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(108,43,217,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-45 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_76%)] dark:bg-[linear-gradient(rgba(185,167,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(185,167,255,0.07)_1px,transparent_1px)]" />
                      <span className="relative rounded-full border border-white/30 bg-white/35 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-violet shadow-[0_16px_45px_rgba(31,17,71,0.12)] backdrop-blur-md dark:border-soft-lavender/18 dark:bg-white/[0.06] dark:text-soft-lavender">
                        {project.name}
                      </span>
                    </div>
                  )}
                </div>

                <div className="relative flex h-full flex-col gap-4 p-4 sm:gap-5 sm:p-5">
                  <div className="grid gap-3">
                    <div className="flex max-w-full flex-wrap items-center gap-2">
                      <span className="inline-flex w-fit max-w-full items-center rounded-full border border-violet/12 bg-violet/8 px-2 py-0.5 text-[0.62rem] font-bold uppercase leading-5 tracking-[0.1em] text-violet dark:border-soft-lavender/16 dark:bg-soft-lavender/10 dark:text-soft-lavender sm:px-2.5 sm:text-[0.66rem] sm:tracking-[0.12em]">
                        <LanguageTransitionText
                          as="span"
                          mode="fade"
                          text={project.category}
                        />
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-dark-text dark:text-white sm:text-xl">
                      <LanguageTransitionText
                        as="span"
                        reserveText={[enProject.name, ptProject.name]}
                        speed={12}
                        text={project.name}
                      />
                    </h3>

                    <p className="text-sm leading-6 text-muted-text dark:text-slate-300">
                      <LanguageTransitionText
                        as="span"
                        mode="fade"
                        reserveText={[
                          enProject.description,
                          ptProject.description,
                        ]}
                        text={project.description}
                      />
                    </p>
                  </div>

                  <ul className="grid gap-2">
                    {visibleHighlights.map((highlight, highlightIndex) => (
                      <li
                        className="flex gap-2.5 text-sm leading-6 text-muted-text dark:text-slate-300"
                        key={highlight}
                      >
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-success-accent/18 bg-success-accent/10 text-success-accent">
                          <CheckIcon />
                        </span>
                        <LanguageTransitionText
                          as="span"
                          mode="fade"
                          reserveText={[
                            enProject.highlights[highlightIndex],
                            ptProject.highlights[highlightIndex],
                          ]}
                          text={highlight}
                        />
                      </li>
                    ))}
                  </ul>

                  <ul
                    aria-label={`${project.name} ${t.projects.stackLabel}`}
                    className="flex flex-wrap gap-2 border-t border-violet/8 pt-4 dark:border-white/8"
                  >
                    {visibleStack.map((tech, techIndex) => (
                      <li key={`${project.name}-${tech}`}>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/12 bg-[#fbfaff]/62 px-2 py-1 text-[0.65rem] font-semibold text-muted-text shadow-[0_8px_22px_rgba(31,17,71,0.035)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 sm:px-2.5 sm:text-[0.68rem]">
                          <TechBadgeIcon name={tech} />
                          <LanguageTransitionText
                            as="span"
                            reserveText={[
                              enProject.stack[techIndex],
                              ptProject.stack[techIndex],
                            ]}
                            speed={8}
                            text={tech}
                          />
                        </span>
                      </li>
                    ))}
                    {hiddenStackCount > 0 ? (
                      <li>
                        <span className="inline-flex items-center rounded-full border border-violet/10 bg-violet/7 px-2 py-1 text-[0.65rem] font-semibold text-violet dark:border-soft-lavender/12 dark:bg-soft-lavender/8 dark:text-soft-lavender sm:px-2.5 sm:text-[0.68rem]">
                          +{hiddenStackCount}
                        </span>
                      </li>
                    ) : null}
                  </ul>

                  <div className="mt-auto pt-1">
                    {project.href ? (
                      <a
                        aria-label={`${t.projects.linkLabel}: ${project.name}`}
                        className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-violet/15 bg-violet/10 px-3.5 py-2 text-sm font-semibold text-violet transition hover:-translate-y-0.5 hover:border-violet/30 hover:bg-violet/14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-soft-lavender/18 dark:bg-soft-lavender/10 dark:text-soft-lavender"
                        href={project.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <LanguageTransitionText
                          as="span"
                          reserveText={[
                            translations.en.projects.linkLabel,
                            translations.pt.projects.linkLabel,
                          ]}
                          speed={12}
                          text={t.projects.linkLabel}
                        />
                        <LinkIcon />
                      </a>
                    ) : (
                      <button
                        aria-label={`${t.projects.unavailableLabel}: ${project.name}`}
                        className="inline-flex min-h-10 cursor-not-allowed items-center gap-2 rounded-xl border border-violet/10 bg-[#fbfaff]/52 px-3.5 py-2 text-sm font-semibold text-muted-text/70 dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-400"
                        disabled
                        type="button"
                      >
                        <LanguageTransitionText
                          as="span"
                          reserveText={[
                            translations.en.projects.unavailableLabel,
                            translations.pt.projects.unavailableLabel,
                          ]}
                          speed={12}
                          text={t.projects.unavailableLabel}
                        />
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
