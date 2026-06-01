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
    'border-violet bg-violet text-white shadow-[0_16px_40px_rgba(108,43,217,0.28)] hover:-translate-y-0.5 hover:bg-dark-purple hover:shadow-[0_20px_50px_rgba(108,43,217,0.34)] dark:border-violet dark:bg-violet dark:text-white dark:hover:bg-soft-lavender dark:hover:text-deep-navy',
  secondary:
    'border-violet/15 bg-white/70 text-dark-text shadow-[0_10px_30px_rgba(31,17,71,0.06)] backdrop-blur-md hover:-translate-y-0.5 hover:border-violet/30 hover:bg-white hover:shadow-[0_16px_40px_rgba(31,17,71,0.1)] dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:border-soft-lavender/25 dark:hover:bg-white/12',
  ghost:
    'border-transparent bg-transparent text-muted-text hover:-translate-y-0.5 hover:bg-violet/10 hover:text-violet dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
}

const baseClasses =
  'inline-flex items-center justify-center rounded-xl border px-5 py-2.5 text-sm font-semibold transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet disabled:pointer-events-none disabled:opacity-50'

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
