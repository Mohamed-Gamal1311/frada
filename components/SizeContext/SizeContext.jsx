"use client"
import { createContext, useState } from 'react';

export const SizeContext = createContext();

export const SizeProvider = ({ children }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedTrademark, setSelectedTrademark] = useState('');

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    
    
    return (
        <SizeContext.Provider value={{ selectedSize, setSelectedSize, selectedTrademark, setSelectedTrademark, maxPrice, setMaxPrice, minPrice, setMinPrice }}>
            {children}
        </SizeContext.Provider>
    );
};
