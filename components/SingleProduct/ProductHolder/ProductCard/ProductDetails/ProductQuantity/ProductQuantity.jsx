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
        <div className="quantit-page">
            <p className="title-quantit">اختر الكميه</p>
            <div className="parent-quantity">
                <div className="quantity-price" >






                    <div className="ProductQuantity">
                        <div className=" price">

                            <p className="discound">8.88</p>
                            <p className="price-buy">8.88</p>
                            <p className="seprate">/</p>
                        </div>
                        <div className="btn-group">

                            <button className="increment-btn" onClick={handleIncrementCounter}>
                                <span className="material-symbols-outlined">+</span>
                            </button>
                            <p>{count}</p>
                            <button className="decrement-btn" onClick={handleDecrementCounter}>
                                <span className="material-symbols-outlined">-</span>
                            </button>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProductQuantity;