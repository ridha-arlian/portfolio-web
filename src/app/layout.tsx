import type React from 'react'
import type { Metadata } from 'next'
import { Provider } from '@/components/ui/provider'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'

const spaceGroteskLogo = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ridha Arlian',
  description: 'Portfolio of Ridha Arlian.',
  generator: 'Next.js',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang='en' className={`${spaceGroteskLogo.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
        <body>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </>
  )
}