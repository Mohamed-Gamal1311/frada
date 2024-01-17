"use client"
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import "../../../Scroller.css"
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { useState, } from 'react';
// import RangeSlider from 'react-bootstrap-range-slider';
import { useContext, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import MultiRangeSlider from './MultiRangeSlider/MulltiRangeSlider';
import { SizeContext } from '../../../../../../../../SizeContext/SizeContext';
// import OffersDiscounts from './Nav/ScrollNavComponents/OffersDiscounts/OffersDiscounts';

export default function Slider(props) {
    const { maxPrice, setMaxPrice, minPrice, setMinPrice } = useContext(SizeContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productSize, setProductSize] = useState()
    const router = useRouter();
    const params = useParams();


    async function fetchProducts(params) {
        try {
            const response = await fetch(`https://back.fradaksa.net/api/getProducts/${params.CategoryID}`);
            const data = await response.json();
            console.log("category")
            setProducts(data.data.Products);
            console.log(data);
            console.log(products)
        } catch (error) {
            console.log(error)
        }
    }

    async function getProductsBySub(params) {
        try {
            const response = await fetch(`https://back.fradaksa.net/api/getProductsBySub/${params.SubcategoryID}`);
            const data = await response.json();
            console.log("sup category")
            setProducts(data.data.Products);
            console.log(data.data);
            console.log(products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (params.CategoryID && params.SubcategoryID == null) {
            fetchProducts(params)
        } else {
            getProductsBySub(params)
        }


    }, [params.CategoryID, params.SubcategoryID]);


    const getMaxPrice = () => {
        if (products.length === 0) {
            return null;
        }
        const prices = products.map((product) => product.Price);
        return Math.max(...prices);
    };

    const getMinPrice = () => {
        if (products.length === 0) {
            return null;
        }
        const prices = products.map((product) => product.Price);
        return Math.min(...prices);
    };


    return (
        <Card.Body>
            <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold', border: 'none' }}>السعر</Card.Title>
            <div className='price-slide'>

                <MultiRangeSlider
                    min={getMinPrice()}
                    max={getMaxPrice()}
                    onChange={({ min, max }) => {
                        setMinPrice(min);
                        setMaxPrice(max);
                    }}
                />


                {/* <p>أعلى سعر: {getMaxPrice()}</p>
            <p>أقل سعر: {getMinPrice()}</p> */}
                {/* {products && products.length > 0 ? (
                products.map((product) => (
                    <p>{product.Price}</p>
                ))
            ) : (
                <p style={{ textAlign: 'center' }}>لا توجد منتجات هنا</p>
            )} */}

            </div>
        </Card.Body>
    )
}