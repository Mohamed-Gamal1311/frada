"use client"


import Image from 'next/image'
import '../../CustomerDashboard/CustomerForms/CustomerFormsHolder.css'

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


import { useState } from 'react';
import friend from '../../../public/Images/icondash/friendorange.svg'
import acount from '../../../public/Images/icondash/My_account_iconorange.svg'
import wishes from '../../../public/Images/icondash/My_Wishes_Button_icon.svg'
import croshier from '../../../public/Images/icondash/crosshair.svg'
import pay from '../../../public/Images/icondash/payment-methodorange.svg'
import support from '../../../public/Images/icondash/Group 1.svg'
import point from '../../../public/Images/icondash/Group 4.svg'
import Customerfriendmo from './Customerfriendmo/Customerfriendmo.';
import Paymentmethodmo from './Paymentmethodmo/Paymentmethodmo';
import Customerinfomobile from './Customerinfomobile/Customerinfomobile';
import './Profileperson.css'
import Paymentt from '../../CustomerDashboard/CustomerForms/Paymentt/Paymentt';
export default function Profileperson() {
    const [activeContent, setActiveContent] = useState(1);

    const handleClick = (contentId) => {
        setActiveContent(contentId);
    };


    return (
        <section className='Profileperson'>
            <div className='CustomerFormsHolder'>

                <div className='dashboard-menu'>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column" >
                                    <Nav.Item className='button-menu' onClick={() => handleClick(1)}
                                        style={{ color: activeContent === 1 ? '#D17A52' : '#909090', boxShadow: activeContent === 1 ? '0px 3px 6px #D17A5247' : 'none' }}>
                                        <Nav.Link eventKey="first">الملف الشخصي</Nav.Link>
                                        <div className='icon-dash'><Image src={acount} alt='image' onClick={() => handleClick(1)} style={{ filter: activeContent === 1 ? 'grayscale(0)' : 'grayscale(1)' }} /> </div>

                                    </Nav.Item>
                                    <Nav.Item className='button-menu' onClick={() => handleClick(2)} style={{ color: activeContent === 2 ? '#D17A52' : '#909090', boxShadow: activeContent === 2 ? '0px 3px 6px #D17A5247' : 'none' }}>
                                        <Nav.Link eventKey="second">عناوين الأصدقاء</Nav.Link>
                                        <div className='icon-dash'><Image src={friend} alt='image' onClick={() => handleClick(2)} style={{ filter: activeContent === 2 ? 'grayscale(0)' : 'grayscale(1)' }} /> </div>
                                    </Nav.Item>


                                    <Nav.Item className='button-menu' onClick={() => handleClick(4)} style={{ color: activeContent === 4 ? '#D17A52' : '#909090', boxShadow: activeContent === 4 ? '0px 3px 6px #D17A5247' : 'none' }}>
                                        <Nav.Link eventKey="second" >وسائل الدفع</Nav.Link>
                                        <div className='icon-dash'><Image src={pay} alt='image' onClick={() => handleClick(4)} style={{ filter: activeContent === 4 ? 'grayscale(0)' : 'grayscale(1)' }} /> </div>
                                    </Nav.Item>

                                    <Nav.Item className='button-menu' style={{ color: '#909090' }}>
                                        <Nav.Link eventKey="second">مركز النقاط</Nav.Link>
                                        <div className='icon-dash'><Image src={point} alt='image' /> </div>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                        </Row>
                    </Tab.Container>
                </div>

                <div style={{ backgroundColor: 'white', width: '100%' }}>

                    {activeContent === 2 && (
                        <Customerfriendmo />
                    )}
                    {activeContent === 4 && (
                        <Paymentt />
                    )}
                    {activeContent === 1 && (
                        <Customerinfomobile />
                    )}
                    {activeContent === 3 && (

                        <div></div>
                    )}
                </div>
            </div>

        </section>

    )
}