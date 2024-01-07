"use client"
import Card from 'react-bootstrap/Card';
import "../Scroller.css"

// import RangeSlider from 'react-bootstrap-range-slider';
import OffersDiscounts from '../Nav/ScrollNavComponents/OffersDiscounts/OffersDiscounts';
import ChooseDiscounts from '../Nav/ScrollNavComponents/ChooseDiscounts/ChooseDiscount';
import Trademarks from '../Nav/ScrollNavComponents/Trademarks/Trademarks';
import Sizes from '../Nav/ScrollNavComponents/Sizes/Sizes';
import CircleColors from '../Nav/ScrollNavComponents/CircleColors/CircleColors';
import Slider from '../Nav/ScrollNavComponents/Slider/Slider';
import EachColor from './ScrollNavComponents/CircleColors/EachColor/EachColor';


export default function ScrollNav(props) {



    return (
        <div className='filter'>
            <Card style={{ width: '18rem', height: '80vh', overflowY: 'scroll', textAlign: 'right', border: 'none', marginTop: '12.5%' }}>
                {/* <OffersDiscounts /> */}
                {/* <ChooseDiscounts /> */}
                {/* <Trademarks /> */}
                <Sizes />
                {/* <CircleColors /> */}
                <Slider />
                {/* <EachColor /> */}
            </Card>


        </div >


    )
}