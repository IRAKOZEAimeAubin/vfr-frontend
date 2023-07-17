import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VFR',
  description: 'Employees savings and small loans management system.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
