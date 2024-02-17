import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

import { AppThemeProvider } from '@/contexts'
import { Main, Header, Nav, LinkText } from './styles'

export const metadata: Metadata = {
  title: 'Suprema challenge',
  description: 'This is challenge Suprema',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <AppThemeProvider>
          <Header>
            <Nav>
              <Link href="/contato">
                <LinkText>Página de Contato</LinkText>
              </Link>
            </Nav>
          </Header>
          <Main>{children}</Main>
        </AppThemeProvider>
      </body>
    </html>
  )
}
