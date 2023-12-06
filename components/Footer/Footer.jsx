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
import tamara from '../../public/Images/Footer/تمارا.svg'
import mada from '../../public/Images/Footer/مدي.svg'
import redbox from '../../public/Images/Footer/ريد بوكس.svg'
import pay from '../../public/Images/Footer/pay.svg'
import most from '../../public/Images/Footer/moste card.svg'
import home from '../../public/Images/Footer/home.svg'
export default function Footer() {
    return (
        <div>
            <div className='footer-frada' dir="rtl" lang="ar">
                <div className='container-footer'>
                    <div className='footer-cont'>
                        <div className='footer-flex'>
                            <div className='logo-footer'>
                                <div className='frada-log'><Image src={logofrada} style={{ width: '100%' }} /></div>


                            </div>
                            <div className='parentfooter-par2'>
                                <div className='footer-text'>
                                    <h4>تسوق منتجاتنا</h4>

                                    <div className='catoegry-footer'>
                                        <div className='name-cateogry'>
                                            <p>العروض والخصومات</p>
                                            <p className='p2' > العطور</p>
                                        </div>
                                        <div className='name-cateogry'>
                                            <p> النعال</p>
                                            <p className='p2'> الزي السعودي</p>
                                        </div>
                                        <div className='name-cateogry'>
                                            <p> احذيه كلاسيك</p>
                                            <p className='p2'> الاكسسوارات</p>
                                        </div>
                                        <div className='name-cateogry'>
                                            <p> احذيه سبور</p>
                                            <p className='p2'> مستلزمات الرجال</p>
                                        </div>
                                    </div>

                                </div>
                                <hr></hr>
                                <div className='footer-text'>
                                    <div className='title-footertext'><h4> تعرف علينا اكتر</h4>

                                    </div>

                                    <div className='catoegry-footer'>
                                        <div className='name-cateogry'>
                                            <p>من نحن  </p>
                                            <p className='p2' > الاستبدال والاسترجـاع</p>
                                        </div>
                                        <div className='name-cateogry'>
                                            <p> تواصل معنا</p>
                                            <p className='p2'> الشحن والتوصيل </p>
                                        </div>
                                        <div className='name-cateogry'>
                                            <p>  وظائف فرادا</p>
                                            <p className='p2'> الخصوصيه والامان</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className='footer-par1'>
                                <div className='map'><iframe width="95%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=elmokatam%20Cairo+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                                </div>

                            </div>
                        </div>

                        <div className='flex2-footer'>
                            <div className='flex2-part1'>
                                <h3>أشترك في النشرة البريدية</h3>
                                <div className='input-email'>
                                    <input placeholder='أدخل بريدك الإلكتروني   ' />
                                    <Image src={email} />
                                </div>
                            </div>

                            <div className='socialdisk' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '23%' }}>
                                <div className='content-social'> <Image src={snapchat} className='social-media' />
                                    <Image src={tiktok} className='social-media' />
                                    <Image src={twitter} className='social-media' />
                                    <Image src={insta} className='social-media' />
                                    <Image src={facebook} className='social-media' />
                                </div>
                            </div>
                            <div className='pay'>
                                <div className='paypart1'>
                                    <Image src={visa} />
                                    <Image src={most} />
                                    <Image src={tamara} />
                                    <Image src={pay} />
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
            <div className='footer-mobile' dir="rtl" lang="ar">
                <div className='container'>
                    <div className='footermo-par2' >
                        <div className='title-footer'>
                            <>تسوق المنتجات</>
                            <h6> الاشمغه</h6>
                            <h6>الغتر </h6>
                            <h6> الأحذية</h6>
                            <h6> المشالح</h6>
                            <h6> العطور</h6>
                        </div>
                        <div className='seprate-footer'></div>
                        <div className='title-footer'>
                            <>الإكسسوارات </>
                            <h6> كبكات </h6>
                            <h6>السبح </h6>
                            <h6> الساعات</h6>
                            <h6> الاقلام</h6>
                            <h6> الطواقي</h6>
                        </div>
                        <div className='seprate-footer'></div>
                        <div className='title-footer'>
                            <>تعرف علينا أكثر </>
                            <h6> تواصل معنا </h6>
                            <h6>من نحن </h6>

                        </div>
                    </div>
                    <div className='footer-par1'>
                        <div className='map'><iframe width="95%" height="220px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=elmokatam%20Cairo+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                        </div>

                    </div>
                    <div className='logo-saerchmo'>
                        <div className='logo-footer'>
                            <div className='frada-log'><img src={logofrada} /></div>
                            <div className='social-media'> <img src={snapchat} />
                                <Image src={tiktok} />
                                <Image src={twitter} />
                                <Image src={insta} />
                                <Image src={facebook} id='facebookkk' />
                            </div>

                        </div>
                        <div className='flex2-part1'>
                            <h3>أشترك في النشرة البريدية</h3>
                            <div className='input-email'>
                                <input placeholder='أدخل بريدك الإلكتروني   ' />
                                <Image src={email} />
                            </div>
                        </div>

                    </div>

                </div>
                <div className='footer-endmo'>
                    <div className='seprate-end'>

                    </div>

                </div>
                <h3 className='theend'>جميع الحقوق محفوظة لشركة فرادا 2023</h3>
            </div>
        </div>
    )
}

