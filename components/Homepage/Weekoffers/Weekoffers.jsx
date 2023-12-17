"use client"

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