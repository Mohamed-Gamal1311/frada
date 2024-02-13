import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./ProductInfo.css"
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';


function ProductInfo(props) {

    // const [infoTitle, setInfoTitle] = useState([]);
    // const [infoDescription, setInfoDescription] = useState([]);
    // const [product1, setProduct1] = useState({});
    // const params = useParams();

    // useEffect(() => {
    //     const fetchProductData = async () => {
    //         try {
    //             const response = await fetch(`https://back.fradaksa.net/api/additionalInfo/${params.ProductID}`);
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setProduct1(data.data);
    //                 setInfoDescription(data.data.InfoDescription); // تعيين قيمة infoDescription
    //                 console.log(response);
    //             } else {
    //                 console.error('Failed to fetch product data');
    //             }
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     };

    //     fetchProductData();
    // }, []);



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


    const [activeTab, setActiveTab] = useState('link-1'); // Initial active tab

    const handleTabSelect = (selectedKey) => {
        setActiveTab(selectedKey);
    };
    { activeTab === 'link-2' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'> </p> }
    return (




        <div className='w-75 align-right pt-3 pe-5 info-addition'  >
            <Nav variant="tabs" style={{ color: '#d17a52', flexDirection: 'row', justifyContent: 'flex-end', border: 'none' }} defaultActiveKey="link-1" onSelect={handleTabSelect}>
                {props.info !== '' &&
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">معلومات اضافية  <span>عن المنتج</span></Nav.Link>
                    </Nav.Item>
                }
                {props.desc !== '' &&
                    < Nav.Item style={{ border: 'none' }}>
                        <Nav.Link eventKey="link-1">مواصفات المنتج</Nav.Link>
                    </Nav.Item>

                }

                {/* 
                <Nav.Item>
                    <Nav.Link eventKey="link-4">معلومات العلامة التجارية</Nav.Link>
                </Nav.Item> 
                <Nav.Item>
                    <Nav.Link eventKey="link-3">معرض صور المنتج</Nav.Link>
                </Nav.Item>
                */}
            </Nav>

            {/* Content based on the selected tab */}
            <div className='bg-white' style={{ height: 'auto%', borderRadius: '5px', width: '103%' }}>
                {activeTab === 'link-1' && <p style={{ textAlign: 'right', paddingTop: '2em', marginTop: '-2px' }} className='nav-text px-5' dangerouslySetInnerHTML={{ __html: product.Description }}>

                    {/* {product.Description} */}

                </p>}
                {activeTab === 'link-2' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5' dangerouslySetInnerHTML={{ __html: product.Additional_Info }}></p>}
                {/* {activeTab === 'link-2' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'>{InfoDescription} </p>} */}
                {activeTab === 'link-3' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'>Content for Option 3</p>}
                {activeTab === 'link-4' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'>Content for Option 4</p>}
            </div>
        </div >



    )
}

export default ProductInfo;

