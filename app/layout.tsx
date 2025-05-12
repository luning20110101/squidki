import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Squidki Games',
  description: 'Play Squidki Games Online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
