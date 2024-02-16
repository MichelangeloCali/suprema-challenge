import type { Metadata } from 'next'

import { AppThemeProvider } from '@/contexts'
import { Main, Header, Nav, LinkText } from './styles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Suprema challenge',
  description: 'This is challenge Suprema',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
