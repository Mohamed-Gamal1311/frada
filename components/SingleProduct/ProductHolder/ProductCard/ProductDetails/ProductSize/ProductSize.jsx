import { useState } from 'react';
import './ProductSize.css';

export default function ProductSize() {
    const [isActive, setIsActive] = useState(null); // Use null to represent no active size

    const handleClick = (index) => {
        setIsActive(isActive === index ? null : index);
    };

    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    return (
        <div className='size-product-holder'>
            <div className='size-product-container'>
                <p>اختر من المقاسات</p>
                <div className="size-holder">
                    {sizes.map((size, index) => (
                        <div
                            key={index}
                            className={`single-sizes ${isActive === index ? 'active-size' : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            <p className="single-size">{size}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <Image width={50} height={50} /> */}
        </div>
    );
}
