import Image from 'next/image'
import styles from '../../../src/app/page.module.css'
import Cart from "../../../public/Images/Icons/3th/Cart.svg"
import Arrow from "../../../public/Images/Icons/3th/Arrow.svg"
export default function Bottom() {

    return (

        <nav className="navigation-bar flex-rows">
            <ul className="nav-list flex-rows">
                <li className="listed dropdown">
                    <p className="listed-desc">
                        مستلزمات الرجال
                    </p>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#">عرض الكل</a>
                        <a href="#">كبكات</a>
                        <a href="#">مسابح</a>
                        <a href="#">ساعات</a>
                        <a href="#">أقلام</a>
                        <a href="#">طواقي</a>
                    </div>
                    <Image src={Arrow} className='listed-svg' alt="Arrow" />
                </li>
                <li className="listed dropdown">
                    <p className="listed-desc">
                        الإكسسوارات
                    </p>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#">عرض الكل</a>
                        <a href="#">كبكات</a>
                        <a href="#">مسابح</a>
                        <a href="#">ساعات</a>
                        <a href="#">أقلام</a>
                        <a href="#">طواقي</a>
                    </div>
                    <Image src={Arrow} className='listed-svg' alt="Arrow" />

                </li>
                <li className="listed dropdown">

                    <p className="listed-desc">
                        الزي السعودي
                    </p>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#">عرض الكل</a>
                        <a href="#">أحذية كلاسيك</a>
                        <a href="#">أحذية شرقي</a>
                        <a href="#">أحذية كاجول</a>
                        <a href="#">أحذية طبية</a>
                    </div>
                    <Image src={Arrow} className='listed-svg' alt="Arrow" />




                </li>
                <li className="listed">العطور</li>

                <li className="listed">احذية سبور</li>
                <li className="listed">احذية كلاسيك</li>
                <li className="listed dropdown">

                    <p className="listed-desc">
                        النـعال
                    </p>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#">عرض الكل</a>
                        <a href="#">أحذية كلاسيك</a>
                        <a href="#">أحذية شرقي</a>
                        <a href="#">أحذية كاجول</a>
                        <a href="#">أحذية طبية</a>
                    </div>
                    <Image src={Arrow} className='listed-svg' alt="Arrow" />




                </li>
                <li className="listed">العروض والخصومات</li>
                <li className="listed">الرئيسية</li>
            </ul>
            <div className="cart font-colored bolder flex-rows">
                <p>ر.س </p>
                <p> 0.00 </p>
                <Image src={Cart} alt="Cart" />

                <div className="cart-circle">4</div>
            </div>
        </nav>
    )
}