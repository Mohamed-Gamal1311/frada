"use client"
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import "../../../../Scroller.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';




export default function EachColor(props) {
    const params = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchProducts(params) {
        try {
            const response = await fetch(
                `https://back.fradaksa.net/api/getProducts/${params.CategoryID}`
            );
            const data = await response.json();
            setProducts(data.data.Products);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    async function getProductsBySub(params) {
        try {
            const response = await fetch(
                `https://back.fradaksa.net/api/getProductsBySub/${params.SubcategoryID}`
            );
            const data = await response.json();
            setProducts(data.data.Products);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        if (params.CategoryID && !params.SubcategoryID) {
            fetchProducts(params);
        } else {
            getProductsBySub(params);
        }
    }, [params.CategoryID, params.SubcategoryID]);
    const [isClickedCircle, setIsClickedCircle] = useState(false);

    const handleCircleClick = () => {
        setIsClickedCircle(!isClickedCircle);
    };

    const circleStyle = {
        cursor: 'pointer',
        border: isClickedCircle ? '1px solid #D17A52' : 'initial', // Change 'blue' to the desired background color
        // Change '#fff' to the desired text color
    };


    return (
        products.map((product) => (
            // <Col onClick={handleCircleClick} className='circle-colors' >{product.Colors.length > 0 ? product.Colors[0].ColorHex : ''}</Col>
            <p key={product}>{product.Colors.length > 0 ? product.Colors[0].ColorHex : ''}</p>
        ))
    )

}