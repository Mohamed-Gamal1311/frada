import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Hero from "../../../../public/Images/Panels/Hero332.jpg"
import hero2 from '../../../../public/Images/Panels/hero-test.jpg'
import "./HeroAd.css"
export default function HeroAd() {
    return (

        <div className='ad-img-holder'>
            <Image
                src={Hero}
                className='ad-img'
                alt="Hero Panel"

            />
        </div>

    )
}