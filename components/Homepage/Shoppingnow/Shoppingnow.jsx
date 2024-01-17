"use client"

import Image from 'next/image'
import shop1 from '../../../public/Images/Homepage/Shoppingnow/WhatsApp Image 2023-12-17 at 8.30.59 AM (1).jpeg'
import shop2 from '../../../public/Images/Homepage/Shoppingnow/WhatsApp Image 2023-12-17 at 8.30.59 AM (2).jpeg'
import shop3 from '../../../public/Images/Homepage/Shoppingnow/WhatsApp Image 2023-12-17 at 8.31.00 AM.jpeg'
import block1 from '../../../public/Images/Homepage/Shoppingnow/WhatsApp Image 2023-12-17 at 6.25.32 PM.jpeg'
import block2 from '../../../public/Images/Homepage/Shoppingnow/WhatsApp Image 2023-12-17 at 6.25.32 PM (1).jpeg'
import block3 from '../../../public/Images/Homepage/Shoppingnow/WhatsApp Image 2023-12-17 at 6.25.32 PM.jpeg'
import './Shoppingnow.css'
export default function Shoppingnow() {
    return (
        <div className="Shoppingnow">
            <div className="container">
                <div className="Shoppingnow-content">
                    <div className="Shoppingnow-cards">
                        <div className="shoppingnow-part1">
                            <div className='cheap1'>
                                <div><Image src={block2} alt='block' /></div>
                                <div className='image-cheap1'><Image src={shop1} alt='iamge' /></div>
                            </div>
                        </div>
                        <div className="shoppingnow-part2">
                            <div className='cheap2'>
                                <div><Image src={block1} alt='block' style={{ position: 'relative', right: '8%' }} /></div>
                                <div className='image-cheap2'><Image src={shop3} alt='iamge' /></div>

                            </div>
                            <div className='botton-part2'><button>تسوق الان</button></div>
                        </div>
                        <div className="shoppingnow-part1 shoppingnow-part33">
                            <div className='cheap1' >
                                <div><Image src={block2} alt='block' /></div>
                                <div className='image-cheap1 cheap3'><Image className='image-cheap3' style={{ width: '163%' }} src={shop1} alt='iamge' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}