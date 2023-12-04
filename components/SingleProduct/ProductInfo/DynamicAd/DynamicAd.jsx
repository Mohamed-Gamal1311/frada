import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
// import "./ProductInfo.css"
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Ad from "../../../../public/Images/DynamicAd.jpg"
// import Image from 'react-bootstrap';
import Image from 'next/image';


function DynamicAd() {


    return (

        <div style={{ height: '100%' }} >
            <div style={{ width: '100%', height: '80%' }}>
                <Image src={Ad} style={{ width: 'auto', height: 'auto' }} />
            </div>
        </ div>
    )


}

export default DynamicAd