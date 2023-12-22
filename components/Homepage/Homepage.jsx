"use client"

import Footer from '../Footer/Footer'
import FooterMobile from '../FooterMobile/FooterMobile'
import Recentelyarrived from '../Recentelyarrived/Recentelyarrived'
import './Homepage.css'
import Morechosehome from './Morechosehome/Morechosehome'
import Mostseller from './Mostseller/Mostseller'
import Otheroffer from './Otheroffer/Otheroffer'
import Panelhome from './Panelhome/Panelhome'
import Seprate from './Seprate/Seprate'
import Shopingnowmobile from './Shopingnowmobile/Shopingnowmobile'
import Shoppingnow from './Shoppingnow/Shoppingnow'
import Weekoffers from './Weekoffers/Weekoffers'



export default function Homepage() {

    return (
        <div>

            <Panelhome />
            <Morechosehome />
            <Weekoffers />
            <Recentelyarrived />
            <Otheroffer />
            <Mostseller />
            <Seprate />
            <Shoppingnow />
            <Shopingnowmobile />

        </div>
    )
}