"use client"


import Image from 'next/image'
import '../../CustomerDashboard/CustomerForms/CustomerFormsHolder.css'

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


import { useState } from 'react';
import friend from '../../../public/Images/icondash/Group 67890.svg'
import acount from '../../../public/Images/icondash/acount.svg'
import wishes from '../../../public/Images/icondash/My_Wishes_Button_icon.svg'
import croshier from '../../../public/Images/icondash/crosshair.svg'
import pay from '../../../public/Images/icondash/Group 15.svg'
import support from '../../../public/Images/icondash/Group 1.svg'
import point from '../../../public/Images/icondash/Group 4.svg'
import Customerfriendmo from './Customerfriendmo/Customerfriendmo.';
import Paymentmethodmo from './Paymentmethodmo/Paymentmethodmo';
import Customerinfomobile from './Customerinfomobile/Customerinfomobile';
import './Profileperson.css'
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
                                        style={{ color: activeContent === 1 ? '#D17A52' : 'initial', boxShadow: activeContent === 1 ? '0px 3px 6px #D17A5247' : 'none' }}>
                                        <Nav.Link eventKey="first">الملف الشخصي</Nav.Link>
                                        <div className='icon-dash'><Image src={acount} alt='image' /> </div>

                                    </Nav.Item>
                                    <Nav.Item className='button-menu' onClick={() => handleClick(2)} style={{ color: activeContent === 2 ? '#D17A52' : 'initial', boxShadow: activeContent === 2 ? '0px 3px 6px #D17A5247' : 'none' }}>
                                        <Nav.Link eventKey="second">عناوين الأصدقاء</Nav.Link>
                                        <div className='icon-dash'><Image src={friend} alt='image' /> </div>
                                    </Nav.Item>


                                    <Nav.Item className='button-menu' onClick={() => handleClick(4)} style={{ color: activeContent === 4 ? '#D17A52' : 'initial', boxShadow: activeContent === 4 ? '0px 3px 6px #D17A5247' : 'none' }}>
                                        <Nav.Link eventKey="second" >وسائل الدفع</Nav.Link>
                                        <div className='icon-dash'><Image src={pay} alt='image' /> </div>
                                    </Nav.Item>

                                    <Nav.Item className='button-menu'>
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
                        <Paymentmethodmo />
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