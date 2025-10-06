import { Inter, Roboto_Mono } from 'next/font/google'
 
export const SansFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const SerifFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

export const MonoFont = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})