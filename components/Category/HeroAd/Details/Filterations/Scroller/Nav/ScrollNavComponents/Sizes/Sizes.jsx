"use client"
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import "../../../Scroller.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import EachSize from './EachSize/EachSize';
import './Size.css'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { useState, } from 'react';
// import RangeSlider from 'react-bootstrap-range-slider';
// import MultiRangeSlider from './Nav/ScrollNavComponents/MultiRangeSlider/MulltiRangeSlider';
// import OffersDiscounts from './Nav/ScrollNavComponents/OffersDiscounts/OffersDiscounts';


export default function Sizes(props) {

    const numberOfTimes = 1;

    // Create an array to represent the loop
    const componentsArray = Array.from({ length: numberOfTimes }, (_, index) => index);

    return (<Card.Body>
        <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold', padding: "0 !important" }}>المقاسات</Card.Title>
        <Container>
            <Row className="justify-content-around align-items-center" md={5} style={{ display: 'flex', textAlign: 'center', fontWeight: 'bold' }}>
                {componentsArray.map((index) => (
                    <EachSize key={index} />

                ))}


            </Row>

        </Container>
    </Card.Body>)
}