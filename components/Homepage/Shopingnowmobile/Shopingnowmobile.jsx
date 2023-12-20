import React from "react";
import ReactCardSlider from "react-card-slider-component";
import './Shopingnowmobile.css'

import card from '../../../public/Images/Homepage/image-most/Rectangle 17469.png'


function Shopingnowmobile() {
    const slides = [
        { image: "/Images/Homepage/Shoppingnow/s1.png" },
        { image: "/Images/Homepage/Shoppingnow/s2.png" },
        { image: "/Images/Homepage/Shoppingnow/s3.png" }

    ]
    return (
        <div className="shopingnow-mo" >
            <h3 style={{ marginRight: '5%', marginBottom: '3%' }}>الاكثر مبيعا</h3>
            <ReactCardSlider slides={slides} />
        </div>
    );
}

export default Shopingnowmobile;