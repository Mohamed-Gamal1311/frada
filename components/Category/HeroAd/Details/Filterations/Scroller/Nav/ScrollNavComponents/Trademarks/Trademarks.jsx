"use client"
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import "../../../Scroller.css"
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { useState, } from 'react';
// import RangeSlider from 'react-bootstrap-range-slider';
// import MultiRangeSlider from './Nav/ScrollNavComponents/MultiRangeSlider/MulltiRangeSlider';
// import OffersDiscounts from './Nav/ScrollNavComponents/OffersDiscounts/OffersDiscounts';


export default function Trademarks(props) {

    return (
        <Card.Body>
            <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold' }}> العلامات التجارية</Card.Title>
            <Card.Text style={{ fontWeight: "bold", fontSize: '1.3em' }}>فرادا</Card.Text>
            <Card.Text style={{ fontWeight: "bold", fontSize: '1.3em' }}>فلورا</Card.Text>
        </Card.Body>
    )
}