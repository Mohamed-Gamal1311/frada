"use client"

import Image from 'next/image'
import './Footer.css'
import logofrada from '../../public/Images/Footer/Frada logo.svg'
import snapchat from '../../public/Images/Footer/Icon awesome-snapchat-ghost.svg'
import tiktok from '../../public/Images/Footer/Icon simple-tiktok.svg'
import twitter from '../../public/Images/Footer/Icon awesome-twitter.svg'
import insta from '../../public/Images/Footer/Icon awesome-instagram.svg'
import facebook from '../../public/Images/Footer/Icon awesome-facebook-f.svg'
import email from '../../public/Images/Footer/Icon awesome-mail-bulk.svg'
import visa from '../../public/Images/Footer/visa.svg'

import mada from '../../public/Images/Footer/مدي.svg'

import pay from '../../public/Images/Footer/pay.svg'
import most from '../../public/Images/Footer/moste card.svg'

export default function Footer() {
    return (
        <div>
            <div className='footer-frada' dir="rtl" lang="ar">
                <div className='container-footer'>
                    <div className='footer-cont'>
                        <div className='footer-flex'>
                            <div className='logo-footer'>
                                <div className='frada-log'><Image src={logofrada} style={{ width: '75%', marginRight: '15px', fill: 'white' }} alt='logofrada' priority="auto" /></div>


                            </div>
                            <div className='parentfooter-par2'>
                                <div className='footer-text'>
                                    <h4>تسوق منتجاتنا</h4>

                                    <div className='catoegry-footer'>
                                        <div className='name-cateogry'>
                                            <p>العروض والخصومات</p>
                                            <p className='p2' > العطــــــــــــــــــــــور</p>
                                        </div>
                                        <div className='name-cateogry'>
                                            <p> النعــــــــــــــــــــــــال</p>
                                            <p className='p2'> الــــــزي السعــــودي </p>
                                        </div>
                                        <div className='name-cateogry'>
                                            <p> أحـــــذية كــلاسيـــــك </p>
                                            <p className='p2'> الإكسســــــــــــوارات</p>
                                        </div>
                                        <div className='name-cateogry'>
                                            <p>  أحـــــذية سبــــــــــــور</p>
                                            <p className='p2'>  مستلزمــــــات الرجال</p>
                                        </div>
                                    </div>

                                </div>
                                <div>    <hr></hr> </div>
                                <div className='footer-text'>
                                    <div className='title-footertext'><h4 className='know'> تعرف علينا اكتر</h4>

                                    </div>

                                    <div className='catoegry-footer'>
                                        <div className='name-cateogry'>
                                            <p> من نحــــــــــــــن  </p>
                                            <p className='p2' > سياسة الاستبدال والاسترجـاع </p>
                                        </div>
                                        <div className='name-cateogry'>
                                            <p> تواصل معنـــــــا </p>
                                            <p className='p2'>  سياسة الشحن والتوصيـــــــل </p>
                                        </div>
                                        <div className='name-cateogry'>
                                            <p>  وظائف فرادا</p>
                                            <p className='p2'>  سياسة الخصوصية والأمــــان</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className='footer-par1'>
                                <div className='map'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14485.688365750524!2d46.6356799!3d24.815235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee5dad86c258d%3A0xd870f6653aa0238!2z2YHYsdin2K_Ypw!5e0!3m2!1sar!2seg!4v1703029098092!5m2!1sar!2seg" style={{ width: '85%', height: '250px' }} ></iframe>

                                </div>

                            </div>
                        </div>

                        <div className='flex2-footer'>
                            <div className='flex2-part1'>
                                <h3>أشترك في النشرة البريدية</h3>
                                <div className='input-email'>
                                    <input placeholder='أدخل بريدك الإلكتروني لتلقي أحدث المستجدات' />
                                    <Image src={email} alt='email' />
                                </div>
                            </div>

                            <div className='socialdisk' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '23%' }}>
                                <div className='content-social'> <Image src={snapchat} className='social-media' alt='snapchat' />
                                    <Image src={tiktok} className='social-media' alt='tiktok' />
                                    <Image src={twitter} className='social-media' alt='twitter' />
                                    <Image src={insta} className='social-media' alt='insta' />
                                    <Image src={facebook} className='social-media' alt='facebook' />
                                </div>
                            </div>
                            <div className='pay'>
                                <div className='paypart1'>
                                    <Image src={visa} alt='visa' />
                                    <Image src={most} alt='most' />
                                    <Image src={mada} alt='mada' />
                                    <Image src={pay} alt='pay' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='end-footer'>
                    <div className='seprate-end'>

                    </div>
                    <h3>جميع الحقوق محفوظة لشركة فرادا 2023</h3>
                </div>

            </div>

        </div>
    )
}

