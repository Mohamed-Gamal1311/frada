"use client"
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Panel1 from "../../../../public/Images/Panels/panal-1.jpg"
import Panel2 from "../../../../public/Images/Panels/panal-2.jpg"
import Panel3 from "../../../../public/Images/Panels/panal-3.jpg"
import Panel4 from "../../../../public/Images/Panels/panal-4.jpg"
import Panel5 from "../../../../public/Images/Panels/panal-5.jpg"
import Panel6 from "../../../../public/Images/Panels/panal-6.jpg"
import Left from '../../../../public/Images/Panels/LEFT.png'
import right from '../../../../public/Images/Panels/arrow-right.png'
import "./Panel.css"
import { useRef, useEffect, useState } from 'react'

export default function Panel() {

    const cardRef = useRef(null);


    const carouselRef = useRef(null);

    const images = [
        {
            imageURL: { Panel1 },
            alt: "Panel 1"
        }, {
            imageURL: { Panel2 },
            alt: "Panel 2"
        },
        {
            imageURL: { Panel3 },
            alt: "Panel 3"
        }, {
            imageURL: { Panel4 },
            alt: "Panel 4"
        }, {
            imageURL: { Panel5 },
            alt: "Panel 5"
        }, {
            imageURL: { Panel6 },
            alt: "Panel 6"
        },

    ]



    useEffect(() => {
        // Set the initial width of the card
        const cardWidth = cardRef.current.offsetWidth;
        // Optionally, you can set the card width to state if it may change dynamically
        // setCardWidth(cardWidth);
    }, []);

    const handleScroll = (direction) => {
        const cardWidth = cardRef.current.offsetWidth;

        const scrollOptions = {
            behavior: 'smooth',
            block: 'start',
            inline: direction === 'left' ? 'start' : 'end',
        };

        if (direction === 'left') {
            carouselRef.current.scrollLeft -= cardWidth; // Adjust the scroll distance as needed
        } else if (direction === 'right') {
            carouselRef.current.scrollLeft += cardWidth; // Adjust the scroll distance as needed
        }
    };


    return (

        <>

            <div className="wrapper PANEL">
                {/* <i id="left" className="fa-solid fa-angle-left" onClick={() => handleScroll('left')}></i> */}
                <Image src={Left} alt='left' id="left" className="leftarrow fa-solid fa-angle-left" onClick={() => handleScroll('left')} />
                <div className="carousel" ref={carouselRef}>

                    <Image
                        src={Panel1}
                        ref={cardRef}
                        alt="Ad Panel"
                    />
                    <Image
                        src={Panel2}
                        ref={cardRef}
                        alt="Ad Panel"

                    />
                    <Image
                        src={Panel3}
                        ref={cardRef}
                        alt="Ad Panel"

                    />
                    <Image
                        src={Panel4}
                        ref={cardRef}
                        alt="Ad Panel"

                    />
                    <Image
                        src={Panel5}
                        ref={cardRef}
                        alt="Ad Panel"

                    />
                    <Image
                        src={Panel6}
                        ref={cardRef}
                        alt="Ad Panel"

                    />

                </div>
                {/* <i id="right" className="fa-solid fa-angle-right" onClick={() => handleScroll('right')}></i> */}
                <Image src={right} alt='right' id="right" className="fa-solid fa-angle-right" onClick={() => handleScroll('right')} />

            </div>


        </>

    )
}