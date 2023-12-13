"use client"
import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
// import "./ProductInfo.css"
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import DynamicAd from './DynamicAd/DynamicAd';
import ProductInfo from './ProductInfo/ProductInfo';
// import Card from 'react-bootstrap/Card';

// import Image from 'react-bootstrap';




function Info(props) {


    return (
        <section className='d-flex flex-row justify-content-around' style={{ backgroundColor: '#f2f2f2' }} >
            <DynamicAd />
            <ProductInfo desc={props.desc} info={props.info} />
        </section >
    )


}

export default Info