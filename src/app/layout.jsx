import { Cairo } from 'next/font/google'

import './globals.css'
import Footer from '../../components/Footer/Footer'
import FooterMobile from '../../components/FooterMobile/FooterMobile'
import Header from '../../components/Header/Header'


const cairo = Cairo({ subsets: ['arabic'] })

export const metadata = {
  title: 'Frada',
  description: 'Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={cairo.className} suppressHydrationWarning={true} >{children}


      </body>
    </html>
  )

  // suppressHydrationWarning={true}
}
