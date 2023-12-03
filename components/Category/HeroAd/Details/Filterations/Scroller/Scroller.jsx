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
import MultiRangeSlider from './Nav/ScrollNavComponents/MulltiRangeSlider';

export default function Scroller(props) {

    const [isClicked, setIsClicked] = useState(false);
    const [isClickedCircle, setIsClickedCircle] = useState(false);

    const handleColClick = () => {
        setIsClicked(!isClicked);
    };
    const handleCircleClick = () => {
        setIsClickedCircle(!isClickedCircle);
    };

    const colStyle = {
        padding: '3%',
        fontSize: '1.2em',
        cursor: 'pointer',
        backgroundColor: isClickedCircle ? '#332c32' : 'initial', // Change 'blue' to the desired background color
        color: isClickedCircle ? '#D17A52' : 'initial', // Change '#fff' to the desired text color
    };

    const circleStyle = {
        cursor: 'pointer',
        border: isClickedCircle ? '1px solid #D17A52' : 'initial', // Change 'blue' to the desired background color
        // Change '#fff' to the desired text color
    };



    return (
        <div className='filter'>
            <Card style={{ width: '18rem', height: '100vh', overflowY: 'scroll', textAlign: 'right', border: 'none', marginTop: '30%' }}>
                <Card.Body className='border-bottom-1' style={{ height: 'min-content !important' }}>
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

                </Card.Body>
                <Card.Body className='border-bottom-1' style={{ height: 'min-content !important', textAlign: 'right' }}>
                    <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold' }}>العروض والخصومات</Card.Title>
                    <Form.Select aria-label="Default select example" style={{ textAlign: 'right', borderColor: '#332c32', borderRadius: '20px', fontWeight: 'bold' }}>
                        <option>10%</option>
                        <option value="1">بدون خصومات</option>
                        <option value="2">20%</option>
                        <option value="3">30%</option>
                    </Form.Select>

                </Card.Body>

                <Card.Body>
                    <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold' }}> العلامات التجارية</Card.Title>
                    <Card.Text style={{ fontWeight: "bold", fontSize: '1.3em' }}>فرادا</Card.Text>
                    <Card.Text style={{ fontWeight: "bold", fontSize: '1.3em' }}>فلورا</Card.Text>
                </Card.Body>

                <Card.Body>
                    <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold', padding: "0 !important" }}>المقاسات</Card.Title>
                    <Container>
                        <Row className="justify-content-around align-items-center" md={5} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            <Col onClick={handleColClick} style={colStyle} className='sizes'>40</Col>
                            <Col onClick={handleColClick} style={colStyle} className='sizes'>40</Col>
                            <Col onClick={handleColClick} style={colStyle} className='sizes'>40</Col>
                            <Col onClick={handleColClick} style={colStyle} className='sizes'>40</Col>
                            <Col onClick={handleColClick} style={colStyle} className='sizes'>40</Col>
                            <Col onClick={handleColClick} style={colStyle} className='sizes'>40</Col>
                            <Col onClick={handleColClick} style={colStyle} className='sizes'>40</Col>
                            <Col onClick={handleColClick} style={colStyle} className='sizes'>40</Col>


                        </Row>

                    </Container>
                </Card.Body>
                <Card.Body>
                    <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold', borderBottom: "0 !important" }}>الألوان</Card.Title>
                    <Container>
                        <Row className="justify-content-end" md={1} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            <Col style={circleStyle} onClick={handleCircleClick} className='circle-colors'></Col>
                            <Col style={circleStyle} onClick={handleCircleClick} className='circle-colors'></Col>
                            <Col style={circleStyle} onClick={handleCircleClick} className='circle-colors'></Col>
                            <Col style={circleStyle} onClick={handleCircleClick} className='circle-colors'></Col>
                            <Col style={circleStyle} onClick={handleCircleClick} className='circle-colors'></Col>
                            <Col style={circleStyle} onClick={handleCircleClick} className='circle-colors'></Col>
                            <Col style={circleStyle} onClick={handleCircleClick} className='circle-colors'></Col>
                            <Col style={circleStyle} onClick={handleCircleClick} className='circle-colors'></Col>
                            <Col style={circleStyle} onClick={handleCircleClick} className='circle-colors'></Col>
                            <Col style={circleStyle} onClick={handleCircleClick} className='circle-colors'></Col>

                        </Row>
                    </Container>
                </Card.Body>

                <Card.Body>
                    <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold', border: 'none' }}>المقاسات</Card.Title>
                    <div className='price-slide'>
                        <MultiRangeSlider
                            min={0}
                            max={1000}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        />
                    </div>
                </Card.Body>
            </Card>


        </div >


    )
}