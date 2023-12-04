"use client"
import './ButtonsProduct.css'
import Image from 'next/image'
import heart from '../../../../../../public/Images/Icon ionic-ios-heart-empty.svg'
import cart from '../../../../../../public/Images/Icon material-add-shopping-cart.svg'
export default function ButtonsProduct() {
    return (
        <div className='buttons-content'>
            <div className="buttons">
                <button className='myhopy'><span>اضف الى امنياتي</span><span><Image width={20} height={20} src={heart} /></span></button>
                <button className="Btn">
                    <span className="leftContainer">

                        <span className="like">أضف إلى عربة الشراء</span>
                    </span>
                    <span className="likeCount">
                        <Image width={20} height={20} src={cart} />
                    </span>
                </button>
            </div>
        </div>
    )
}