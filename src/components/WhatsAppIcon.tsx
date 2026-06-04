type WhatsAppIconProps = {
  className?: string
}

export function WhatsAppIcon({ className = 'h-4 w-4' }: WhatsAppIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5.2 18.8 6.1 16A7.4 7.4 0 1 1 9 18.6l-3.8.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.2 8.8c.2-.5.4-.6.8-.6h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c-.1.1-.1.3 0 .4.4.8 1.2 1.5 2 1.9.2.1.3.1.5 0l.6-.5c.2-.2.4-.2.7-.1l1.3.6c.3.1.4.3.4.6v.4c0 .5-.2.8-.6 1a3 3 0 0 1-1.6.4c-1.5 0-3.5-.8-5.1-2.4-1.5-1.5-2.2-3.4-2.2-4.2 0-.2.1-.4.2-.5Z"
        fill="currentColor"
      />
    </svg>
  )
}
