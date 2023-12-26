import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./ProductInfo.css"
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';



function ProductInfo(props) {


    const [productInfo, setProductInfo] = useState(null);

    useEffect(() => {
        const fetchProductInfo = async () => {
            try {
                const response = await fetch(`API_ENDPOINT/products/${productId}`);
                const data = await response.json();
                setProductInfo(data);
            } catch (error) {
                console.error('Error fetching product information:', error);
            }
        };

        fetchProductInfo();
    }, [productId]);

    const [activeTab, setActiveTab] = useState('link-1'); // Initial active tab

    const handleTabSelect = (selectedKey) => {
        setActiveTab(selectedKey);
    };

    return (




        <div className='w-75 align-right pt-3 pe-5' >
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
            <div className='bg-white' style={{ height: '80%', borderRadius: '5px', width: '103%' }}>
                {activeTab === 'link-1' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'>

                    {props.desc}

                </p>}
                {activeTab === 'link-2' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'>{props.info} </p>}
                {activeTab === 'link-3' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'>Content for Option 3</p>}
                {activeTab === 'link-4' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'>Content for Option 4</p>}
            </div>
        </div >



    )
}

export default ProductInfo;