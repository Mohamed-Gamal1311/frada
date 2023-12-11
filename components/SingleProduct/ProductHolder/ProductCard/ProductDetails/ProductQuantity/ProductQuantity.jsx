"use client"

import { useState } from "react";
import "./ProductQuantity.css";

const ProductQuantity = ({ minValue = 0, maxValue = 100 }) => {
    const [count, setCount] = useState(minValue);

    const handleIncrementCounter = () => {
        if (count < maxValue) {
            setCount((prevState) => prevState + 1);
        }
    };

    const handleDecrementCounter = () => {
        if (count > minValue) {
            setCount((prevState) => prevState - 1);
        }
    };

    return (
        <></>
    );
};

export default ProductQuantity;