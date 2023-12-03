import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Hero from "../../../public/Images/Hero.jpg"
import HeroAd from './AdContent/HeroAd'
import Panel from './AdContent/Panel'
export default function CategoriesAd(props) {
    return (

        <section className='h-100 position-relative' style={{ marginBottom: '10%' }}>
            < HeroAd />
            {
                props.subcategory == 1 &&
                <Panel />
            }

        </section >

    )
}