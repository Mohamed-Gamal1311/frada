"use client"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Rating from '@mui/material/Rating';
import "./ProductCors.css"
export default function ProductCors() {


    return (
        <div className='single-cors-holder'>
            <p className='single-cors-code'>AF100</p>
            <div className='single-cors-rating'>
                <Rating value={3} readOnly />
                <div>
                    15تقييم
                </div>
            </div>
        </div>
    )



}