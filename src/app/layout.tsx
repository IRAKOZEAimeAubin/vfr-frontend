import './globals.css'
import type {Metadata} from 'next'
import {Montserrat, Roboto_Mono, Lora} from 'next/font/google'
import {GiMoneyStack} from 'react-icons/gi'
import {PiUsersFourDuotone} from 'react-icons/pi'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'VFR',
  description: 'Employees savings and small loans management system.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${robotoMono.variable} ${lora.variable}`}
    >
      <body className='bg-white flex min-h-screen w-screen'>
        <aside className='lg:w-72 h-screen border-r border-dashed flex flex-col py-6 px-4'>
          <div className=''>
            <span className='uppercase text-4xl font-bold text-vfr'>vfr</span>
          </div>
          <div>
            <span className='uppercase font-semibold text-xs text-gray-400 p-2 rounded-md hover:text-black transition-all ease-in-out delay-75'>
              Services
            </span>
            <Link
              href='/'
              className='flex items-center gap-3 p-2 rounded-md hover:text-vfr hover:bg-vfr/20 transition-all ease-in-out delay-75'
            >
              <PiUsersFourDuotone className='text-lg hover:text-vfr' />
              <span className='font-medium'>Members</span>
            </Link>
            <Link
              href='/savings'
              className='flex items-center gap-3 p-2 rounded-md mb-2 hover:text-vfr hover:bg-vfr/20 transition-all ease-in-out delay-75'
            >
              <PiUsersFourDuotone className='text-lg hover:text-vfr' />
              <span className='font-medium'>Savings</span>
            </Link>
            <Link
              href='/loans'
              className='flex items-center gap-3 p-2 rounded-md mb-2 hover:text-vfr hover:bg-vfr/20 transition-all ease-in-out delay-75'
            >
              <PiUsersFourDuotone className='text-lg hover:text-vfr' />
              <span className='font-medium'>Loans</span>
            </Link>
            <Link
              href='/loanTypes'
              className='flex items-center gap-3 p-2 rounded-md mb-2 hover:text-vfr hover:bg-vfr/20 transition-all ease-in-out delay-75'
            >
              <PiUsersFourDuotone className='text-lg hover:text-vfr' />
              <span className='font-medium'>Loan Settings</span>
            </Link>
          </div>
          <div>
            <span className='uppercase font-semibold text-xs text-gray-400 hover:text-black transition-all ease-in-out delay-75'>
              Settings
            </span>
          </div>
        </aside>
        <main className=''>
          <nav className=''>Nav</nav>
          {children}
        </main>
      </body>
    </html>
  )
}
