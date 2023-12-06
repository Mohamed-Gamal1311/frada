import Image from 'next/image'
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// import "./Up.css"

export default function UpSubcategory(props) {
    const [open, setOpen] = useState(false);



    return (
        <>
            {/* <input className='w-100' /> */}
            <div className='d-flex flex-column justify-content-center align-items-center '>

                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className={` w-75 p-1 header-toggle-inverted ${open ? 'header-toggle-active' : ''}`}
                    style={{
                        borderTopLeftRadius: props.isFirst ? '5px !important ' : '0', // Apply border-radius to top-left if it's the first subcategory
                        borderTopRightRadius: props.isFirst ? '5px !important' : '0', // Apply border-radius to top-right if it's the first subcategory
                        borderBottomRightRadius: props.isLast ? '5px !important' : '0', // Apply border-radius to top-right if it's the first subcategory
                        borderBottomLeftRadius: props.isLast ? '5px !important' : '0', // Apply border-radius to top-right if it's the first subcategory
                        borderBottom: props.isLast ? '0' : '1px solid #D17A52 !important'
                    }}
                >
                    <div>
                        <div className='subcategory-head ' style={{ fontWeight: "bold" }}> {props.name}</div>
                        <div> </div>
                    </div>
                </Button>



            </div >





        </>
    )
}