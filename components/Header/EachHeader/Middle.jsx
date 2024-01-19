import Image from 'next/image'
import styles from '../../../src/app/page.module.css'
import MyAccount from "../../../public/Images/SVG Header Icons/My-account-icon.svg"
import Checkout from "../../../public/Images/SVG Header Icons/checkout_icon.svg"
import Help from "../../../public/Images/SVG Header Icons/customer_help_Icon.svg"
import MyWishes from "../../../public/Images/SVG Header Icons/My_Wishes_Button_icon.svg"
import Cart from "../../../public/Images/SVG Header Icons/shop_now_icon.svg"
import Exporters from "../../../public/Images/SVG Header Icons/Icon.svg"
import Logo from "../../../public/Images/Icons/2nd Bar/Frada logo.svg"
import Search from "../../../public/Images/Icons/2nd Bar/Union 1.svg"
import Link from 'next/link'

export default function Middle() {



    return (
        <header className="header-nav flex-rows">
            <div className="logo">
                <Image src={Logo} alt="Logo" />
            </div>
            <form className="search-bar" action="">
                <input type="text" placeholder="ابحث عن منتج..." name="search2" />
                <button type="submit"><i className="fa fa-search"><Image src={Search} alt="Search" /></i></button>
            </form>
            <div className="option-list flex-rows">
                <div className="option  last-option">
                    <Link href="/dashboard" style={{ textDecoration: 'none', color: 'unset' }}>
                        <Image src={MyAccount} alt="My Account" className='option-img' />
                        <p className="option-desc">حسابي</p>
                    </Link>
                </div>
                <div className="option">
                    <Image src={Help} alt="Help" className='option-img' />


                    <p className="option-desc">مركز المساعدة</p>
                </div>
                <div className="option">
                    <Image src={MyWishes} alt="Wishes" className='option-img' />


                    <p className="option-desc">أمنياتي</p>
                </div>
                <div className="option">
                    <Image src={Cart} alt="Complete Transactions" className='option-img' />


                    <p className="option-desc">عربة التسوق</p>
                </div>
                <div className="option">
                    <Image src={Exporters} alt="Exporters" className='option-img' />


                    <p className="option-desc">تجار وموزعين</p>
                </div>
                <div className="option">
                    <Image src={Checkout} alt="Checkout" className='option-img' />


                    <p className="option-desc">متابعة الشراء</p>
                </div>
            </div>
            {/* <div className="flex-rows dropdown lang-option ">

                <svg xmlns="http://www.w3.org/2000/svg" width="25.263" height="25.263" viewBox="0 0 32.263 32.263">
                    <path id="Icon_material-language" data-name="Icon material-language"
                        d="M19.115,3A16.131,16.131,0,1,0,35.263,19.131,16.124,16.124,0,0,0,19.115,3Zm11.179,9.679H25.536A25.244,25.244,0,0,0,23.31,6.936,12.953,12.953,0,0,1,30.294,12.679ZM19.131,6.291a22.724,22.724,0,0,1,3.081,6.388H16.05A22.724,22.724,0,0,1,19.131,6.291ZM6.646,22.358a12.619,12.619,0,0,1,0-6.453H12.1a26.642,26.642,0,0,0-.226,3.226,26.642,26.642,0,0,0,.226,3.226Zm1.323,3.226h4.759a25.244,25.244,0,0,0,2.226,5.743A12.884,12.884,0,0,1,7.968,25.584Zm4.759-12.905H7.968a12.884,12.884,0,0,1,6.985-5.743A25.244,25.244,0,0,0,12.727,12.679Zm6.4,19.293a22.724,22.724,0,0,1-3.081-6.388h6.162A22.724,22.724,0,0,1,19.131,31.972Zm3.775-9.614h-7.55a23.734,23.734,0,0,1-.258-3.226,23.528,23.528,0,0,1,.258-3.226h7.55a23.528,23.528,0,0,1,.258,3.226A23.734,23.734,0,0,1,22.906,22.358Zm.4,8.969a25.244,25.244,0,0,0,2.226-5.743h4.759a12.953,12.953,0,0,1-6.985,5.743Zm2.855-8.969a26.64,26.64,0,0,0,.226-3.226,26.641,26.641,0,0,0-.226-3.226h5.452a12.619,12.619,0,0,1,0,6.453Z"
                        transform="translate(-3 -3)" fill="#d17a52" />
                </svg>

                <p className="lang-desc">العربية</p>
                <div className="dropdown-content">
                    <a href="#">English</a>

                </div>


                <svg className="option-svg" xmlns="http://www.w3.org/2000/svg" width="16.128" height="9.222"
                    viewBox="0 0 16.128 9.222">
                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down"
                        d="M14.255,17.688l6.1-6.1a1.148,1.148,0,0,1,1.628,0,1.162,1.162,0,0,1,0,1.633l-6.91,6.915a1.15,1.15,0,0,1-1.589.034L6.524,13.222A1.153,1.153,0,0,1,8.151,11.59Z"
                        transform="translate(-6.188 -11.246)" fill="#332c32" />
                </svg>


            </div> */}
        </header>
    )
}
