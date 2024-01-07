import Image from 'next/image'
// import styles from '../../src/app/page.module.css'
// import "./Header.css"
//import '../Header.css'
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

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
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
                "cat": "category/1"

            },

            {
                "id": "2",
                "name": "أحذية الكـلاسيـك ",
                "cat": "category/2"
            },
            {
                "id": "3",
                "name": "أحذيــــة اسبـــــور ",
                "cat": "category/3"
            },
            {
                "id": "4",
                "name": "العطـــــــــــــــــور"
                , "cat": "category/4"

            },
            {
                "id": "5",
                "name": "الزي السعــــودي ",
                "cat": "category/5"
            },
            {
                "id": "6",
                "name": "الإكسســــــوارات",
                "cat": "category/6"
            },
            {
                "id": "7",
                "name": "مستلزمات الرجال ",
                "cat": "category/7"
            }
            // Add more categories as needed
        ]
    }


    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const route = usePathname();
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://back.fradaksa.net/api/categories');
                const data = await response.json();
                setCategories(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        // <div>
        <div className='d-flex flex-column w-100  ' style={{ position: 'relative', zIndex: 99999, width: '125px' }}>
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

                <Collapse in={open}>
                    <div className=' w-80 header-holder ' style={{ marginTop: '0', position: 'absolute', top: '50px' }}>
                        <div style={{ height: '80vh', background: '#332C32' }}>
                            <div className='py-5 d-flex flex-column align-items-center ' >



                                {categoriesData.categories.map((i, index) => (



                                    <div key={i.id} className='mb-2 fs-6  w-100' style={{ maxWidth: '400px' }}>
                                        {/* <Link href={i.cat} style={{ textDecoration: 'none', color: 'unset', width: '48%' }} > */}
                                        {/* <Link href={"category/" + categories.CategoryID} as={`/category/${categories.CategoryID}`} style={{ textDecoration: 'none' }} > */}
                                        <Link href={`/category/${i.id}`} style={{ textDecoration: 'none' }} onClick={() => setOpen(!open)}>

                                            <UpCategory
                                                categoryId={i.id}
                                                text={i.name}
                                                img={"c" + index}
                                                active={activeCategoryId === i.id}
                                                onClick={() => handleCategoryClick(i.id)}
                                            />
                                        </Link>
                                        {/* </Link> */}
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