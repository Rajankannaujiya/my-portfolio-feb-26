import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Rajan Kannaujiya | Full Stack Engineer',
  description: 'Full stack developer specializing in MERN, Next.js, and DevOps.',
  keywords: ["Full Stack Developer", "Software Engineer", "MERN Stack", "Next.js Portfolio"],
  authors: [{ name: "Rajan Kannaujiya" }],
  icons: {
    icon: '/Rajan-edit-image.jpeg', 
    apple: '/Rajan-edit-image.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // suppressHydrationWarning is necessary when using next-themes on <html>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans selection:bg-primary/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}