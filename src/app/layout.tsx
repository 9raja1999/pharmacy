import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, PT_Serif_Caption } from 'next/font/google'
import ThemeProvider from '@/providers/ThemeProvider'

const font = PT_Serif_Caption({ display: 'swap', weight: '400', subsets: ['cyrillic'] })


export const metadata: Metadata = {
  title: 'Pharmacy',
  description: 'Pharmacy app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
