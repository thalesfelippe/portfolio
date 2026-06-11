import { useEffect, useRef, useState } from 'react'
import { getWhatsAppUrl } from '../config/contact'
import type { Language } from '../i18n/languages'
import { WhatsAppIcon } from './WhatsAppIcon'

type WhatsAppWidgetProps = {
  language: Language
}

const widgetCopy = {
  en: {
    ariaLabel: 'Open WhatsApp conversation',
    button: 'Chat on WhatsApp',
    close: 'Close WhatsApp chat',
    description: 'Send me a message on WhatsApp and I’ll reply as soon as possible.',
    status: 'Available to chat',
    title: 'Want to talk about an opportunity or project?',
    toggle: 'Open WhatsApp chat widget',
  },
  pt: {
    ariaLabel: 'Abrir conversa no WhatsApp',
    button: 'Conversar no WhatsApp',
    close: 'Fechar chat do WhatsApp',
    description:
      'Me envie uma mensagem pelo WhatsApp e eu respondo assim que possível.',
    status: 'Online para conversar',
    title: 'Quer falar sobre uma oportunidade ou projeto?',
    toggle: 'Abrir widget de conversa no WhatsApp',
  },
} satisfies Record<
  Language,
  {
    ariaLabel: string
    button: string
    close: string
    description: string
    status: string
    title: string
    toggle: string
  }
>

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export function WhatsAppWidget({ language }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const widgetRef = useRef<HTMLDivElement | null>(null)
  const copy = widgetCopy[language]
  const whatsappUrl = getWhatsAppUrl(language)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target

      if (
        target instanceof Node &&
        widgetRef.current &&
        !widgetRef.current.contains(target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen])

  return (
    <div
      className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6"
      ref={widgetRef}
    >
      <div
        className={`absolute bottom-[4.65rem] right-0 w-[min(20rem,calc(100vw-2rem))] origin-bottom-right rounded-3xl border border-violet/14 bg-[#fbfaff]/88 p-4 text-left shadow-[0_24px_72px_rgba(31,17,71,0.13)] backdrop-blur-xl transition duration-200 ease-out dark:border-white/10 dark:bg-deep-navy/88 dark:shadow-[0_28px_90px_rgba(0,0,0,0.35)] ${
          isOpen
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-3 scale-[0.98] opacity-0'
        } motion-reduce:transition-none`}
        role="dialog"
        aria-label={copy.ariaLabel}
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_82%_0%,rgba(108,43,217,0.12),transparent_35%),linear-gradient(135deg,rgba(108,43,217,0.05),transparent_48%)] dark:bg-[radial-gradient(circle_at_82%_0%,rgba(185,167,255,0.12),transparent_36%),linear-gradient(135deg,rgba(108,43,217,0.11),transparent_52%)]" />
        <div className="relative grid gap-3">
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-success-accent/18 bg-success-accent/10 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-success-accent dark:border-success-accent/24 dark:bg-success-accent/12">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-success-accent shadow-[0_0_14px_rgba(34,197,94,0.75)]"
              />
              {copy.status}
            </span>
            <button
              aria-label={copy.close}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-violet/10 bg-[#fbfaff]/64 text-muted-text transition hover:border-violet/24 hover:bg-violet/10 hover:text-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:border-soft-lavender/24 dark:hover:bg-white/10 dark:hover:text-soft-lavender"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="grid gap-1.5">
            <p className="text-sm font-semibold leading-5 text-dark-text dark:text-white">
              {copy.title}
            </p>
            <p className="text-sm leading-6 text-muted-text dark:text-slate-300">
              {copy.description}
            </p>
          </div>

          <a
            aria-label={copy.ariaLabel}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-violet bg-violet px-4 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(108,43,217,0.26)] transition hover:-translate-y-0.5 hover:bg-dark-purple hover:shadow-[0_20px_46px_rgba(108,43,217,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-violet dark:bg-violet dark:hover:bg-soft-lavender dark:hover:text-deep-navy"
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsAppIcon />
            {copy.button}
            <ArrowIcon />
          </a>
        </div>
      </div>

      <button
        aria-expanded={isOpen}
        aria-label={copy.toggle}
        className="whatsapp-widget-button relative inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] border border-violet/18 bg-[#fbfaff]/84 text-violet shadow-[0_18px_44px_rgba(31,17,71,0.13)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-violet/34 hover:bg-violet hover:text-white hover:shadow-[0_22px_58px_rgba(108,43,217,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/12 dark:bg-deep-navy/78 dark:text-soft-lavender dark:shadow-[0_20px_56px_rgba(0,0,0,0.35)] dark:hover:border-soft-lavender/28 dark:hover:bg-violet dark:hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span
          aria-hidden="true"
          className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full border border-white bg-success-accent shadow-[0_0_14px_rgba(34,197,94,0.75)] dark:border-deep-navy sm:right-3 sm:top-3"
        />
        <WhatsAppIcon className="h-5 w-5" />
      </button>
    </div>
  )
}
