"use client"
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import "../../../../Scroller.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';




export default function EachSize(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleColClick = () => {
        setIsClicked(!isClicked);
    };

    const colStyle = {
        padding: '3%',
        fontSize: '1.2em',
        cursor: 'pointer',
        backgroundColor: isClicked ? '#332c32' : 'initial', // Change 'blue' to the desired background color
        color: isClicked ? '#D17A52' : 'initial', // Change '#fff' to the desired text color
    };

    return (
        <Col onClick={handleColClick} style={colStyle} className='sizes'>40</Col>
    )
}