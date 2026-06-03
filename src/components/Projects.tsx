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
      className="pointer-events-none absolute inset-y-[-3rem] left-1/2 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.92)_16%,rgba(0,0,0,0.92)_84%,transparent_100%)]"
    >
      <div className="projects-showcase-glow absolute left-[58%] top-10 h-80 w-[32rem] -translate-x-1/2 rounded-full bg-violet/12 blur-3xl dark:bg-violet/18" />
      <div className="projects-showcase-streak absolute left-[18%] top-20 h-28 w-[62rem] -rotate-12 rounded-full bg-[linear-gradient(90deg,transparent,rgba(108,43,217,0.11),rgba(185,167,255,0.16),transparent)] blur-xl dark:bg-[linear-gradient(90deg,transparent,rgba(108,43,217,0.16),rgba(185,167,255,0.12),transparent)]" />
      <div className="projects-showcase-card projects-showcase-card-a absolute right-[9%] top-24 h-36 w-56 rotate-[-8deg] rounded-3xl border border-violet/10 bg-white/20 shadow-[0_24px_80px_rgba(108,43,217,0.08)] backdrop-blur-md dark:border-soft-lavender/10 dark:bg-white/[0.035]" />
      <div className="projects-showcase-card projects-showcase-card-b absolute bottom-20 left-[8%] h-28 w-48 rotate-6 rounded-3xl border border-violet/8 bg-white/18 shadow-[0_18px_70px_rgba(31,17,71,0.06)] backdrop-blur-md dark:border-soft-lavender/8 dark:bg-white/[0.03]" />
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
          const projectHref = (project as { href?: string }).href
          const ptProject = translations.pt.projects.items[index]

          return (
            <ScrollReveal
              className="h-full"
              delay={Math.min(index * 80, 260)}
              key={project.name}
            >
              <Card
                className="group relative grid h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-violet/25 hover:shadow-[0_28px_80px_rgba(108,43,217,0.14)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:hover:border-soft-lavender/20"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/35 to-transparent dark:via-soft-lavender/28" />
                <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-44 w-44 rounded-full bg-violet/10 blur-3xl dark:bg-soft-lavender/8" />

                <div className="relative overflow-hidden border-b border-violet/8 bg-violet/7 dark:border-white/8 dark:bg-white/[0.035]">
                  {projectCover?.src ? (
                    <img
                      alt={projectCover.alt}
                      className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-44"
                      height="630"
                      loading="lazy"
                      src={projectCover.src}
                      width="1200"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="relative grid h-40 place-items-center overflow-hidden sm:h-44"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(185,167,255,0.34),transparent_30%),linear-gradient(135deg,rgba(108,43,217,0.18),rgba(248,247,255,0.5)_46%,rgba(31,17,71,0.16))] dark:bg-[radial-gradient(circle_at_24%_20%,rgba(185,167,255,0.22),transparent_32%),linear-gradient(135deg,rgba(108,43,217,0.24),rgba(31,17,71,0.38)_48%,rgba(11,16,32,0.72))]" />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,43,217,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(108,43,217,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-45 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_76%)] dark:bg-[linear-gradient(rgba(185,167,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(185,167,255,0.07)_1px,transparent_1px)]" />
                      <span className="relative rounded-full border border-white/30 bg-white/35 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-violet shadow-[0_16px_45px_rgba(31,17,71,0.12)] backdrop-blur-md dark:border-soft-lavender/18 dark:bg-white/[0.06] dark:text-soft-lavender">
                        {project.name}
                      </span>
                    </div>
                  )}
                </div>

              <div className="relative grid h-full gap-4 p-4 sm:gap-5 sm:p-6">
                <div className="grid gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-violet/12 bg-violet/8 px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-violet dark:border-soft-lavender/16 dark:bg-soft-lavender/10 dark:text-soft-lavender sm:px-3 sm:text-[0.68rem] sm:tracking-[0.15em]">
                      <LanguageTransitionText
                        as="span"
                        mode="fade"
                        reserveText={[enProject.category, ptProject.category]}
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

                  <p className="text-sm leading-6 text-muted-text dark:text-slate-300 sm:leading-7">
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

                <div className="grid gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-text dark:text-slate-400">
                    <LanguageTransitionText
                      as="span"
                      reserveText={[
                        translations.en.projects.highlightsLabel,
                        translations.pt.projects.highlightsLabel,
                      ]}
                      speed={12}
                      text={t.projects.highlightsLabel}
                    />
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li
                        className="flex gap-2.5 text-sm leading-6 text-muted-text dark:text-slate-300"
                        key={highlight}
                      >
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-lg border border-success-accent/18 bg-success-accent/10 text-success-accent">
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
                </div>

                <div className="grid gap-3 border-t border-violet/8 pt-5 dark:border-white/8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-text dark:text-slate-400">
                    <LanguageTransitionText
                      as="span"
                      reserveText={[
                        translations.en.projects.stackLabel,
                        translations.pt.projects.stackLabel,
                      ]}
                      speed={12}
                      text={t.projects.stackLabel}
                    />
                  </p>
                  <ul
                    aria-label={`${project.name} ${t.projects.stackLabel}`}
                    className="flex flex-wrap gap-2"
                  >
                    {project.stack.map((tech, techIndex) => (
                      <li key={`${project.name}-${tech}`}>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/12 bg-white/55 px-2 py-1 text-[0.65rem] font-semibold text-muted-text shadow-[0_8px_24px_rgba(31,17,71,0.04)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 sm:px-2.5 sm:text-[0.68rem]">
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
                  </ul>
                </div>

                <div className="mt-auto">
                  {projectHref ? (
                    <a
                      className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-violet/15 bg-violet/10 px-3.5 py-2 text-sm font-semibold text-violet transition hover:-translate-y-0.5 hover:border-violet/30 hover:bg-violet/14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet dark:border-soft-lavender/18 dark:bg-soft-lavender/10 dark:text-soft-lavender"
                      href={projectHref}
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
                    <span className="inline-flex items-center gap-2 rounded-xl border border-violet/10 bg-white/50 px-3.5 py-2 text-sm font-semibold text-muted-text dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400">
                      <LanguageTransitionText
                        as="span"
                        mode="fade"
                        reserveText={[
                          translations.en.projects.placeholderLinkLabel,
                          translations.pt.projects.placeholderLinkLabel,
                        ]}
                        text={t.projects.placeholderLinkLabel}
                      />
                    </span>
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
