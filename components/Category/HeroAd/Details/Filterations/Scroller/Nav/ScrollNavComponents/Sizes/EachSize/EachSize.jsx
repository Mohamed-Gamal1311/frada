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
import '../Size.css'



export default function EachSize(props) {


    const params = useParams();
    const [productsSize, setProductsSize] = useState([])
    const [isClicked, setIsClicked] = useState(false);

    const handleColClick = () => {
        setIsClicked(!isClicked);
    };

    const colStyle = {
        padding: '3%',
        fontSize: '1.2em',
        cursor: 'pointer',
        backgroundColor: isClicked ? '#332c32' : 'initial', // Change 'blue' to the desired background color
        color: isClicked ? '#D17A52' : 'initial', // Change '#fff' to the desired text color
    };


    async function fetchProducts(params) {
        try {
            const response = await fetch(`https://back.fradaksa.net/api/getProducts/${params.CategoryID}`);
            const data = await response.json();
            console.log("category")
            setProductsSize(data.data.Sizes);
            // console.log(data.data)
            console.log(data.data.Sizes)
            console.log(productsSize)
        } catch (error) {
            console.log(error)
        }
    }

    async function getProductsBySub(params) {
        try {
            const response = await fetch(`https://back.fradaksa.net/api/getProductsBySub/${params.SubcategoryID}`);
            const data = await response.json();
            console.log("sup category")
            setProductsSize(data.data.Sizes);
            console.log(productsSize)
            console.log(data.data.Sizes)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        fetchProducts(params)


    }, [params, params.CategoryID, params.SubcategoryID]);




    return (
        <div style={{ width: '25%' }}>
            {productsSize.map(i => [
                <Col onClick={handleColClick} style={colStyle} className='sizes' >{i}</Col>
            ])}
        </div>
    )
}