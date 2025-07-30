import type React from 'react'
import type { Metadata } from 'next'
import { Provider } from '@/components/ui/provider'

export const metadata: Metadata = {
  title: "Ridha Arlian Alhaqie - Web Developer",
  description: "Portfolio of Ridha Arlian Alhaqie. A web developer from Indonesia.",
  generator: "Next.js",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </>
  )
}