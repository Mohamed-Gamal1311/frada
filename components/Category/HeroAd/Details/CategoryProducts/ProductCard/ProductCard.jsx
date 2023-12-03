"use client"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import img from "../../../../../../public/Images/Hero.jpg"
import { useState } from 'react';
import Image from 'next/image';


export default function ProductCard(props) {


    const [isHovered, setIsHovered] = useState(false);
    const [hoveredPhoto, setHoveredPhoto] = useState('https://i.ibb.co/nBYW2dS/1.jpg');

    const handlePhotoHover = (photo) => {
        setHoveredPhoto(photo);
    };


    return (

        <Card style={{ cursor: 'pointer', width: "32%", textAlign: 'right', border: 'none', borderRadius: 'none', marginBottom: '5%' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card.Img variant="top" src={hoveredPhoto} alt={props.Name} />
            <Card.Body>
                {!isHovered &&
                    <div>
                        <Card.Title style={{ fontWeight: 'bold', fontSize: '1em' }}>{props.name}</Card.Title>
                        <Card.Text style={{ fontWeight: 'bold', fontSize: '0.95em', color: '#9A9A9A' }}>
                            {props.code}
                        </Card.Text>
                        <Card.Text style={{ fontWeight: '600', fontSize: '1em' }}>
                            ٩ الوان
                        </Card.Text>


                        <Card.Text style={{ fontWeight: '600', fontSize: '0.95em' }}>
                            <span style={{ fontWeight: 'bold' }}>
                                ر.س{props.price}
                            </span>
                            {props.discount > 0 &&
                                <span style={{ color: '#9A9A9A', marginRight: '5%', textDecoration: 'line-through' }}>
                                    ر.س{Number(props.price) - (Number(props.price) * Number(props.discount * 1 / 100))}
                                </span>
                            }
                        </Card.Text>
                    </div>
                }

                {isHovered &&
                    <div>
                        {/* <Card.Title style={{ fontWeight: 'bold', fontSize: '0.9em' }}>حذاء فرادا شرقي مميز</Card.Title> */}
                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <p className='mx-2 d-flex align-items-center' style={{ fontWeight: "bold", fontSize: '1.2em', color: '#9A9A9A' }}>+2</p>
                            <div style={{ marginLeft: "2%" }} onMouseEnter={() => handlePhotoHover("https://i.ibb.co/VTjkqx7/7.jpg")}

                            >
                                <Image src="https://i.ibb.co/VTjkqx7/7.jpg" alt={props.Name} className="ml-2" width={40} height={40} />
                            </div>
                            <div style={{ marginLeft: "2%" }} onMouseEnter={() => handlePhotoHover("https://i.ibb.co/3RjmqSZ/6.jpg")}
                            >
                                <Image src="https://i.ibb.co/3RjmqSZ/6.jpg" alt={props.Name} className="ml-2" width={40} height={40} />
                            </div>
                            <div style={{ marginLeft: "2%" }} onMouseEnter={() => handlePhotoHover("https://i.ibb.co/Yj2JMfH/5.jpg")}
                            >
                                <Image src="https://i.ibb.co/Yj2JMfH/5.jpg" alt={props.Name} className="ml-2" width={40} height={40} />
                            </div>
                            <div style={{ marginLeft: "2%" }} onMouseEnter={() => handlePhotoHover("https://i.ibb.co/BZSfkyH/4.jpg")}
                            >
                                <Image src="https://i.ibb.co/BZSfkyH/4.jpg" alt={props.Name} className="ml-2" width={40} height={40} />
                            </div>
                            <div style={{ marginLeft: "2%" }} onMouseEnter={() => handlePhotoHover("https://i.ibb.co/nBYW2dS/1.jpg")}
                            >
                                <Image src="https://i.ibb.co/nBYW2dS/1.jpg" alt={props.Name} className="ml-2" width={40} height={40} />
                            </div>


                        </div>
                        <Card.Text style={{ fontWeight: '600', fontSize: '0.95em' }}>
                            <span style={{ fontWeight: 'bold' }}>
                                ر.س{props.price}
                            </span>
                            {props.discount != 0 &&
                                <span style={{ color: '#9A9A9A', marginRight: '5%', textDecoration: 'line-through' }}>
                                    ر.س{Number(props.price) - (Number(props.price) * Number(props.discount * 1 / 100))}
                                </span>
                            }
                        </Card.Text>
                        {props.discount > 0 &&
                            <Card.Text style={{ fontWeight: '600', fontSize: '0.6em', color: '#D17A52' }}>
                                خصم {props.discount}% لفترة محدودة
                            </Card.Text>
                        }
                    </div>
                }

            </Card.Body>

        </Card>
    )

}