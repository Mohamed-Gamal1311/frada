"use client"
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import "../../../../Scroller.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';




export default function EachColor(props) {
    const [isClickedCircle, setIsClickedCircle] = useState(false);

    const handleCircleClick = () => {
        setIsClickedCircle(!isClickedCircle);
    };

    const circleStyle = {
        cursor: 'pointer',
        border: isClickedCircle ? '1px solid #D17A52' : 'initial', // Change 'blue' to the desired background color
        // Change '#fff' to the desired text color
    };


    return (
        <Col style={circleStyle} onClick={handleCircleClick} className='circle-colors'></Col>
    )
}