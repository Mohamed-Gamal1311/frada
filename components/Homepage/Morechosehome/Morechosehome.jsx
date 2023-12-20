"use client"
import Image from 'next/image'
import './Morechosehome.css'
import chose1 from '../../../public/Images/Homepage/Morechose/WhatsApp Image 2023-12-17 at 8.29.36 AM.jpeg'
import chose2 from '../../../public/Images/Homepage/Morechose/WhatsApp Image 2023-12-17 at 8.29.36 AM (1).jpeg'
import chose3 from '../../../public/Images/Homepage/Morechose/WhatsApp Image 2023-12-17 at 8.30.59 AM.jpeg'
export default function Morechosehome() {
    return (
        <div className='Morechosehome'>
            <div className='container'>
                <div className='Morechosehome-content'>
                    <h3 className='title-more'>خيارات عديدة بأناقة فريدة</h3>
                    <div className='Morechosehome-cards'>
                        <div className='Morechosehome-card'>
                            <Image src={chose1} alt='chose1' />
                            <h3>كولكشن النعال</h3>
                        </div>
                        <div className='Morechosehome-card'>
                            <Image src={chose3} alt='chose1' />
                            <h3>كولكشن الأحذية الرسمية</h3>
                        </div>
                        <div className='Morechosehome-card'>
                            <Image src={chose2} alt='chose1' />
                            <h3>كولكشن السبور</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}