import ButtonsProduct from "./ButtonsProduct/ButtonsProduct";
import ColorProduct from "./ColorProduct/ColorProduct";
import ProductName from "./ProductName/ProductName";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import ProductSize from "./ProductSize/ProductSize";
import { useState, useLayoutEffect, useRef } from 'react';







export default function ProductDetails() {

    const [elementHeight, setElementHeight] = useState(0);
    const elementRef = useRef(null);

    useLayoutEffect(() => {
        if (elementRef.current) {
            setElementHeight(elementRef.current.clientHeight);
        }
    }, []);
    return (
        <div style={{ width: '47%', marginRight: '25px', padding: '10px' }} ref={elementRef} >
            <ProductName />
            <ColorProduct />
            <ProductSize />
            <ProductQuantity />
            <ButtonsProduct />


            <p >ارتفاع العنصر الأصلي: {elementHeight}</p>

        </div>
    )

}