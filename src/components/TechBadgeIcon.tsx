type TechBadgeIconProps = {
  className?: string
  name: string
}

function normalizeTechName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function DatabaseIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  )
}

function ChartIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 19V5M5 19h14M9 16v-5M13 16V8M17 16v-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function CloudIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M7.5 18.5h10a4 4 0 0 0 .4-8A6 6 0 0 0 6.6 8.4 4.5 4.5 0 0 0 7.5 18.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function WorkflowIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M7 7h4a4 4 0 0 1 4 4v2M7 7l3-3M7 7l3 3M17 17h-4a4 4 0 0 1-4-4v-2M17 17l-3-3M17 17l-3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function PaymentIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 8h16M6 18h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Zm1.5-4h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function GenericTechIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3.5 19.4 8v8L12 20.5 4.6 16V8L12 3.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M12 8.2v7.6M8.7 10.1l6.6 3.8M15.3 10.1l-6.6 3.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function TechBadgeIcon({ className = 'h-3 w-3 shrink-0', name }: TechBadgeIconProps) {
  const normalizedName = normalizeTechName(name)
  const iconClass = `${className} shrink-0`

  switch (normalizedName) {
    case 'react':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#61DAFB]`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" fill="currentColor" r="1.8" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            stroke="currentColor"
            strokeWidth="1.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            stroke="currentColor"
            strokeWidth="1.5"
            transform="rotate(120 12 12)"
          />
        </svg>
      )
    case 'nextjs':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-dark-text dark:text-white`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M8 16V8l8 8V8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      )
    case 'typescript':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#3178C6]`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <rect fill="currentColor" height="18" rx="3.5" width="18" x="3" y="3" />
          <path
            d="M7 9h6M10 9v7M14 16c1.7 1 3.5.3 3.5-1 0-2-3.4-1.2-3.4-3.2 0-1.2 1.7-1.7 3.1-.9"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </svg>
      )
    case 'javascript':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#F7DF1E]`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <rect fill="currentColor" height="18" rx="3.5" width="18" x="3" y="3" />
          <path
            d="M9 8v6.5c0 1.2-.7 1.8-1.8 1.8M13.2 16c1.7 1 3.5.3 3.5-1 0-2-3.4-1.2-3.4-3.2 0-1.2 1.7-1.7 3.1-.9"
            stroke="#0B1020"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </svg>
      )
    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#38BDF8]`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 10.8c1.2-4 4.1-6 8.8-6 2.8 0 4.6 1 5.6 3-1.1-.8-2.3-1-3.8-.5-1 .4-1.8 1.1-2.7 2.2-1.4 1.7-3.2 2.2-5.3 1.5A6.6 6.6 0 0 1 6 10.8Zm-2.4 5.4c1.2-4 4.1-6 8.8-6 2.8 0 4.6 1 5.6 3-1.1-.8-2.3-1-3.8-.5-1 .4-1.8 1.1-2.7 2.2-1.4 1.7-3.2 2.2-5.3 1.5a6.6 6.6 0 0 1-2.6-.2Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'python':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#3776AB]`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3h3.2A3.8 3.8 0 0 1 19 6.8V11H9.5A2.5 2.5 0 0 0 7 13.5V15H5.8A2.8 2.8 0 0 1 3 12.2V9.8A3.8 3.8 0 0 1 6.8 6H12V3Z"
            fill="currentColor"
          />
          <path
            d="M12 21H8.8A3.8 3.8 0 0 1 5 17.2V13h9.5a2.5 2.5 0 0 0 2.5-2.5V9h1.2A2.8 2.8 0 0 1 21 11.8v2.4a3.8 3.8 0 0 1-3.8 3.8H12v3Z"
            fill="#FFD43B"
          />
          <circle cx="8.2" cy="8.2" fill="white" r="0.85" />
          <circle cx="15.8" cy="15.8" fill="#0B1020" r="0.85" />
        </svg>
      )
    case 'nodejs':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#5FA04E]`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3.2 19.5 7.4v8.4L12 20.2l-7.5-4.4V7.4L12 3.2Z"
            fill="currentColor"
          />
          <path
            d="M8.5 15V9.2h2.1l3.2 5.8V9.2h1.7V15h-2.1l-3.2-5.7V15H8.5Z"
            fill="white"
          />
        </svg>
      )
    case 'laravel':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#FF2D20]`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M4 6.5 8 4l4 2.5v5L8 14 4 11.5v-5Zm8 0L16 4l4 2.5v5L16 14l-4-2.5v-5ZM8 14l4-2.5L16 14v4.5L12 21l-4-2.5V14Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      )
    case 'django':
    case 'djangorestframework':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#44B78B]`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M7 5h5.3C15.9 5 18 7.4 18 12s-2.1 7-5.7 7H7V5Zm3.2 3v8h1.9c1.7 0 2.7-1.2 2.7-4s-1-4-2.7-4h-1.9Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'apis':
    case 'restapis':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-violet dark:text-soft-lavender`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="m8 7-4 5 4 5M16 7l4 5-4 5M14 5l-4 14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      )
    case 'webhooks':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-success-accent`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M9.2 9.2 14.8 14.8M14.5 6.5h2.8v2.8M17.3 6.7 13.5 10.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      )
    case 'postgresql':
      return <DatabaseIcon className={`${iconClass} text-[#336791]`} />
    case 'mysql':
      return <DatabaseIcon className={`${iconClass} text-[#E48E00]`} />
    case 'redis':
      return <DatabaseIcon className={`${iconClass} text-[#DC382D]`} />
    case 'docker':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#2496ED]`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M4 13.5h13.5c.8 0 1.6-.3 2.2-.9.1 2.1-.8 3.8-2.5 5-1.4 1-3.1 1.5-5.1 1.5H9.6c-3.2 0-5.4-1.6-6.6-4.8.4.1.7.2 1 .2Zm2-2.5h2.5v2.5H6V11Zm3.2 0h2.5v2.5H9.2V11Zm3.2 0h2.5v2.5h-2.5V11ZM9.2 8h2.5v2.5H9.2V8Zm3.2 0h2.5v2.5h-2.5V8Zm3.2 3h2.5v2.5h-2.5V11Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'github':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-dark-text dark:text-white`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            clipRule="evenodd"
            d="M12 3a9 9 0 0 0-2.8 17.5c.5.1.6-.2.6-.5v-1.6c-2.6.6-3.2-1.1-3.2-1.1-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.7.8.1-.6.3-1 .6-1.2-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.8 1-2.5-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.8 0c1.8-1.2 2.6-1 2.6-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.6.9.6 1.8V20c0 .3.2.6.6.5A9 9 0 0 0 12 3Z"
            fillRule="evenodd"
          />
        </svg>
      )
    case 'githubactions':
    case 'cicd':
      return <WorkflowIcon className={`${iconClass} text-violet dark:text-soft-lavender`} />
    case 'gcp':
    case 'heroku':
      return <CloudIcon className={`${iconClass} text-[#4285F4]`} />
    case 'firebase':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#FFCA28]`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path d="M5 18.5 7.4 4l4 7.4L14.8 7 19 18.5 12 22 5 18.5Z" fill="currentColor" />
          <path d="m7.4 4 4 7.4-6.4 7.1L7.4 4Z" fill="#F57C00" opacity="0.8" />
        </svg>
      )
    case 'prisma':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#2D3748] dark:text-slate-200`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.2 3.5 20 18.6 8.6 21 4 13.3l8.2-9.8Zm.2 4.1-5 11 7.4-1.5-2.4-9.5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'framermotion':
      return (
        <svg
          aria-hidden="true"
          className={`${iconClass} text-[#A855F7]`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 3h10v7H7V3Zm0 7h10l-5 5H7v-5Zm0 5h5v6L7 15Z" />
        </svg>
      )
    case 'recharts':
    case 'dashboards':
      return <ChartIcon className={`${iconClass} text-success-accent`} />
    case 'galaxpay':
    case 'asaas':
    case 'twilio':
    case 'rdstation':
      return <PaymentIcon className={`${iconClass} text-violet dark:text-soft-lavender`} />
    case 'enotasnfse':
    case 'docusign':
      return <GenericTechIcon className={`${iconClass} text-success-accent`} />
    case 'zapi':
    case 'crms':
      return <WorkflowIcon className={`${iconClass} text-success-accent`} />
    case 'celery':
    case 'pandas':
      return <GenericTechIcon className={`${iconClass} text-[#44B78B]`} />
    case 'reacthookform':
    case 'zod':
      return <GenericTechIcon className={`${iconClass} text-[#EC5990]`} />
    case 'swr':
      return <WorkflowIcon className={`${iconClass} text-dark-text dark:text-white`} />
    case 'styledcomponents':
      return <GenericTechIcon className={`${iconClass} text-[#DB7093]`} />
    case 'shadcnui':
      return <GenericTechIcon className={`${iconClass} text-dark-text dark:text-white`} />
    case 'html':
    case 'css':
    case 'ui':
    case 'ux':
    case 'webapps':
    case 'responsivedesign':
    case 'accessibility':
    case 'corewebvitals':
      return <GenericTechIcon className={`${iconClass} text-violet dark:text-soft-lavender`} />
    default:
      return <GenericTechIcon className={`${iconClass} text-muted-text dark:text-slate-300`} />
  }
}
