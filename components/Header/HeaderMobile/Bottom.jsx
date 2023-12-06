import Image from 'next/image'
import styles from '../../src/app/page.module.css'
import Up from './EachHeader/Up'
import Middle from './EachHeader/Middle'
import Bottom from './EachHeader/Bottom'
import "./Header.css"


export default function Header() {



    return (
        <>
            <Up />
            <Middle />
            <Bottom />
        </>
    )
}