import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'
import SessionAuthProvider from '@/context/SessionAuthProvider'

export const metadata: Metadata = {
  title: 'Mercado Pago | De ahora en adelante, hacés más con tu dinero.',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SessionAuthProvider>
          <Providers>{children}</Providers>
        </SessionAuthProvider>
      </body>
    </html>
  )
}
