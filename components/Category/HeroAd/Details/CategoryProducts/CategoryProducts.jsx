"use client"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import img from "../../../../../public/Images/Hero.jpg"
import { useState } from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard/ProductCard';
import data from '../../../../../public/productsdata.jsx'


export default function CategoryProducts(props) {



    const filteredProducts = data.filter(product => product.CategoryID == 1);
    // <a href="https://ibb.co/yqfxQpw"><img src="https://i.ibb.co/VTjkqx7/7.jpg" alt="7" border="0"></a>
    // <a href="https://ibb.co/RjsTmQw"><img src="https://i.ibb.co/3RjmqSZ/6.jpg" alt="6" border="0"></a>
    // <a href="https://ibb.co/5cTCysb"><img src="https://i.ibb.co/Yj2JMfH/5.jpg" alt="5" border="0"></a>
    // <a href="https://ibb.co/Z8kf9BR"><img src="https://i.ibb.co/BZSfkyH/4.jpg" alt="4" border="0"></a>
    // <a href="https://ibb.co/MR5c2J4"><img src="https://i.ibb.co/sFJKmXG/3.jpg" alt="3" border="0"></a>
    // <a href="https://ibb.co/6mNNqLm"><img src="https://i.ibb.co/mGSSPgG/2.jpg" alt="2" border="0"></a>
    // <a href="https://ibb.co/9h1MXKj"><img src="https://i.ibb.co/nBYW2dS/1.jpg" alt="1" border="0"></a>


    return (
        <div className='cards-holder ms-5' style={{ fontSize: '15px' }}>
            {filteredProducts.map(product => (

                <ProductCard key={product.ProductID} name={product.Name} code={product.Barcode} price={product.Price} discount={Number(product.Discount)} />

            ))
            }



        </div>
    );
}





