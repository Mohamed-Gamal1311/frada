"use client"

import Image from 'next/image'
import ReactCardSlider from "react-card-slider-component";
import './Shopingnowmobile.css'

import card from '../../../public/Images/Homepage/image-most/Rectangle 17469.png'

function Shopingnowmobile() {
    const slides = [
        { image: "/Images/Homepage/Shoppingnow/s1.png", title: "          تسوق الان     " },
        { image: "/Images/Homepage/Shoppingnow/s2.png", title: "          تسوق الان     " },
        { image: "/Images/Homepage/Shoppingnow/s3.png", title: "          تسوق الان     " }
    ];



    return (
        <div className="shopingnow-mo">
            <h3 style={{ marginRight: '5%', marginBottom: '3%' }}>الأكثر مبيعًا</h3>
            <ReactCardSlider slides={slides} />
        </div>
    );
}

export default Shopingnowmobile;