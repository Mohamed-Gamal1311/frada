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
import './Nav.css'

export default function ScrollNav(props) {



    return (
        <div className='filter'>
            <Card className='filter-component' style={{ height: '80vh', overflowY: 'scroll', textAlign: 'right', border: 'none' }}>
                {/* <OffersDiscounts /> */}
                <ChooseDiscounts />
                <Trademarks />
                <Sizes />
                {/* <CircleColors /> */}
                <Slider />
                {/* <EachColor /> */}
            </Card>


        </div >


    )
}