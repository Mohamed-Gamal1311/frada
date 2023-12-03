"use client"
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
// import Hero from "../../../public/Images/Hero.jpg"
// import HeroAd from './AdContent/HeroAd'
// import Panel from './AdContent/Panel'
import CategoryProducts from './CategoryProducts/CategoryProducts'
import Filter from './Filterations/Filter'



import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useRef, useEffect } from 'react'


export default function Details(props) {

    const filterRef = useRef(null);
    const [filterMargin, setFilterMargin] = useState(0);
    const [shown, setShown] = useState(1);
    const [filterWidth, setFilterWidth] = useState(0);
    const [buttonTitle, setbuttonTitle] = useState('اخفاء');

    // Function to get the width of the filter element
    useEffect(() => {
        const getFilterWidth = () => {
            if (filterRef.current) {
                const width = filterRef.current.clientWidth;
                setFilterWidth(width)
            }

        };
        getFilterWidth();
    })



    const handleButtonClick = () => {
        // Update the margin left when the button is clicked
        if (shown) {
            setFilterMargin(-filterWidth);
            setShown(0)
            setbuttonTitle('اظهر')
        } else {
            setFilterMargin(0)
            setShown(1)
            setbuttonTitle('اخفاء')

        }
    };

    return (
        <section>
            <nav className='me-5 d-flex flex-row-reverse' >




                <DropdownButton
                    className='fw-bold'

                    as={ButtonGroup}
                    id={`dropdown-variants-transparent`}
                    variant="transparent"
                    fontWeight="bold"
                    title='الترتيب حسب'
                    align={{ xl: 'end' }}
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                        Active Item
                    </Dropdown.Item>

                </DropdownButton>
                <Button variant="button" onClick={handleButtonClick} style={{ fontWeight: 'bold' }}>{buttonTitle} فلتر البحث</Button>
            </nav>
            <div className='d-flex flex-row ' style={{ transition: "all 0.3s" }}>


                {/* <Details show={1} /> */}
                <CategoryProducts />
                {
                    <div id="filter" ref={filterRef} className='position-sticky ' style={{ transition: "all 0.3s", height: '100vh', top: 0, marginRight: `${filterMargin}px` }}>
                        <Filter />
                    </div>
                }
            </div>
        </section>


    )
}