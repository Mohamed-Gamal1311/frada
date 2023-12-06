import Image from 'next/image'
// import styles from '../../src/app/page.module.css'
// import "./Header.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Arrow from '../../../public/Images/icon/Arrow.svg';
import Logo from "../../../public/Images/Icons/2nd Bar/Frada logo.svg"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import "./Up.css"
import UpCategory from './UpComponent/UpCategory';
import Search from "../../../public/Images/Icons/2nd Bar/Union 1.svg"

export default function Up() {
    const [open, setOpen] = useState(false);
    const [activeCategoryId, setActiveCategoryId] = useState(null);

    const handleCategoryClick = (categoryId) => {
        setActiveCategoryId(categoryId);
    };

    const categoriesData = {
        "categories": [
            {
                "id": "1",
                "name": "النعــــــــــــــــــال",

            },
            {
                "id": "2",
                "name": "أحذية الكـلاسيـك "
            },
            {
                "id": "3",
                "name": "أحذيــــة اسبـــــور "
            },
            {
                "id": "4",
                "name": "العطـــــــــــــــــور"
            },
            {
                "id": "5",
                "name": "الزي السعــــودي "
            },
            {
                "id": "6",
                "name": "الإكسســــــوارات"
            },
            {
                "id": "7",
                "name": "مستلزمات الرجال "
            }
            // Add more categories as needed
        ]
    }


    return (
        // <div>
        <div className='d-flex flex-column w-100  ' style={{ position: 'relative', zIndex: 9 }}>
            {/* <input className='w-100' /> */}
            <div style={{ height: '82px' }} className='d-flex flex-column justify-content-center align-items-center position-fixed w-100 back-white'>
                <form style={{ position: 'absolute', top: 0 }} className="search-bar search-bar-mobile" action="">
                    <input type="text" placeholder="ابحث عن منتج..." name="search2" />
                    <button type="submit"><i className="fa fa-search"><Image src={Search} alt="Search" /></i></button>
                </form>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className={'header-toggle' + (!open ? '-active ' : '') + ' mx-5 w-35 p-1'}
                    style={{
                        cursor: 'pointer', zIndex: 9, marginTop: '-3px', position: 'absolute',
                        top: '40px'

                    }}
                // variant='unset', 
                >
                    {!open &&
                        <Image src={Arrow} alt="arrow" />
                    }
                    {
                        open &&
                        <Image src={Arrow} className='flipped' alt="arrow-flipped" />
                    }
                </Button>
                <Collapse in={open} >
                    <div className=' w-80 header-holder ' style={{ marginTop: '0', position: 'absolute', top: '50px' }}>
                        <div style={{ height: '80vh' }}>
                            <div className='py-5 d-flex flex-column align-items-center'>


                                {categoriesData.categories.map((category, index) => (

                                    <div key={category.id} className='mb-2 fs-6  w-100' style={{ maxWidth: '400px' }}>
                                        <UpCategory
                                            categoryId={category.id}
                                            text={category.name}
                                            img={"c" + index}
                                            active={activeCategoryId === category.id}
                                            onClick={() => handleCategoryClick(category.id)}
                                        />
                                    </div>
                                ))}



                            </div>
                        </div>

                    </div>
                </Collapse>



            </div >
            <div style={{ marginTop: '60px', alignSelf: 'center' }}>
                <Image src={Logo} width={200} height={100} alt='Logo' />
            </div>

        </div>


    )
}