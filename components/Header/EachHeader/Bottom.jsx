import Image from 'next/image'
import styles from '../../../src/app/page.module.css'
import Cart from "../../../public/Images/Icons/3th/Cart.svg"
import Arrow from "../../../public/Images/Icons/3th/Arrow.svg"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Bottom() {


    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const route = usePathname();
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://fradaksa.com/api/categories');
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

        <nav className="navigation-bar flex-rows">

            <ul className="nav-list flex-rows flex-row-reverse">
                <li className="listed">الرئيسية</li>
                {/* <li className="listed">العروض والخصومات</li> */}

                {categories.map((category) => (
                    <li key={category.CategoryID} className="listed dropdown">
                        <Link href={"category/" + category.CategoryID} as={`/category/${category.CategoryID}`} className="listed-desc" style={{ textDecoration: 'none', color: 'unset' }} >{category.Name}</Link>
                        {category.subcategories.length > 0 && (
                            <div className="dropdown-content">
                                <Link href={"category/" + category.CategoryID} as={`/category/${category.CategoryID}`} >عرض الكل</Link>
                                {category.subcategories.map((subcategory) => (
                                    <Link key={subcategory.SubcategoryID} href={"category/" + category.CategoryID + "/subcategory/" + subcategory.SubcategoryID} as={`/category/${category.CategoryID}/subcategory/${subcategory.SubcategoryID}`} >
                                        {subcategory.Name}
                                    </Link>
                                ))}
                            </div>

                        )}


                        {category.subcategories.length > 0 && (
                            <Image src={Arrow} className='listed-svg' alt="Arrow" />)
                        }
                    </li>
                ))}

            </ul>
            <div className="cart font-colored bolder flex-rows">
                <p>ر.س </p>
                <p> 0.00 </p>
                <Image src={Cart} alt="Cart" />

                <div className="cart-circle">4</div>
            </div>
        </nav >
    )
}