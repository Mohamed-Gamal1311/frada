"use client"

import Image from 'next/image'
import part1 from '../../../public/Images/Homepage/OtherOffers/WhatsApp Image 2023-12-17 at 8.29.36 AM.jpeg'
import part2 from '../../../public/Images/Homepage/OtherOffers/WhatsApp Image 2023-12-17 at 8.29.37 AM.jpeg'
import './Otheroffer.css'

export default function Otheroffer() {
    return (
        <div className="Otheroffer">
            <div className='container'>
                <div className='Otheroffer-content'>
                    <div className='Otheroffer-cards'>
                        <div className='Otheroffer-part1' >
                            <h3>الاكسسوارات الرجالية</h3>
                            <div style={{ marginTop: '1%' }}><Image src={part1} alt='image' /></div>
                        </div>
                        <div className='Otheroffer-part1' >
                            <h3>الزي السعودي</h3>
                            <div>
                                <div style={{ marginTop: '1%' }}><Image src={part2} alt='image' /></div>
                                <div className='orange-block'></div>
                                <button>تسوق الآن</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}