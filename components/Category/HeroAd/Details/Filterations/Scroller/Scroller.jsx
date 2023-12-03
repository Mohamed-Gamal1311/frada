"use client"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import "./Scroller.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, } from 'react';
// import RangeSlider from 'react-bootstrap-range-slider';
import MultiRangeSlider from './Nav/ScrollNavComponents/Slider/MultiRangeSlider/MulltiRangeSlider';
import OffersDiscounts from './Nav/ScrollNavComponents/OffersDiscounts/OffersDiscounts';
import ChooseDiscounts from './Nav/ScrollNavComponents/ChooseDiscounts/ChooseDiscount';
import Trademarks from './Nav/ScrollNavComponents/Trademarks/Trademarks';
import Sizes from './Nav/ScrollNavComponents/Sizes/Sizes';
import CircleColors from './Nav/ScrollNavComponents/CircleColors/CircleColors';
import Slider from './Nav/ScrollNavComponents/Slider/Slider';


export default function Scroller(props) {

    const [isClicked, setIsClicked] = useState(false);
    const [isClickedCircle, setIsClickedCircle] = useState(false);








    return (
        <div className='filter'>
            <Card style={{ width: '18rem', height: '80vh', overflowY: 'scroll', textAlign: 'right', border: 'none', marginTop: '12.5%' }}>
                <OffersDiscounts />
                <ChooseDiscounts />
                <Trademarks />
                <Sizes />
                <CircleColors />
                <Slider />
            </Card>


        </div >


    )
}