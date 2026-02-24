import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'J&J Booth Builder',
  description: 'Johnson & Johnson Congress Booth Builder',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
