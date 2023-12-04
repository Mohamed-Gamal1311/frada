import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./ProductInfo.css"
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';


function ProductInfo() {

    const [activeTab, setActiveTab] = useState('link-1'); // Initial active tab

    const handleTabSelect = (selectedKey) => {
        setActiveTab(selectedKey);
    };

    return (




        <div className='w-75 align-right pt-3 pe-5' >
            <Nav variant="tabs" style={{ color: '#d17a52', justifyContent: 'flex-end', border: 'none' }} defaultActiveKey="link-4" onSelect={handleTabSelect}>
                <Nav.Item style={{ border: 'none' }}>
                    <Nav.Link eventKey="link-1">مواصفات المنتج</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">معلومات اضافية عن المنتج</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">معرض صور المنتج</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">معلومات العلامة التجارية</Nav.Link>
                </Nav.Item>
            </Nav>

            {/* Content based on the selected tab */}
            <div className='bg-white' style={{ height: '80%', borderRadius: '5px', width: '103%' }}>
                {activeTab === 'link-1' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'>حذاء ### code، يعتبر هذا الحذاء من أحدث التصاميم الحصرية والمميزة، وتم تصميمه خصيصاً لرجال الأعمال ومن أجل المقابلات الرسمية ، كما تم وضع المنتج خلال فترة اختبار وجودة، والاهتمام بفرادة التصميم عن غيره من التصاميم المتداولة بعناية شديدة من رواد التصميم والموضة بفريق عمل فرادا.

                    هذا الحذاء الشرقي مصنع بأحدث الأجهزة والمعدات التي تخدم راحة عملائنا، كما تم استخدام مواد وجلود عالية الجودة ولأننا نهتم بصحة عملائنا الكرام،  تم اختيار دعسه طبية وبطانة علوية مريحة جدا للقدم ، وحرصنا كل الحرص ان يكون وزن الحذاء خفيف لشعور بالراحة أثناء المشي</p>}
                {activeTab === 'link-2' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'>Content for Option 2</p>}
                {activeTab === 'link-3' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'>Content for Option 3</p>}
                {activeTab === 'link-4' && <p style={{ textAlign: 'right', paddingTop: '3em', marginTop: '-2px' }} className='nav-text px-5'>Content for Option 4</p>}
            </div>
        </div>



    )
}

export default ProductInfo;