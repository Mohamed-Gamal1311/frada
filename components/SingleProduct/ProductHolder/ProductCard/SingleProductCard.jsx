
import ImagesHolder from './ImagesHolder/ImagesHolder'
import ProductDetails from './ProductDetails/ProductDetails'
import Card from 'react-bootstrap/Card';
import "./SingleProductCard.css"
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function SingleProductCard() {


    const [selectedColorID, setSelectedColorID] = useState(null);
    const [images, setImages] = useState([]);

    const [product, setProduct] = useState({});
    const [main, setMain] = useState({});
    const [loading, setLoading] = useState(true);
    const [sizes, setSizes] = useState(true);
    const [isActive, setIsActive] = useState(null); // Use null to represent no active size
    const params = useParams();

    // console.log(params)
    useEffect(() => {

        // {{URL}}/getProductsBySub/1
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://fradaksa.com/api/getProduct/${params.ProductID}`);
                const data = await response.json();

                setProduct(data.data);

                setLoading(false);

                if (product.Sizes == undefined) {
                    setSizes(false)
                }


                setSelectedColorID(data.data.Colors[0].ColorID);
                setImages(data.data.Colors[0].Images)
                setMain(data.data.MainPhoto)

            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };


        fetchProducts();

    }, [params.ProductID]);


    const handleClick = (index) => {
        setIsActive(isActive === index ? null : index);
    };


    const handleImageClick = (colorID, images, main) => {
        // Update the state with the selected ColorID

        setSelectedColorID(colorID);
        setImages(images);
        setMain(main);
    };





    return (
        <>
            <ImagesHolder id={product.ProductID} colorid={selectedColorID} images={images} main={main} />
            <Card style={{
                backgroundColor: 'transparent', textAlign: 'right', border: 'none', width: '35%',
                marginRight: '2.5%'
            }}>
                <Card.Body>
                    <Card.Title className='single-product-holder'>{product.Name}</Card.Title>


                    <div className='single-cors-holder'>
                        <h6 className='single-cors-code'>{product.Barcode}</h6>
                        <div className='single-cors-rating'>
                            <Rating value={3} readOnly />
                            <div >
                                ١٥ تقييم
                            </div>
                        </div>
                    </div>
                    <div className='color-product-holder'>
                        <p >اختر من الالوان</p>
                        <div className='color-image-holder flex-wrap'>
                            {product.Colors && product.Colors.map((color, index) => (
                                <div key={index} style={{ cursor: 'pointer' }} onClick={() => handleImageClick(color.ColorID, color.Images, color.Images[0])}>
                                    <Image
                                        key={index}
                                        src={`https://www.fradaksa.com/Attachment/${product.ProductID}/${color.ColorID}/${color.Images[0]}`}
                                        width={50}
                                        height={50}
                                        alt={`${color}-Image`}
                                        className="ml-2"
                                    />
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className='size-product-holder'>
                        <div className='size-product-container'>
                            <p>اختر من المقاسات</p>
                            <div className="size-holder">
                                {product.Sizes && product.Sizes.map((size, index) => (
                                    <div
                                        key={index}
                                        className={`single-sizes ${isActive === index ? 'active-size' : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        <div className="single-size">{size}</div>
                                    </div>
                                ))
                                }


                            </div>
                        </div>

                    </div>

                    <div className='size-product-holder'>
                        <div className='size-product-container'>
                            <p>اختر الكمية</p>
                            <div className="size-holder">
                                غير متاح للبيع حني الان
                            </div>
                        </div>

                    </div>
                </Card.Body>
            </Card >
        </>
    )
}


