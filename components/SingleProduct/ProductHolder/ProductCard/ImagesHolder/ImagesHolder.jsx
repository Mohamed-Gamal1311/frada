"use client"
import Image from 'next/image'

import { Card } from 'react-bootstrap'
import './ImagesHolder.css'
import { useState } from 'react';

export default function ImagesHolder({ height }) {


    const [isHovered, setIsHovered] = useState(false);
    const [hoveredPhoto, setHoveredPhoto] = useState('https://i.ibb.co/nBYW2dS/1.jpg');

    const handlePhotoHover = (photo) => {
        setHoveredPhoto(photo);
    };


    return (
        <div >
            <div className='images-holder'>
                <div className='mainimage-holder'>
                    <Image src={hoveredPhoto} width={500} height={500} alt={'main-img'} />
                </div>
                <div className='subimage-holder'>

                    <div className='image-hover' onMouseEnter={() => handlePhotoHover("https://i.ibb.co/VTjkqx7/7.jpg")}>
                        <Image src="https://i.ibb.co/VTjkqx7/7.jpg" width={80} height={80} alt={'small-Image'} className="ml-2" />
                    </div>
                    <div className='image-hover' onMouseEnter={() => handlePhotoHover("https://i.ibb.co/3RjmqSZ/6.jpg")}
                    >
                        <Image src="https://i.ibb.co/3RjmqSZ/6.jpg" width={80} height={80} alt={'small-Image'} className="ml-2" />
                    </div>
                    <div className='image-hover' width onMouseEnter={() => handlePhotoHover("https://i.ibb.co/Yj2JMfH/5.jpg")}
                    >
                        <Image src="https://i.ibb.co/Yj2JMfH/5.jpg" width={80} height={80} alt={'small-Image'} className="ml-2" />
                    </div>
                    <div className='image-hover' onMouseEnter={() => handlePhotoHover("https://i.ibb.co/BZSfkyH/4.jpg")}
                    >
                        <Image src="https://i.ibb.co/BZSfkyH/4.jpg" width={80} height={80} alt={'small-Image'} className="ml-2" />
                    </div>
                    <div className='image-hover' onMouseEnter={() => handlePhotoHover("https://i.ibb.co/nBYW2dS/1.jpg")}
                    >
                        <Image src="https://i.ibb.co/nBYW2dS/1.jpg" width={80} height={80} alt={'small-Image'} className="ml-2" />
                    </div>

                    <div className='image-hover' onMouseEnter={() => handlePhotoHover("https://i.ibb.co/3RjmqSZ/6.jpg")}>
                        <Image src="https://i.ibb.co/3RjmqSZ/6.jpg" width={80} height={80} alt={'small-img'} className="ml-2" />
                    </div>

                </div>


            </div>

        </div>
    )
}

