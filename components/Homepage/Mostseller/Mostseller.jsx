import React from "react";
import ReactCardSlider from "react-card-slider-component";
import './Mostseller.css'




function Mostseller() {
    const slides = [
        { image: "../../../public/Images/Homepage/image-most/Rectangle 17469.png", clickEvent: "sliderClick" },
        { image: "../../../public/Images/Homepage/image-most/Rectangle 17469.png", clickEvent: "sliderClick" },
        { image: "../../../public/Images/Homepage/image-most/Rectangle 17469.png", clickEvent: "sliderClick" },
        { image: "../../../public/Images/Homepage/image-most/Rectangle 17469.png", clickEvent: "sliderClick" },
        { image: "../../../public/Images/Homepage/image-most/Rectangle 17469.png", clickEvent: "sliderClick" },
        { image: "../../../public/Images/Homepage/image-most/Rectangle 17469.png", clickEvent: "sliderClick" },
        { image: "../../../public/Images/Homepage/image-most/Rectangle 17469.png", clickEvent: "sliderClick" },
    ]
    return (
        <div className="most-seller">
            <h3 className="title-most" >الاكثر مبيعا</h3>
            <ReactCardSlider slides={slides} />
        </div>
    );
}

export default Mostseller;

