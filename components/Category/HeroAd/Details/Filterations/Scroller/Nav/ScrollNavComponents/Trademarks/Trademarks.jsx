import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams, useRouter } from 'next/navigation';
import { SizeContext } from '../../../../../../../../SizeContext/SizeContext';
import './Trademarks.css'; // استيراد ملف الأنماط

export default function Trademarks(props) {
    const params = useParams();
    const { selectedTrademark, setSelectedTrademark } = useContext(SizeContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [displayedTrademarks, setDisplayedTrademarks] = useState([]);

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

    useEffect(() => {
        const uniqueTrademarks = [
            ...new Set(products.map((product) => product.Trademark.TrademarkName)),
        ];
        setDisplayedTrademarks(uniqueTrademarks);
    }, [products]);

    const handleTrademarkClick = (trademark) => {
        setSelectedTrademark(trademark);
    };

    return (
        <Card.Body className="trademarkcontent">
            <Card.Title
                style={{
                    fontSize: '1.3em',
                    marginBottom: '4%',
                    color: '#D17A52',
                    fontWeight: 'bold',
                }}
            >
                العلامات التجارية
            </Card.Title>
            {displayedTrademarks.map((trademark) => (
                <Card.Text
                    className={`trademark ${selectedTrademark === trademark ? 'selected' : ''
                        }`}
                    key={trademark}
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1.3em',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleTrademarkClick(trademark)}
                >
                    {trademark}
                </Card.Text>
            ))}
        </Card.Body>
    );
}