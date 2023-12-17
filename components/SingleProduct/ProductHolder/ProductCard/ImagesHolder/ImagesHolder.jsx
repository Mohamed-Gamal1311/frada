"use client"
import Image from 'next/image'

import { Card } from 'react-bootstrap'
import './ImagesHolder.css'
import { useState, useEffect } from 'react';

import { MouseParallax } from 'react-just-parallax';
import { useParams } from 'next/navigation';

export default function ImagesHolder(props) {




    const [hoveredPhoto, setHoveredPhoto] = useState(null);
    const photo = `https://fradaksa.com/Attachment/${props.id}/${props.colorid}/${props.images[0]}`
    const handlePhotoHover = (photo) => {
        setHoveredPhoto(photo);
    };


    useEffect(() => {


        setHoveredPhoto(`https://fradaksa.com/Attachment/${props.id}/${props.colorid}/${props.images[0]}`)


    }, [props.images, props.id, props.colorid]);


    return (
        <div >
            <div className='images-holder'>
                <div className='mainimage-holder'>
                    {/* <MouseParallax> */}
                    <Image src={hoveredPhoto === null ? (photo) : (hoveredPhoto)} width={500} height={500} alt={'main-img'} />
                    {/* </MouseParallax> */}
                </div>
                <div className='subimage-holder'>

                    {props.images.length > 0 ? props.images.map((image, index) => (
                        <div key={index} className='image-hover' onMouseEnter={() => handlePhotoHover(`https://fradaksa.com/Attachment/${props.id}/${props.colorid}/${image}`)}>
                            <Image src={`https://fradaksa.com/Attachment/${props.id}/${props.colorid}/${image}`} width={80} height={80} alt={`Image-${index}`} className="ml-2" />
                        </div>
                    )) : (<div>none</div>)}


                </div>


            </div>

        </div>
    )
}

