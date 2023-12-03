// import { Cairo } from 'next/font/google'

// import './globals.css'
import Header from '../../../components/Header/Header'

// const cairo = Cairo({ subsets: ['arabic'] })

export const metadata = {
  title: 'Frada',
  description: 'Store',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>

    </>
  )
}
