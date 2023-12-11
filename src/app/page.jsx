"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from '../../components/Header/Header'
import AdContainer from '../../components/SingleProduct/Ads/AdContainer'
import ProductInfo from '../../components/SingleProduct/ProductInfo/ProductInfo/ProductInfo'
import { useState, useEffect } from 'react'
import DynamicAd from '../../components/SingleProduct/ProductInfo/DynamicAd/DynamicAd'
import ProductVideo from '../../components/SingleProduct/ProductVideo/ProductVideo'
import ProductReviews from '../../components/SingleProduct/ProductReviews/ProductReviews'
import FooterMobile from '../../components/FooterMobile/FooterMobile'
import Footer from '../../components/Footer/Footer'

export default function Home() {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 972);

  useEffect(() => {
    // Function to update isSmallScreen based on window width
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 972);
    };

    // Event listener for window resize
    window.addEventListener('resize', updateScreenSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);


  return (
    // <Header />
    <>
      <Header />
      {/* <AdContainer /> */}
      {/* <ProductInfo /> */}
      {/* <DynamicAd /> */}
      {/* <ProductVideo /> */}
      {/* <ProductReviews /> */}
      {isSmallScreen ? (<FooterMobile />) : <Footer />}


    </>
  )
}
