"use client"
import Image from 'next/image'
import { Card } from 'react-bootstrap'
import './ImagesHolder.css'
import { useState } from 'react';

export default function ImagesHolder() {

    const [isHovered, setIsHovered] = useState(false);
    const [hoveredPhoto, setHoveredPhoto] = useState('https://i.ibb.co/nBYW2dS/1.jpg');

    const handlePhotoHover = (photo) => {
        setHoveredPhoto(photo);
    };


    return (
        <div className='ImagesHolder-content'>
            <div className='ImagesHolder' >

                <Card.Img variant="top" src={hoveredPhoto} width={300} alt={'main-img'} />
                <div className='parent-smallimage'>
                    <div className='small-image' style={{ height: '60vh' }}>

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
                </div>

            </div>
        </div>
    )
}

