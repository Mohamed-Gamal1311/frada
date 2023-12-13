import ButtonsProduct from "./ButtonsProduct/ButtonsProduct";
import ColorProduct from "./ColorProduct/ColorProduct";
import ProductCors from "./ProductCors/ProductCors";
import ProductName from "./ProductName/ProductName";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import ProductSize from "./ProductSize/ProductSize";
import { useState, useLayoutEffect, useRef } from 'react';







export default function ProductDetails() {


    return (
        <div style={{ width: "35%", textAlign: "right", marginRight: '2.5%' }} >
            <ProductName />
            <ProductCors />
            <ColorProduct />
            <ProductSize />
            <div>not avaialble fo selling now</div>
            <ProductQuantity />
            <ButtonsProduct />




        </div>
    )

}