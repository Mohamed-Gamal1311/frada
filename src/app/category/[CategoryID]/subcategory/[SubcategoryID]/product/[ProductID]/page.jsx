"use client"

import Image from 'next/image'
import SingleProduct from '../../../../../../../../components/SingleProduct/SingleProduct'
// // import styles from './page.module.css'
// import Header from "../../../../../../components/Header/Header"
// import CategoriesAd from '../../../../../../components/Category/HeroAd/CategoriesAd'
// import Details from '../../../../../../../../components/Category/HeroAd/Details/Details'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


export default function Product() {
    const productRef = useRef(null);

    useEffect(() => {
        // Using GSAP 3 for fade-in animation
        gsap.fromTo(productRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }, []);

    return (
        <div ref={productRef}>
            <SingleProduct />
        </div>
    );
}