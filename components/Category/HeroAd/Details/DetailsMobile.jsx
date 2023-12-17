import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Filter from './Filterations/Filter';
import CategoryProducts from './CategoryProducts/CategoryProducts';

export default function DetailsMobile(props) {
    const [isFilterModalVisible, setFilterModalVisible] = useState(false);
    const filterRef = useRef(null);

    const handleButtonClick = () => {
        setFilterModalVisible(!isFilterModalVisible);
    };

    useEffect(() => {
        const getFilterWidth = () => {
            if (filterRef.current) {
                const width = filterRef.current.clientWidth;
                // Perform any necessary operations with the width
            }
        };
        getFilterWidth();
    }, []);

    return (
        <section>
            <nav className='me-5 d-flex flex-row-reverse'>
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
                <Button variant="button" onClick={handleButtonClick} style={{ fontWeight: 'bold' }}>
                    {isFilterModalVisible ? 'اخفاء' : 'اظهر'} فلتر البحث
                </Button>
            </nav>

            <div className='d-flex flex-row'>
                <div style={{ width: '100%' }}>
                    <CategoryProducts />
                </div>

                {isFilterModalVisible && (
                    <div className='filter-modal-overlay position-absolute' >
                        <div id="filter" ref={filterRef} className='filter-modal-content' style={{ transition: "all 0.3s", height: '100vh' }}>
                            <Filter />
                        </div>
                    </div>
                )}
            </div>
        </section >
    );
}
