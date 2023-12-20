"use client"
import './Panelhome.css'
import panel from '../../../public/Images/Homepage/Panel/WhatsApp\ Image\ 2023-12-17\ at\ 8.29.37\ AM.jpeg'
import mob from '../../../public/Images/Homepage/Panel/phonex baner.jpg'
import Image from 'next/image'
export default function Panelhome() {
    return (
        <div className="Panelhome">
            <div className='image-panel'><Image src={panel} alt='image' /></div>
            <div className='image-panelmo'><Image src={mob} alt='image' /></div>
            <div className="panel-contennt">

                <div className='panel-border'></div>

            </div>
        </div>
    )
}