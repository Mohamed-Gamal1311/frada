
import Image from 'next/image'
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import UpSubcategory from './UpSubcategory/UpSubcategory';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
// import "./Up.css"
import c1 from "../../../../public/Images/icon/Slippers.svg"
import c2 from "../../../../public/Images/icon/Shoes.svg"
import c3 from "../../../../public/Images/icon/Snickers.svg"
import c4 from "../../../../public/Images/icon/Perfume.svg"
import c5 from "../../../../public/Images/icon/Kheleeji.svg"
import c6 from "../../../../public/Images/icon/Accessories.svg"
import c7 from "../../../../public/Images/icon/Mustache.svg"
import shown from "../../../../public/Images/icon/shown.svg"
import collapsed from "../../../../public/Images/icon/collapsed.svg"
import s1 from "../../../../public/Images/icon/SlippersShown.svg"
import s2 from "../../../../public/Images/icon/ShoesShown.svg"
import s3 from "../../../../public/Images/icon/SnickersShown.svg"
import s4 from "../../../../public/Images/icon/PerfumeShown.svg"
import s5 from "../../../../public/Images/icon/KheleejiShown.svg"
import s6 from "../../../../public/Images/icon/AccessoriesShown.svg"
import s7 from "../../../../public/Images/icon/MustacheShown.svg"

export default function UpCategory(props) {

    const [open, setOpen] = useState(false);
    const categoryIcons = {
        "1": c1,  // Assuming categoryId is a string
        "2": c2,
        "3": c3,
        "4": c4,
        "5": c5,
        "6": c6,
        "7": c7,
        // Add more categoryIds as needed
    };
    const categoryIconsShow = {
        "1": s1,  // Assuming categoryId is a string
        "2": s2,
        "3": s3,
        "4": s4,
        "5": s5,
        "6": s6,
        "7": s7,
        // Add more categoryIds as needed
    };


    const categoriesData = {
        "subcategories": [
            { "SubcategoryID": "1", "CategoryID": "1", "Name": "نعال شرقي", "subcount": "1" },
            { "SubcategoryID": "2", "CategoryID": "1", "Name": "نعال مطرز", "subcount": "2" },
            { "SubcategoryID": "3", "CategoryID": "1", "Name": "نعال كاجوال", "subcount": "3" },
            { "SubcategoryID": "4", "CategoryID": "1", "Name": "نعال وطني", "subcount": "4" },
            { "SubcategoryID": "5", "CategoryID": "1", "Name": "نعال ترفيهي", "subcount": "5" },
            { "SubcategoryID": "6", "CategoryID": "1", "Name": "نعال ولادي", "subcount": "6" },
            { "SubcategoryID": "7", "CategoryID": "1", "Name": "الصنادل ", "subcount": "7" },
            { "SubcategoryID": "8", "CategoryID": "5", "Name": "المشالح", "subcount": "1" },
            { "SubcategoryID": "9", "CategoryID": "5", "Name": "السديري", "subcount": "2" },
            { "SubcategoryID": "10", "CategoryID": "5", "Name": "شماغ أحمر", "subcount": "3" },
            { "SubcategoryID": "11", "CategoryID": "5", "Name": "شماغ أبيض", "subcount": "4" },
            { "SubcategoryID": "12", "CategoryID": "5", "Name": "الغتر", "subcount": "5" },
            { "SubcategoryID": "13", "CategoryID": "5", "Name": "العقال", "subcount": "6" },
            { "SubcategoryID": "14", "CategoryID": "5", "Name": "الطواقي", "subcount": "7" },
            { "SubcategoryID": "15", "CategoryID": "5", "Name": "الشالات", "subcount": "8" },
            { "SubcategoryID": "16", "CategoryID": "6", "Name": "الأطقم", "subcount": "1" },
            { "SubcategoryID": "17", "CategoryID": "6", "Name": "ساعات", "subcount": "2" },
            { "SubcategoryID": "18", "CategoryID": "6", "Name": "أقلام", "subcount": "3" },
            { "SubcategoryID": "19", "CategoryID": "6", "Name": "كبكات", "subcount": "4" },
            { "SubcategoryID": "20", "CategoryID": "6", "Name": "مسابح", "subcount": "5" },
            { "SubcategoryID": "21", "CategoryID": "6", "Name": "شنط اليد", "subcount": "6" },
            { "SubcategoryID": "22", "CategoryID": "6", "Name": "حقائب سفر", "subcount": "7" },
            { "SubcategoryID": "23", "CategoryID": "7", "Name": "الجوارب", "subcount": "1" },
            { "SubcategoryID": "24", "CategoryID": "7", "Name": "المناشف", "subcount": "2" },
            { "SubcategoryID": "25", "CategoryID": "7", "Name": "أثواب النوم", "subcount": "3" },
            { "SubcategoryID": "26", "CategoryID": "7", "Name": "الملابس الداخلية", "subcount": "4" },
            { "SubcategoryID": "27", "CategoryID": "7", "Name": "الأقمشة", "subcount": "5" }
        ]
    };


    const filteredSubcategories = categoriesData.subcategories.filter(subcategory => subcategory.CategoryID === props.categoryId);




    useEffect(() => {
        setOpen(props.active);
    }, [props.active]);

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
        <>
            {/* <input className='w-100' /> */}
            < div className='d-flex flex-column justify-content-center align-items-center ' >



                <Button
                    onClick={() => {
                        setOpen(!open);

                        props.onClick(props.categoryId);
                    }}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className={`toggle-button w-sm-85 w-80 p-0 header-toggle-inverted ${props.active ? 'header-toggle-active' : ''}`}


                >
                    <div className='d-flex flex-row-reverse align-items-center me-3 position-relative'>
                        <div>
                            {!open &&
                                <Image src={categoryIcons[props.categoryId]} alt={props.text} width={30} height={30} />
                            }
                            {open &&
                                <Image src={categoryIconsShow[props.categoryId]} alt={props.text} width={30} height={30} />
                            }
                        </div>
                        <div className='category-head' style={{ fontWeight: "bold" }}>{props.text}</div>
                        {categoriesData.subcategories.some(subcategory => subcategory.CategoryID === props.categoryId) &&
                            <div className='position-absolute' style={{ left: '2.5%' }}>
                                {open &&
                                    <Image src={shown} alt='shown' />
                                }
                                {!open &&
                                    <Image src={collapsed} alt='collapsed' />
                                }
                            </div>
                        }
                    </div>
                </Button>

                {
                    categoriesData.subcategories.some(subcategory => subcategory.CategoryID === props.categoryId) &&
                    <Collapse in={open} >
                        <div style={{ width: '75%' }} >
                            <div className='mb-0 mt-2'>
                                {filteredSubcategories.map((subcategory, index) => (
                                    subcategory.CategoryID == props.categoryId &&
                                    <div key={subcategory.SubcategoryID}>
                                        <div className='control-menu' >

                                            <Link key={subcategory.SubcategoryID} href={"category/" + categories.CategoryID + "/subcategory/" + subcategory.SubcategoryID} as={`/category/${categories.CategoryID}/subcategory/${subcategory.SubcategoryID}`} style={{ textDecoration: 'none' }}>
                                                <UpSubcategory

                                                    name={subcategory.Name}
                                                    isFirst={index === 0}
                                                    isLast={index === filteredSubcategories.length - 1}

                                                /> </Link>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Collapse >
                }


            </div >





        </>
    )
}