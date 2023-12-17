"use client"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import img from "../../../../../../public/Images/Hero.jpg"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProductCard({ id, name, colorid, code, price, discount, mainphoto, colornum, photocolors }) {


    const [isHovered, setIsHovered] = useState(false);
    const [hoveredPhoto, setHoveredPhoto] = useState(`https://www.fradaksa.com/Attachment/${id}/${colorid}/${mainphoto}`);
    console.log(photocolors)
    const handlePhotoHoverSmall = (photo) => {
        console.log(photo)
        setHoveredPhoto(photo);
    };

    const route = usePathname();


    return (

        // <Link href="#">
        <Card style={{ cursor: 'pointer', width: "32%", textAlign: 'right', border: 'none', borderRadius: 'none', marginBottom: '5%', backgroundColor: 'transparent' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={route + "/product/" + id} style={{ textDecoration: 'none', color: 'unset' }}>
                <Card.Img variant="top" src={hoveredPhoto} alt={name} />
                <Card.Body>
                    {!isHovered &&
                        <div>
                            <Card.Title style={{ fontWeight: 'bold', fontSize: '1em' }}>{name}</Card.Title>
                            <Card.Text style={{ fontWeight: 'bold', fontSize: '0.95em', color: '#9A9A9A' }}>
                                {code}
                            </Card.Text>
                            <Card.Text style={{ fontWeight: '600', fontSize: '1em' }}>
                                {colornum} الوان
                            </Card.Text>


                            <Card.Text style={{ fontWeight: '600', fontSize: '0.95em' }}>
                                <span style={{ fontWeight: 'bold' }}>
                                    ر.س{price}
                                </span>
                                {discount > 0 &&
                                    <span style={{ color: '#9A9A9A', marginRight: '5%', textDecoration: 'line-through' }}>
                                        ر.س{Number(price) - (Number(price) * Number(discount * 1 / 100))}
                                    </span>
                                }
                            </Card.Text>
                        </div>
                    }

                    {isHovered &&
                        <div>
                            {/* <Card.Title style={{ fontWeight: 'bold', fontSize: '0.9em' }}>حذاء فرادا شرقي مميز</Card.Title> */}
                            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                                <p className='mx-2 d-flex align-items-center' style={{ fontWeight: "bold", fontSize: '1.2em', color: '#9A9A9A' }}>{colornum - 4 > 0 ? colornum - 4 : <span></span>}+</p>

                                {photocolors.length > 0 && photocolors.slice(0, 4).map((color, index) => (
                                    <div key={index} style={{ marginLeft: "2%" }} onMouseEnter={() => handlePhotoHoverSmall(`https://fradaksa.com/Attachment/${id}/${color.ColorID}/${color.Image}`)}>
                                        <Image src={`https://fradaksa.com/Attachment/${id}/${color.ColorID}/${color.Image}`} alt={`Image ${index}`} className="ml-2" width={40} height={40} />
                                    </div>
                                ))}


                            </div>
                            <Card.Text style={{ fontWeight: '600', fontSize: '0.95em' }}>
                                <span style={{ fontWeight: 'bold' }}>
                                    ر.س{price}
                                </span>
                                {discount != 0 &&
                                    <span style={{ color: '#9A9A9A', marginRight: '5%', textDecoration: 'line-through' }}>
                                        ر.س{Number(price) - (Number(price) * Number(discount * 1 / 100))}
                                    </span>
                                }
                            </Card.Text>
                            {discount > 0 &&
                                <Card.Text style={{ fontWeight: '600', fontSize: '0.6em', color: '#D17A52' }}>
                                    خصم {discount}% لفترة محدودة
                                </Card.Text>
                            }
                        </div>
                    }

                </Card.Body>
            </Link>
        </Card>
        // </Link>
    )

}