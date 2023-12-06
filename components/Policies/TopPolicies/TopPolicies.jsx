"use client"

import Image from 'next/image'
import './TopPolicies.css'
import image from '../../../public/Images/Policies/toppolicies.png'
export default function TopPolicies() {

    return (
        <div className="top-policies">
            <div className='topcont-policies'>
                <h1 className='arabic'>من نحن</h1>
                <h1>About Us</h1>
                <div className='icon'> <Image src={image} /></div>
            </div>
        </div>
    )


}