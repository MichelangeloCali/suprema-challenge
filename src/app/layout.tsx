import type { Metadata } from 'next'

import { AppThemeProvider } from '@/contexts'

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
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  )
}
