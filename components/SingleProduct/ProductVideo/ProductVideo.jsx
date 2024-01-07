import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
function ProductVideo(props) {

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
                const response = await fetch(`https://back.fradaksa.net/api/getProduct/${params.ProductID}`);
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
    return (

        <section className='d-flex justify-content-center px-5 py-5'>
            <Card className="d-flex flex-row-reverse w-100" style={{ textAlign: "right", border: "1px solid #d17a52" }} >
                <Card.Body className='w-50'>
                    <Card.Title style={{ color: "#d17a52", textDecoration: 'underline', fontSize: '2.2em' }}>{props.title}</Card.Title>
                    <Card.Text className='pe-2 pt-2' style={{ textAlign: "right", lineHeight: '2em' }} >
                        <span style={{ textAlign: 'justify', fontSize: '1.2em' }}>
                            {props.desc !== null ? props.desc : ''}
                        </span>
                    </Card.Text>
                    <div className='d-flex '>
                        <Button className="button-product-video" style={{ textAlign: "left", marginTop: '5%', backgroundColor: "#d17a52", border: 'none', fontWeight: 'bold' }} variant="primary">اعرف المزيد</Button>
                    </div>
                </Card.Body>
                <Card.Body className='w-50' >
                    {/* <h1>{product.Videos ? '' : 'No video available'}</h1> */}
                    <div dangerouslySetInnerHTML={{ __html: product.Video_Description }}></div>
                </Card.Body>

            </Card>
        </section>
    );
}

export default ProductVideo;