import { Cairo } from 'next/font/google'

import './globals.css'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata = {
  title: 'Frada',
  description: 'Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
