import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonBaseProps = {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-violet bg-violet text-white shadow-[0_16px_40px_rgba(108,43,217,0.28)] hover:bg-dark-purple dark:border-soft-lavender/40 dark:bg-soft-lavender dark:text-deep-navy dark:hover:bg-white',
  secondary:
    'border-violet/20 bg-white/80 text-dark-text hover:border-violet/40 hover:bg-white dark:border-soft-lavender/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15',
  ghost:
    'border-transparent bg-transparent text-muted-text hover:bg-violet/10 hover:text-violet dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
}

const baseClasses =
  'inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet disabled:pointer-events-none disabled:opacity-50'

export function Button({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if ('href' in props) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string
    }

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
