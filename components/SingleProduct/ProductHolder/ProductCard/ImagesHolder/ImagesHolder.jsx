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
        <div className='ImagesHolder-content' style={{ width: { height } }}>
            <div className='ImagesHolder' >

                <div > <Card.Img src={hoveredPhoto} alt={'main-img'} /></div>
                <div className='small-image' >

                    <div className='image-hover' onMouseEnter={() => handlePhotoHover("https://i.ibb.co/VTjkqx7/7.jpg")}

                    >
                        <img src="https://i.ibb.co/VTjkqx7/7.jpg" alt={'small-img'} className="ml-2" />
                    </div>
                    <div className='image-hover' onMouseEnter={() => handlePhotoHover("https://i.ibb.co/3RjmqSZ/6.jpg")}
                    >
                        <img src="https://i.ibb.co/3RjmqSZ/6.jpg" alt={'small-img'} className="ml-2" />
                    </div>
                    <div className='image-hover' onMouseEnter={() => handlePhotoHover("https://i.ibb.co/Yj2JMfH/5.jpg")}
                    >
                        <img src="https://i.ibb.co/Yj2JMfH/5.jpg" alt={'small-img'} className="ml-2" />
                    </div>
                    <div className='image-hover' onMouseEnter={() => handlePhotoHover("https://i.ibb.co/BZSfkyH/4.jpg")}
                    >
                        <img src="https://i.ibb.co/BZSfkyH/4.jpg" alt={'small-img'} className="ml-2" />
                    </div>
                    <div className='image-hover' onMouseEnter={() => handlePhotoHover("https://i.ibb.co/nBYW2dS/1.jpg")}
                    >
                        <img src="https://i.ibb.co/nBYW2dS/1.jpg" alt={'small-img'} className="ml-2" />
                    </div>

                    <div className='image-hover' onMouseEnter={() => handlePhotoHover("https://i.ibb.co/3RjmqSZ/6.jpg")}>
                        <img src="https://i.ibb.co/3RjmqSZ/6.jpg" alt={'small-img'} className="ml-2" />
                    </div>

                </div>
                {/* <div className='parent-smallimage'>

                </div> */}

            </div>
            <h1>{height}</h1>
        </div>
    )
}

