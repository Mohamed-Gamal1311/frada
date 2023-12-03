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


export default function ChooseDiscounts(props) {

    return (
        <Card.Body className='border-bottom-1' style={{ height: 'min-content !important', textAlign: 'right' }}>
            <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold' }}> اختر من الخصومات</Card.Title>
            <Form.Select aria-label="Default select example" style={{ textAlign: 'right', borderColor: '#332c32', borderRadius: '20px', fontWeight: 'bold' }}>
                <option>10%</option>
                <option value="1">بدون خصومات</option>
                <option value="2">20%</option>
                <option value="3">30%</option>
            </Form.Select>

        </Card.Body>
    )
}