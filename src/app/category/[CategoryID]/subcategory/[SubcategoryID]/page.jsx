import Image from 'next/image'
// import styles from './page.module.css'
import Header from "../../../../../../components/Header/Header"
import CategoriesAd from '../../../../../../components/Category/HeroAd/CategoriesAd'

export default function Subcategory() {
    return (
        <>
            {/* <Header /> */}
            <CategoriesAd subcategory={1} />
        </>

    )
}
