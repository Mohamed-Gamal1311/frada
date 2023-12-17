"use client"

import './Homepage.css'
import Morechosehome from './Morechosehome/Morechosehome'
import Otheroffer from './Otheroffer/Otheroffer'
import Panelhome from './Panelhome/Panelhome'
import Weekoffers from './Weekoffers/Weekoffers'



export default function Homepage() {

    return (
        <div>

            <Panelhome />
            <Morechosehome />
            <Weekoffers />
            <Otheroffer />

        </div>
    )
}