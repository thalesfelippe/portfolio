import type { ReactNode } from 'react'
import { AppBackground } from './AppBackground'
import { Container } from './ui'

type LayoutProps = {
  children: ReactNode
  header: ReactNode
}

export function Layout({ children, header }: LayoutProps) {
  return (
    <AppBackground>
      {header}
      <Container className="flex min-h-svh flex-col pt-16 sm:pt-[4.5rem]">
        <main className="flex flex-1 flex-col">{children}</main>
      </Container>
    </AppBackground>
  )
}
