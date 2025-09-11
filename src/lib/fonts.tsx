import { Inter, Roboto } from 'next/font/google'
 
export const PrimaryFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
})

export const HeaderFont = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-header',
})