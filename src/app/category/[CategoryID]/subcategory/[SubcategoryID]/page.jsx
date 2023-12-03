import Image from 'next/image'
// import styles from './page.module.css'
import Header from "../../../../../../components/Header/Header"
import CategoriesAd from '../../../../../../components/Category/HeroAd/CategoriesAd'
import Details from '../../../../../../components/Category/HeroAd/Details/Details'

export default function Subcategory() {
    return (
        <>
            {/* <Header /> */}
            <CategoriesAd subcategory={1} />
            <Details />
        </>

    )
}
