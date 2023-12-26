"use client"


import Image from 'next/image'
import './CustomerFormsHolder.css'
import CustomerFreind from "./CustomerFreind/CustomerFreind";
import InformationCustomer from "./InformationCustomer/InformationCustomer";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import Wishes from './Wishes/Wishes';
import { useState } from 'react';
import friend from '../../../public/Images/icondash/friendorange.svg'
import acount from '../../../public/Images/icondash/My_account_iconorange.svg'
import wishes from '../../../public/Images/icondash/My_Wishes_Button_iconorange.svg'
import croshier from '../../../public/Images/icondash/crosshair-orange.svg'
import pay from '../../../public/Images/icondash/payment-methodorange.svg'
import support from '../../../public/Images/icondash/supportorange.svg'
import point from '../../../public/Images/icondash/pointorange.svg'
import Paymentt from './Paymentt/Paymentt';

export default function CustomerFormsHolder() {
    const [activeContent, setActiveContent] = useState(1);

    const handleClick = (contentId) => {
        setActiveContent(contentId);
    };


    return (
        <section className='CustomerFormsHolder-all' >
            <div className='CustomerFormsHolder'>

                <div className='dashboard-menu'>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col >
                                <Nav variant="pills" className="flex-column" >
                                    <Nav.Item className='button-menu' onClick={() => handleClick(1)}
                                        style={{ color: activeContent === 1 ? '#D17A52' : '#909090', boxShadow: activeContent === 1 ? '0px 3px 6px #D17A5247' : 'none', background: activeContent === 1 ? '#ffffff' : 'initial' }}>
                                        <Nav.Link eventKey="first" onClick={() => handleClick(1)} style={{ color: activeContent === 1 ? '#D17A52 !important' : '#909090 !important' }}>الملف الشخصي</Nav.Link>
                                        <div><Image src={acount} alt='image' onClick={() => handleClick(1)} style={{ filter: activeContent === 1 ? 'grayscale(0)' : 'grayscale(1)' }} /> </div>

                                    </Nav.Item>
                                    <Nav.Item className='button-menu' onClick={() => handleClick(2)} style={{ color: activeContent === 2 ? '#D17A52' : '#909090', boxShadow: activeContent === 2 ? '0px 3px 6px #D17A5247' : 'none', background: activeContent === 2 ? '#ffffff' : 'initial' }}>
                                        <Nav.Link eventKey="second" onClick={() => handleClick(2)} style={{ color: activeContent === 2 ? '#D17A52 !important' : '#909090 !important' }} >عناوين الأصدقاء</Nav.Link>
                                        <div><Image className='title-imge' src={friend} alt='image' onClick={() => handleClick(2)} style={{ filter: activeContent === 2 ? 'grayscale(0)' : 'grayscale(1)' }} /> </div>
                                    </Nav.Item><Nav.Item className='button-menu' onClick={() => handleClick(3)} style={{ color: activeContent === 3 ? '#D17A52' : '#909090', boxShadow: activeContent === 3 ? '0px 3px 6px #D17A5247' : 'none', background: activeContent === 3 ? '#ffffff' : 'initial' }}>
                                        <Nav.Link eventKey="second" onClick={() => handleClick(2)} style={{ color: activeContent === 3 ? '#D17A52 !important' : '#909090 !important' }}>قائمة الأمنيات</Nav.Link>
                                        <div><Image src={wishes} alt='image' onClick={() => handleClick(3)} style={{ filter: activeContent === 3 ? 'grayscale(0)' : 'grayscale(1)' }} /> </div>
                                    </Nav.Item><Nav.Item className='button-menu'>
                                        <Nav.Link eventKey="second" style={{ color: '#909090' }}>تتبع الطلب الحالي</Nav.Link>
                                        <div><Image src={croshier} alt='image' /> </div>
                                    </Nav.Item><Nav.Item className='button-menu'>
                                        <Nav.Link eventKey="second" style={{ color: '#909090' }}>جميع طلباتي</Nav.Link>
                                        <div><Image src={acount} alt='image' /> </div>
                                    </Nav.Item><Nav.Item className='button-menu' onClick={() => handleClick(4)} style={{ color: activeContent === 4 ? '#D17A52' : '#909090', boxShadow: activeContent === 4 ? '0px 3px 6px #D17A5247' : 'none', background: activeContent === 4 ? '#ffffff' : 'initial' }}>
                                        <Nav.Link eventKey="second" onClick={() => handleClick(2)} style={{ color: activeContent === 2 ? '#D17A52' : '#909090' }} >وسائل الدفع</Nav.Link>
                                        <div><Image src={pay} alt='image' onClick={() => handleClick(4)} style={{ filter: activeContent === 4 ? 'grayscale(0)' : 'grayscale(1)' }} /> </div>
                                    </Nav.Item><Nav.Item className='button-menu'>
                                        <Nav.Link eventKey="second" style={{ color: '#909090' }}>الدعم الفني</Nav.Link>
                                        <div><Image src={support} alt='image' /> </div>
                                    </Nav.Item><Nav.Item className='button-menu'>
                                        <Nav.Link eventKey="second" style={{ color: '#909090' }}>مركز النقاط</Nav.Link>
                                        <div><Image src={point} alt='image' /> </div>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                        </Row>
                    </Tab.Container>
                </div>
                <div style={{ backgroundColor: 'white', width: '100%', transition: 'all 0.5s' }} >
                    {activeContent === 2 && (
                        <CustomerFreind />
                    )}
                    {activeContent === 1 && (
                        <InformationCustomer />
                    )}
                    {activeContent === 4 && (
                        <Paymentt />
                    )}
                    {activeContent === 3 && (
                        <Wishes />
                    )}



                </div>
            </div>

        </section>

    )
}