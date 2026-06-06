import type { Language } from '../i18n/translations'
import { ResumeSection } from './ResumeSection'
import { StackSection } from './StackSection'
import { WhyWorkWithMe } from './WhyWorkWithMe'

type StackAreaProps = {
  language: Language
}

const stackAreaLabels = {
  en: 'Stack, work style, and resume',
  pt: 'Stack, estilo de trabalho e currículo',
} as const

function StackAreaBackground() {
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
      className="pointer-events-none absolute bottom-0 left-[calc(50%_-_50vw)] right-[calc(50%_-_50vw)] top-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.92)_7%,rgba(0,0,0,0.92)_93%,transparent_100%)]"
    >
      <div className="stack-mesh-glow absolute inset-0 bg-[radial-gradient(ellipse_at_52%_42%,rgba(108,43,217,0.105),transparent_58%),radial-gradient(ellipse_at_50%_78%,rgba(185,167,255,0.08),transparent_54%)] dark:bg-[radial-gradient(ellipse_at_52%_42%,rgba(185,167,255,0.075),transparent_60%),radial-gradient(ellipse_at_50%_78%,rgba(108,43,217,0.13),transparent_56%)]" />
      <svg
        className="stack-mesh-map absolute inset-0 h-full w-full text-violet/34 dark:text-soft-lavender/28"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="stack-area-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="28%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="68%" stopColor="currentColor" stopOpacity="0.48" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g
          className="stack-mesh-lines"
          stroke="url(#stack-area-line)"
          strokeLinecap="round"
          strokeWidth="1"
        >
          <path d="M180 120 C270 174 332 184 344 210 C420 206 472 166 510 150 C604 176 650 236 690 280 C776 246 824 190 860 160 C946 178 1000 218 1040 250 C1110 216 1168 154 1210 130" />
          <path d="M260 430 C352 388 430 448 520 490 C610 476 704 426 780 430 C866 446 976 486 1060 500 C1148 474 1220 420 1280 390" />
          <path d="M170 690 C330 612 462 646 620 714 C762 776 916 730 1100 644 C1192 600 1266 586 1340 612" />
          <path d="M344 210 V352 C344 400 370 430 430 430 H780" />
          <path d="M690 280 H904 C972 280 1020 326 1020 390 V500" />
          <path d="M510 150 V246 C510 292 546 318 610 318 H1040" />
          <path d="M520 490 V606 C520 654 556 690 620 690 H1100" />
        </g>
        <g className="stack-mesh-nodes" fill="currentColor">
          {nodes.map(([cx, cy]) => (
            <circle cx={cx} cy={cy} key={`${cx}-${cy}`} r="3.2" />
          ))}
          <circle cx="170" cy="690" r="3.2" />
          <circle cx="620" cy="714" r="3.2" />
          <circle cx="1100" cy="644" r="3.2" />
          <circle cx="1340" cy="612" r="3.2" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,247,255,0.84)_0%,transparent_24%,transparent_76%,rgba(248,247,255,0.56)_100%)] dark:bg-[linear-gradient(90deg,rgba(7,10,24,0.76)_0%,transparent_28%,transparent_76%,rgba(7,10,24,0.46)_100%)]" />
    </div>
  )
}

export function StackArea({ language }: StackAreaProps) {
  return (
    <section
      aria-label={stackAreaLabels[language]}
      className="relative isolate"
      id="stack"
    >
      <StackAreaBackground />

      <div className="relative z-10">
        <StackSection language={language} />
        <WhyWorkWithMe language={language} />
        <ResumeSection language={language} />
      </div>
    </section>
  )
}
