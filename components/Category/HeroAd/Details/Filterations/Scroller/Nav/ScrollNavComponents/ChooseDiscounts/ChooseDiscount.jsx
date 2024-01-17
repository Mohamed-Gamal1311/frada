import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function ChooseDiscounts() {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uniqueDiscounts, setUniqueDiscounts] = useState([]);

    async function fetchProducts(params) {
        try {
            const response = await fetch(`https://back.fradaksa.net/api/getProducts/${params.CategoryID}`);
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
            const response = await fetch(`https://back.fradaksa.net/api/getProductsBySub/${params.SubcategoryID}`);
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

    useEffect(() => {
        const discounts = [...new Set(products.map((product) => product.Discount))];
        setUniqueDiscounts(discounts);
    }, [products]);

    return (
        <Card.Body className="border-bottom-1" style={{ height: 'min-content !important', textAlign: 'right' }}>
            <Card.Title style={{ fontSize: '1.3em', marginBottom: '4%', color: '#D17A52', fontWeight: 'bold' }}>
                اختر من الخصومات
            </Card.Title>
            <Form.Select aria-label="Default select example" style={{ textAlign: 'right', borderColor: '#332c32', borderRadius: '20px', fontWeight: 'bold' }}>
                {uniqueDiscounts.map((discount) => (
                    <option key={discount}>{discount}</option>
                ))}
            </Form.Select>
        </Card.Body>
    );
}