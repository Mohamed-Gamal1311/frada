"use client"
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import "../../../Scroller.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import EachColor from './EachColor/EachColor';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { useState, } from 'react';
// import RangeSlider from 'react-bootstrap-range-slider';
// import MultiRangeSlider from './Nav/ScrollNavComponents/MultiRangeSlider/MulltiRangeSlider';
// import OffersDiscounts from './Nav/ScrollNavComponents/OffersDiscounts/OffersDiscounts';


export default function CircleColors(props) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    console.log(params)
    useEffect(() => {


        const fetchProducts = async () => {
            try {
                if (params.CategoryID && params.SubcategoryID == null) {
                    const response = await fetch(`https://back.fradaksa.net/api/getProducts/${params.CategoryID}`);
                    const data = await response.json();
                    setProducts(data.data);

                } else {
                    const response = await fetch(`https://back.fradaksa.net/api/getProductsBySub/${params.SubcategoryID}`);
                    const data = await response.json();
                    setProducts(data.data);
                }


                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };



        fetchProducts();

    }, [params.CategoryID, params.SubcategoryID]);

    const numberOfTimes = 20;

    // Create an array to represent the loop
    const componentsArray = Array.from({ length: numberOfTimes }, (_, index) => index);
    return (
        <Card.Body>
            <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold', borderBottom: "0 !important" }}>الألوان</Card.Title>
            <Container>
                <Row className="justify-content-end" md={1} style={{ textAlign: 'center', fontWeight: 'bold' }}>

                    {componentsArray.map((index) => (
                        <EachColor key={index} />
                        // <div key={index} ></div>

                    ))}

                </Row>

            </Container>



        </Card.Body>
    )
}