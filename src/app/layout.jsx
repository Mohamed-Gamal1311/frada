import { Cairo } from 'next/font/google'
import { SizeProvider } from '../../components/SizeContext/SizeContext'
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

      <body className={cairo.className} suppressHydrationWarning={true} >

        <SizeProvider>
          <Header />
          {children}
          <Footer />
          <FooterMobile />
        </SizeProvider>
      </body>
    </html>
  )

  // suppressHydrationWarning={true}
}
