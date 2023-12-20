"use client"
import Image from 'next/image'
// import styles from './page.module.css'
import Header from '../../../../components/Header/Header'
import HeroAd from '../../../../components/Category/HeroAd/AdContent/HeroAd'
import Panel from '../../../../components/Category/HeroAd/AdContent/Panel'
import CategoriesAd from '../../../../components/Category/HeroAd/CategoriesAd'

import Details from '../../../../components/Category/HeroAd/Details/Details'
import DetailsMobile from '../../../../components/Category/HeroAd/Details/DetailsMobile'
import { useEffect, useState } from 'react'

export default function Category() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 550);
    useEffect(() => {
        if (typeof window !== 'undefined') {

            // Check if window is defined (client-side)
            if (typeof window !== 'undefined') {
                // Initial check on mount
                setIsMobile(window.innerWidth < 550);

                // Function to handle window resize
                const handleResize = () => {
                    setIsMobile(window.innerWidth < 550);
                };

                // Attach the event listener
                window.addEventListener('resize', handleResize);

                // Clean up the event listener when the component unmounts
                return () => {
                    window.removeEventListener('resize', handleResize);
                };
            }
        }
    }, []);

    return (
        <>
            <CategoriesAd subcategory={0} />

            {isMobile ? <DetailsMobile /> : <Details />}
        </>
    )
}
