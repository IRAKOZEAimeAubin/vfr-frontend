import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Roboto_Mono, Lora } from 'next/font/google'
import Dashboard from './dashboard/page';

const montserrat = Montserrat( {
  subsets: [ 'latin' ],
  display: 'swap',
  variable: '--font-montserrat'
} )

const robotoMono = Roboto_Mono( {
  subsets: [ 'latin' ],
  display: 'swap',
  variable: '--font-roboto-mono'
} )

const lora = Lora( {
  subsets: [ 'latin' ],
  display: 'swap',
  variable: '--font-lora'
} )

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
    <html lang='en' className={`${ montserrat.variable } ${ robotoMono.variable } ${ lora.variable }`}>
      <body>
        <Dashboard />
        {children}
      </body>
    </html>
  )
}
