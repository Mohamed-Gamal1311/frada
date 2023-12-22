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
import acount from '../../../public/Images/icondash/acount.svg'
import wishes from '../../../public/Images/icondash/My_Wishes_Button_icon.svg'
import croshier from '../../../public/Images/icondash/crosshair.svg'
import pay from '../../../public/Images/icondash/Group 15.svg'
import support from '../../../public/Images/icondash/Group 1.svg'
import point from '../../../public/Images/icondash/Group 4.svg'

export default function CustomerFormsHolder() {
    const [activeContent, setActiveContent] = useState(null);

    const handleClick = (contentId) => {
        setActiveContent(contentId);
    };


    return (
        <div className='CustomerFormsHolder'>

            <div className='dashboard-menu'>
                <h6 style={{ color: '#D17A52', padding: '2em', fontSize: '1em' }}>لوحة التحكم الإدارية</h6>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column" >
                                <Nav.Item className='button-menu' onClick={() => handleClick(1)}
                                    style={{ color: activeContent === 1 ? '#D17A52' : 'initial', border: activeContent === 1 ? '2px solid #D17A52' : 'none' }}>
                                    <Nav.Link eventKey="first">الملف الشخصي</Nav.Link>
                                    <div><Image src={acount} alt='image' /> </div>

                                </Nav.Item>
                                <Nav.Item className='button-menu' onClick={() => handleClick(2)} style={{ color: activeContent === 2 ? '#D17A52' : 'initial', border: activeContent === 2 ? '2px solid #D17A52' : 'none' }}>
                                    <Nav.Link eventKey="second">عناوين الأصدقاء</Nav.Link>
                                    <div><Image src={acount} alt='image' /> </div>
                                </Nav.Item><Nav.Item className='button-menu' onClick={() => handleClick(3)} style={{ color: activeContent === 3 ? '#D17A52' : 'initial', border: activeContent === 3 ? '2px solid #D17A52' : 'none' }}>
                                    <Nav.Link eventKey="second" >قائمة الأمنيات</Nav.Link>
                                    <div><Image src={wishes} alt='image' /> </div>
                                </Nav.Item><Nav.Item className='button-menu'>
                                    <Nav.Link eventKey="second">تتبع الطلب الحالي</Nav.Link>
                                    <div><Image src={croshier} alt='image' /> </div>
                                </Nav.Item><Nav.Item className='button-menu'>
                                    <Nav.Link eventKey="second">جميع طلباتي</Nav.Link>
                                    <div><Image src={acount} alt='image' /> </div>
                                </Nav.Item><Nav.Item className='button-menu' onClick={() => handleClick(4)} style={{ color: activeContent === 4 ? '#D17A52' : 'initial', border: activeContent === 4 ? '2px solid #D17A52' : 'none' }}>
                                    <Nav.Link eventKey="second" >وسائل الدفع</Nav.Link>
                                    <div><Image src={pay} alt='image' /> </div>
                                </Nav.Item><Nav.Item className='button-menu'>
                                    <Nav.Link eventKey="second">الدعم الفني</Nav.Link>
                                    <div><Image src={support} alt='image' /> </div>
                                </Nav.Item><Nav.Item className='button-menu'>
                                    <Nav.Link eventKey="second">مركز النقاط</Nav.Link>
                                    <div><Image src={point} alt='image' /> </div>
                                </Nav.Item>
                            </Nav>
                        </Col>

                    </Row>
                </Tab.Container>
            </div>
            <div style={{ backgroundColor: 'white', width: '100%' }}>
                {activeContent === 2 && (
                    <CustomerFreind />
                )}
                {activeContent === 1 && (
                    <InformationCustomer />
                )}
                {activeContent === 4 && (
                    <PaymentMethod />
                )}
                {activeContent === 3 && (
                    <Wishes />
                )}
            </div>
        </div>



    )
}