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

export default function CategoryProducts(props) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const params = useParams();
    console.log(params)
    useEffect(() => {

        // {{URL}}/getProductsBySub/1
        const fetchProducts = async () => {
            try {
                if (params.CategoryID && params.SubcategoryID == null) {
                    const response = await fetch(`https://www.fradaksa.com/api/getProducts/${params.CategoryID}`);
                    const data = await response.json();
                    setProducts(data.data);

                } else {
                    const response = await fetch(`https://www.fradaksa.com/api/getProductsBySub/${params.SubcategoryID}`);
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



    return (
        <div className='cards-holder ms-5' style={{ fontSize: '15px' }}>
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





