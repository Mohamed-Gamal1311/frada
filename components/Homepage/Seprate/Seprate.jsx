"use client"
import './Seprate.css'


import Image from 'next/image'
import im1 from '../../../public/Images/Homepage/Panel/regalin.jpg'
export default function Seprate() {
    return (
        <div className='Seprate'>
            <div className='container'>
                <div className='seprate-block'>
                    <div className='seprate-border'>

                    </div>
                </div>
                <div className='mobile-seprate'>
                    <Image src={im1} alt='panel' />
                </div>
            </div>
        </div>
    )
}