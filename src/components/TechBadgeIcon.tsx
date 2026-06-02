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
    case 'mysql':
    case 'postgresql':
    case 'redis':
      return <DatabaseIcon className={`${iconClass} text-[#336791]`} />
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
