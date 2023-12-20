"use client"
import im1 from '../../../public//Images/Homepage/Weekoffers/this-week-1.jpg'
import im2 from '../../../public//Images/Homepage/Weekoffers/this-week-2.jpg'
import im3 from '../../../public//Images/Homepage/Weekoffers/this-week-3.jpg'

import Image from 'next/image'
import './Weekoffers.css'
import block from '../../../public/Images/Homepage/Weekoffers/Group 67870.svg'
export default function Weekoffers() {
    return (
        <div className="Weekoffers">
            <div className='container'>
                <div className='Weekoffers-content'>
                    <h3>عروض الأسبوع من فرادا</h3>
                    <div className='Weekoffers-parts' >
                        <Image src={block} alt='block' />
                        <button>تسوق الآن</button>
                    </div>
                </div>
                <div className='Weekoffers-mobile'>
                    <div className='cheapup'></div>
                    <div className='Weekoffers-mobilecon'>
                        <div className='card-weekoffer' >
                            <div style={{ height: '100%' }}><Image src={im3} alt='image' /></div>
                        </div>
                        <div className='card-weekoffer' >
                            <div style={{ height: '100%' }}><Image src={im2} alt='image' /></div>
                        </div>
                        <div className='card-weekoffer' style={{ width: '100%', position: 'relative' }}>
                            <div style={{ height: '100%' }}><Image src={im1} alt='image' /></div>
                            <button>تسوق الآن</button>
                        </div>
                        <div className='cheapup'></div>
                    </div>

                </div>
                <div className='Weekoffers-text'>
                    <h2>الحذاء المثـــــالي هو الهدية المثالية</h2>
                    <h3>الأفضل جودة, الأكثر أناقة و الأكثر راحة بالتأكيد هو الهدية المثالية</h3>
                    <div className='Weekoffers-button'>
                        <button style={{ marginLeft: '1%', padding: '0.5% 3%' }}>تسوق الأحذية الكلاسيكية</button>
                        <button style={{ marginRight1: '1%' }}> تسوق الأحذية الرياضية </button>
                    </div>
                </div>
            </div>

        </div>
    )
}