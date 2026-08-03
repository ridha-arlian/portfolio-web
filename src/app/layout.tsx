import type React from "react"
import type { Metadata } from "next"
import { Provider } from "@/components/ui/provider"
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google"

const spaceGroteskLogo = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
})

const siteUrl = "https://ridhaarlian.my.id"

export const metadata: Metadata = {
  title: {
    default: "Ridha Arlian — Software Engineer",
    template: "%s | Ridha Arlian",
  },
  description: "Portfolio of Ridha Arlian, an Informatics graduate and Software Engineer building scalable web applications with React, Next.js, Laravel, and Django.",
  generator: "Next.js",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Ridha Arlian — Software Engineer",
    description: "Informatics graduate and Software Engineer building scalable web applications with React, Next.js, Laravel, and Django.",
    url: siteUrl,
    siteName: "Ridha Arlian",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridha Arlian — Software Engineer",
    description: "Informatics graduate and Software Engineer building scalable web applications.",
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>',
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ridha Arlian",
  alternateName: "Ridha Arlian Alhaqie",
  url: siteUrl,
  jobTitle: "Software Engineer",
  email: "mailto:ridha.arlian19@gmail.com",
  sameAs: [
    "https://github.com/ridha-arlian",
    "https://linkedin.com/in/ridha-arlian",
    "https://x.com/arlian__",
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" className={`${spaceGroteskLogo.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
        </head>
        <body>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </>
  )
}