import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Hero from "../../../../public/Images/Hero.jpg"
import "./HeroAd.css"
export default function HeroAd() {
    return (

        <div className='ad-img-holder'>
            <Image
                src={Hero}
                className='ad-img'
            />
        </div>

    )
}