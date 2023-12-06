import Image from 'next/image'
// import styles from './page.module.css'
import Header from '../../../../components/Header/Header'
import HeroAd from '../../../../components/Category/HeroAd/AdContent/HeroAd'
import Panel from '../../../../components/Category/HeroAd/AdContent/Panel'
import CategoriesAd from '../../../../components/Category/HeroAd/CategoriesAd'

import Details from '../../../../components/Category/HeroAd/Details/Details'

export default function Category() {
    return (
        <>
            <CategoriesAd subcategory={0} />

            <Details />

        </>
    )
}
