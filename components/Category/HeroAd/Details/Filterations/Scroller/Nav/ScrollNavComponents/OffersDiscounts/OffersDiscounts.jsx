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


export default function OffersDiscounts(props) {

    return (<Card.Body className='border-bottom-1' style={{ height: 'min-content !important' }}>
        <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold' }}>العروض والخصومات</Card.Title>
        <Form style={{ backgroundColor: 'none', border: 'none', boxShadow: 'none', fontSize: '1.1em', fontWeight: 'bold' }} >
            {
                ['checkbox'].map((type) => (
                    <div key={`reverse-${type}`} className="mb-0">
                        <Form.Check
                            reverse
                            label="عروض اليوم"
                            name="today-offers"
                            type={type}
                            id={`reverse-${type}-1`}
                        />

                        <Form.Check
                            reverse
                            label=" الجمعة البيضاء"
                            name="today-offers"
                            type={type}
                            id={`reverse-${type}-1`}
                        />

                        <Form.Check
                            reverse
                            label="عروض ديسمبر من فرادا"
                            name="today-offers"
                            type={type}
                            id={`reverse-${type}-1`}
                        />

                    </div>
                ))
            }
        </Form>

    </Card.Body>)
}