"use client"
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
                                </Nav.Item>
                                <Nav.Item className='button-menu' onClick={() => handleClick(2)} style={{ color: activeContent === 2 ? '#D17A52' : 'initial', border: activeContent === 2 ? '2px solid #D17A52' : 'none' }}>
                                    <Nav.Link eventKey="second">عناوين الأصدقاء</Nav.Link>
                                </Nav.Item><Nav.Item className='button-menu' onClick={() => handleClick(3)} style={{ color: activeContent === 3 ? '#D17A52' : 'initial', border: activeContent === 3 ? '2px solid #D17A52' : 'none' }}>
                                    <Nav.Link eventKey="second" >قائمة الأمنيات</Nav.Link>
                                </Nav.Item><Nav.Item className='button-menu'>
                                    <Nav.Link eventKey="second">تتبع الطلب الحالي</Nav.Link>
                                </Nav.Item><Nav.Item className='button-menu'>
                                    <Nav.Link eventKey="second">جميع طلباتي</Nav.Link>
                                </Nav.Item><Nav.Item className='button-menu' onClick={() => handleClick(4)} style={{ color: activeContent === 4 ? '#D17A52' : 'initial', border: activeContent === 4 ? '2px solid #D17A52' : 'none' }}>
                                    <Nav.Link eventKey="second" >وسائل الدفع</Nav.Link>
                                </Nav.Item><Nav.Item className='button-menu'>
                                    <Nav.Link eventKey="second">الدعم الفني</Nav.Link>
                                </Nav.Item><Nav.Item className='button-menu'>
                                    <Nav.Link eventKey="second">مركز النقاط</Nav.Link>
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