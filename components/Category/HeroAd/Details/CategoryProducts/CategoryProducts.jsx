"use client"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import img from "../../../../../public/Images/Hero.jpg"
import { useState } from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard/ProductCard';
import data from '../../../../../public/productsdata.jsx'
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Slider from '../Filterations/Scroller/Nav/ScrollNavComponents/Slider/Slider';

export default function CategoryProducts(props) {

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
        // // {{URL}}/getProductsBySub/1
        // const fetchProducts = async () => {
        //     try {
        //         if (params.CategoryID && params.SubcategoryID == null) {
        //             const response = await fetch(`https://back.fradaksa.net/api/getProducts/${params.CategoryID}`);
        //             const data = await response.json();
        //             //  setProductSize(data)
        //             // setProducts(data.data);
        //             console.log(data)
        //             // console.log(products)

        //         } else {
        //             const response = await fetch(`https://back.fradaksa.net/api/getProductsBySub/${params.SubcategoryID}`);
        //             const data = await response.json();
        //             // setProducts(data.data);
        //             // setProductSize(data)
        //             // console.log(productSize)
        //             // console.log(products)

        //         }


        //         setLoading(false);
        //     } catch (error) {
        //         console.error('Error fetching products:', error);
        //         setLoading(false);
        //     }
        // };



        // fetchProducts();

    }, [params.CategoryID, params.SubcategoryID]);






    // useEffect(() => {


    //     const fetchProducts2 = async () => {
    //         try {
    //             const response = await fetch(`http://127.0.0.1:8000/api/getProductsBySub/${params.SubcategoryID}`);
    //             const data = await response.json();
    //             setProducts(data.data);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching products:', error);
    //             setLoading(false);
    //         }
    //     };


    //     fetchProducts2();

    // }, [params.SubcategoryID]);

    // const [minPrice, setMinPrice] = useState(null);
    // const [maxPrice, setMaxPrice] = useState(null);

    // const handlePriceChange = (min, max) => {
    //   setMinPrice(min);
    //   setMaxPrice(max);
    // };

    return (
        <div className='cards-holder ms-2 ms-lg-5 ms-xl-5 ms-md-5 ' style={{ fontSize: '15px' }}>

            {products && products.length > 0 ? (
                products.map((product) => (

                    <ProductCard
                        key={product.ProductID}
                        id={product.ProductID}
                        name={product.Name}
                        colorid={product.Colors.length > 0 && product.Colors[0].ColorID}
                        code={product.Barcode}
                        price={Number(product.Price)}
                        discount={Number(product.Discount)}
                        mainphoto={product.MainPhoto && product.MainPhoto.Image}
                        colornum={Number(product.NumOfColors)}
                        photocolors={product.Colors}


                    />


                ))

            ) : (
                <p style={{ textAlign: 'center' }}>لا توجد منتجات هنا</p>
            )}


        </div>
    );
}





