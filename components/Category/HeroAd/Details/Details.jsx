"use client"
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
// import Hero from "../../../public/Images/Hero.jpg"
// import HeroAd from './AdContent/HeroAd'
// import Panel from './AdContent/Panel'
import CategoryProducts from './CategoryProducts/CategoryProducts'
import Filter from './Filterations/Filter'

export default function Details(props) {
    return (
        <section className='d-flex flex-row'>
            <CategoryProducts />
            <div className='position-sticky' style={{ height: '100vh', top: 0 }}>
                <Filter />
            </div>
        </section>


    )
}