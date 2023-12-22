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
import './DynamicAd.css'


function DynamicAd() {


    return (

        <div className="px-3 py-3 " style={{ height: '100%', width: '20%' }} >
            <div>
                <Image src={Ad} style={{ width: '100%', height: 'auto' }} />
            </div>
        </ div>

    )


}

export default DynamicAd