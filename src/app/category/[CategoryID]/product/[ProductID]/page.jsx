"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SingleProduct from '../../../../../../components/SingleProduct/SingleProduct'
// Import your SingleProduct component

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