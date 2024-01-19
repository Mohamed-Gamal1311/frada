import { useContext, useEffect, useState } from 'react';
import { SizeContext } from '../../../../../../../../../SizeContext/SizeContext';
import { useParams, useRouter } from 'next/navigation';

import Col from 'react-bootstrap/Col';

export default function EachSize() {
    const params = useParams();
    const { selectedSize, setSelectedSize } = useContext(SizeContext);
    const [productsSize, setProductsSize] = useState([]);

    const colStyle = {
        padding: '3%',
        fontSize: '1.2em',
        cursor: 'pointer',
        // backgroundColor: selectedSize ? '#332c32' : 'initial',
        // color: selectedSize ? '#D17A52' : 'initial',
    };

    async function fetchProducts(params) {
        try {
            const response = await fetch(`https://back.fradaksa.net/api/getProducts/${params.CategoryID}`);
            const data = await response.json();
            setProductsSize(data.data.Sizes);
        } catch (error) {
            console.log(error);
        }
    }

    async function getProductsBySub(params) {
        try {
            const response = await fetch(`https://back.fradaksa.net/api/getProductsBySub/${params.SubcategoryID}`);
            const data = await response.json();
            setProductsSize(data.data.Sizes);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     if (params.CategoryID && !params.SubcategoryID) {
    //         fetchProducts(params);
    //     } else {
    //         getProductsBySub(params);
    //     }
    // }, [params.CategoryID, params.SubcategoryID]);

    useEffect(() => {
        // تحديث قائمة المنتجات في مكون CategoryProducts عند تغيير المقاس المحدد
        if (params.CategoryID && !params.SubcategoryID) {
            fetchProducts(params);
        } else {
            getProductsBySub(params);
        }
    }, [selectedSize]); // تتبع تغيير selectedSize

    const handleColClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div style={{ width: '25%' }} className='size-filter'>
            {productsSize.map((size) => (
                <Col
                    onClick={() => handleColClick(size)}
                    style={colStyle}
                    className={`sizes ${selectedSize === size ? 'selected' : ''}`}
                    key={size}
                >
                    {size}
                </Col>
            ))}
        </div>
    );
}