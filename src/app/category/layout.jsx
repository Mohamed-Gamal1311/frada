// import { Cairo } from 'next/font/google'

// import './globals.css'
import Footer from '../../../components/Footer/Footer';
import FooterMobile from '../../../components/FooterMobile/FooterMobile';
import Header from '../../../components/Header/Header'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

// const cairo = Cairo({ subsets: ['arabic'] })

export const metadata = {
  title: 'Frada',
  description: 'Store',
}

export default function RootLayout({ children }) {
  return (
    <>

      {/* <Header />  */}

      <main>

        {children}

      </main>
      {/* <Footer /> */}
      {/* <FooterMobile /> */}

    </>
  )
}
