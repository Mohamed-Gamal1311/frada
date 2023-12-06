"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../src/app/page.module.css';
import Up from './EachHeader/Up';
import Middle from './EachHeader/Middle';
import Bottom from './EachHeader/Bottom';
import "./Header.css";
import UpMobile from "./HeaderMobile/Up";

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth < 992);
        };

        // Initial check
        checkScreenWidth();

        // Event listener for screen width changes
        window.addEventListener('resize', checkScreenWidth);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <>
            {isMobile ? (
                <UpMobile />
            ) : (
                <>
                    <Up />
                    <Middle />
                    <Bottom />
                </>
            )}
        </>
    );
}
