"use client"

import "./globals.css"

import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Eva ATTAL - Trading Technology Leader & C++ Expert</title>
        <meta name="description" content="Eva ATTAL - Trading Technology Leader & C++ Expert specializing in electronic trading, algorithmic trading systems, and low-latency infrastructure" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="px-2 sm:container sm:mx-auto">
            <div className="px-4">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
