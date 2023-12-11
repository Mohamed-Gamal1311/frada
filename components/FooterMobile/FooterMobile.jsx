"use client"

import Image from 'next/image'

import logofrada from '../../public/Images/Footer/Frada logo.svg'
import snapchat from '../../public/Images/Footer/Icon awesome-snapchat-ghost.svg'
import tiktok from '../../public/Images/Footer/Icon simple-tiktok.svg'
import twitter from '../../public/Images/Footer/Icon awesome-twitter.svg'
import insta from '../../public/Images/Footer/Icon awesome-instagram.svg'
import facebook from '../../public/Images/Footer/Icon awesome-facebook-f.svg'
import email from '../../public/Images/Footer/Icon awesome-mail-bulk.svg'
import visa from '../../public/Images/Footer/visa.svg'
import tamara from '../../public/Images/Footer/تمارا.svg'
import mada from '../../public/Images/Footer/مدي.svg'
import redbox from '../../public/Images/Footer/ريد بوكس.svg'
import pay from '../../public/Images/Footer/pay.svg'
import most from '../../public/Images/Footer/moste card.svg'
import home from '../../public/Images/Footer/home.svg'

import './FooterMobile.css'


export default function FooterMobile() {
    return (
        <div className="Foooter-mobile" dir='rtl' lang='ar'>
            <div className="box1">
                <div className="box1-content">
                    <div className='footer-textmobile'>
                        <h4>تسوق منتجاتنا</h4>

                        <div className='catoegry-footer'>
                            <div className='name-cateogry'>
                                <p> العروض والخصومات</p>
                                <p > العطــــــــــــــــــــــور</p>
                            </div>
                            <div className='name-cateogry'>
                                <p> النعــــــــــــــــــــــــال</p>
                                <p > الــــــزي السعــــودي </p>
                            </div>
                            <div className='name-cateogry'>
                                <p >  أحـــــذية كــلاسيـــــك</p>
                                <p > الإكسســــــــــــوارات</p>
                            </div>
                            <div className='name-cateogry'>
                                <p>  أحـــــذية سبــــــــــــور</p>
                                <p >  مستلزمــــــات الرجال</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <hr></hr>

            <div className="box1">
                <div className="box1-content">
                    <div className='footer-textmobile'>
                        <h4> تعرف علينا اكتر</h4>

                        <div className='catoegry-footer'>
                            <div className='name-cateogry'>
                                <p> من نحــــــــــــــن</p>
                                <p > سياسة الاستبدال والاسترجـاع</p>
                            </div>
                            <div className='name-cateogry'>
                                <p> تواصل معنـــــــا</p>
                                <p >  سياسة الشحن والتوصيـــــــل</p>
                            </div>
                            <div className='name-cateogry'>
                                <p>  وظائف فــــــرادا</p>
                                <p > سياسة الخصوصية والأمــــان</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <hr></hr>

            <div className='pay-mobile'>
                <div className='paypart1-mobile'>
                    <Image src={visa} alt='visa' />
                    <Image src={most} alt='most' />
                    <Image src={mada} alt='most' />
                    <Image src={pay} alt='pay' />
                </div>

            </div>
            <div>
                <div className='flex2-part1mobile' style={{ paddingTop: '3%' }}>
                    <h4>أشترك في النشرة البريدية</h4>
                    <div className='input-emailmobile'>
                        <input placeholder='أدخل بريدك الإلكتروني لتلقي أحدث المستجدات' />
                        <Image src={email} alt='email' />
                    </div>
                </div>
            </div>

            <div className='map-mobile'>
                <div className='map'><iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=elmokatam%20Cairo+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                </div>

            </div>
            <hr></hr>
            <div className='logo-footer'>
                <div className='frada-log'><Image src={logofrada} alt='logo' /></div>

                <div className='content-social'> <Image src={snapchat} className='social-media' />
                    <Image src={tiktok} className='social-media' alt='tiktok' />
                    <Image src={twitter} className='social-media' alt='twitter' />
                    <Image src={insta} className='social-media' alt='inst' />
                    <Image src={facebook} className='social-media' alt='facebook' />
                </div>
            </div>
            <hr></hr>
            <div className='end-footermobile'>
                <p>جميع الحقوق محفوظة لفرادا 2023</p>
            </div>

        </div>
    )
}