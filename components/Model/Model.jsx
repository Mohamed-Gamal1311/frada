"use client"

import Image from 'next/image'
import './Model.css'
import im1 from '../../public/Images/Model/1 (1).png'
import im2 from '../../public/Images/Model/1 (2).png'
import im3 from '../../public/Images/Model/1 (3).png'
import im4 from '../../public/Images/Model/1 (4).png'
import im5 from '../../public/Images/Model/1 (5).png'
import im6 from '../../public/Images/Model/1 (6).png'
import im7 from '../../public/Images/Model/1 (7).png'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from '../../public/Images/Model/toppolicies.png'
export default function Model() {

    return (
        <div className='model'>
            <div className='model-desk'>
                <div className='model-content'>
                    <div className='model-cart'>

                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>شرقي</h3></div>
                        </div>

                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>

                    </div>
                    <div className='model-cart'>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>مطرز</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                    <div className='model-cart'>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>وطني</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                    <div className='model-cart'>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>كاجوال</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                    <div className='model-cart'>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>ترفيهي</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                    <div className='model-cart'>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>ولادي</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                    <div className='model-cart' style={{ marginRight: '0' }}>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>صنادل</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                </div>
            </div>
            {/* <Carousel showThumbs={false} showStatus={false}>
                <div>
                    <div className='model- cart' style={{ marginRight: '0' }}>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>صنادل</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                    <div className='model-cart' style={{ marginRight: '0' }}>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>صنادل</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                    <div className='model-cart' style={{ marginRight: '0' }}>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>صنادل</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                    <div className='model-cart' style={{ marginRight: '0' }}>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>صنادل</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                </div>
                <div>
                    <div className='model-cart' style={{ marginRight: '0' }}>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>صنادل</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                    <div className='model-cart' style={{ marginRight: '0' }}>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>صنادل</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                    <div className='model-cart' style={{ marginRight: '0' }}>
                        <div className='parent-model'>
                            <div className='cartmodel-title'><h3>صنادل</h3></div>
                        </div>
                        <div className='image-model'> <Image src={im1} alt='image' /></div>
                        <div className='model-logo'><Image src={logo} alt='logo' /></div>
                    </div>
                </div>
            </Carousel> */}


        </div>

    )
}