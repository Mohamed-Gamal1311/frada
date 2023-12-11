
import ImagesHolder from './ImagesHolder/ImagesHolder'
import ProductDetails from './ProductDetails/ProductDetails'
import Card from 'react-bootstrap/Card';
import "./SingleProductCard.css"
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

export default function SingleProductCard() {


    const [isActive, setIsActive] = useState(null); // Use null to represent no active size

    const handleClick = (index) => {
        setIsActive(isActive === index ? null : index);
    };

    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];



    return (
        <>
            <ImagesHolder />
            <Card style={{
                backgroundColor: 'transparent', textAlign: 'right', border: 'none', width: '35%',
                marginRight: '2.5%'
            }}>
                <Card.Body>
                    <Card.Title className='single-product-holder'>حذاء فرادا شرقي</Card.Title>


                    <div className='single-cors-holder'>
                        <h6 className='single-cors-code'>AF100</h6>
                        <div className='single-cors-rating'>
                            <Rating value={3} readOnly />
                            <div >
                                ١٥ تقييم
                            </div>
                        </div>
                    </div>
                    <div className='color-product-holder'>
                        <p >اختر من الالوان</p>
                        <div className='color-image-holder'>
                            <div style={{ cursor: 'pointer' }}>
                                <Image src="https://i.ibb.co/VTjkqx7/7.jpg" width={80} height={80} alt={'small-Image'} className="ml-2" />
                            </div>
                            <div style={{ cursor: 'pointer' }}>
                                <Image src="https://i.ibb.co/VTjkqx7/7.jpg" width={80} height={80} alt={'small-Image'} className="ml-2" />
                            </div>
                        </div>

                    </div>

                    <div className='size-product-holder'>
                        <div className='size-product-container'>
                            <p>اختر من المقاسات</p>
                            <div className="size-holder">
                                {sizes.map((size, index) => (
                                    <div
                                        key={index}
                                        className={`single-sizes ${isActive === index ? 'active-size' : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        <div className="single-size">{size}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className='size-product-holder'>
                        <div className='size-product-container'>
                            <p>اختر الكمية</p>
                            <div className="size-holder">

                            </div>
                        </div>

                    </div>
                </Card.Body>
            </Card>
        </>
    )
}


