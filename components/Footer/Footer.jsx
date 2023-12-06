import React from 'react'

import logofrada from './image/Frada logo.svg'
import snapchat from './IMAGE/Icon awesome-snapchat-ghost.svg'
import tiktok from './IMAGE/Icon simple-tiktok.svg'
import twitter from './IMAGE/Icon awesome-twitter.svg'
import insta from './IMAGE/Icon awesome-instagram.svg'
import facebook from './IMAGE/Icon awesome-facebook-f.svg'
import email from './IMAGE/Icon awesome-mail-bulk.svg'
import visa from './IMAGE/visa.svg'
import tamara from './IMAGE/تمارا.svg'
import mada from './IMAGE/مدي.svg'
import redbox from './IMAGE/ريد بوكس.svg'
import pay from './IMAGE/pay.svg'
import most from './IMAGE/moste card.svg'
import home from './IMAGE/home.svg'
export default function Footer() {
    return (
        <div>
            <div className='footer-frada' dir="rtl" lang="ar">
                <div className='container'>
                    <div className='footer-cont'>
                        <div className='footer-flex'>
                            <div className='footer-par1'>
                                <div className='map'><iframe width="95%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=elmokatam%20Cairo+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                                </div>

                            </div>
                            <div className='footer-par2' >
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
                            <div className='logo-footer'>
                                <div className='frada-log'><img src={logofrada} /></div>
                                <div className='socialdisk'> <img src={snapchat} className='social-media' />
                                    <img src={tiktok} className='social-media' />
                                    <img src={twitter} className='social-media' />
                                    <img src={insta} className='social-media' />
                                    <img src={facebook} className='social-media' /></div>

                            </div>
                        </div>

                        <div className='flex2-footer'>
                            <div className='flex2-part1'>
                                <h3>أشترك في النشرة البريدية</h3>
                                <div className='input-email'>
                                    <input placeholder='أدخل بريدك الإلكتروني   ' />
                                    <img src={email} />
                                </div>
                            </div>
                            <div className='pay'>
                                <div className='paypart1'>
                                    <img src={visa} />
                                    <img src={most} />
                                    <img src={tamara} />
                                    <img src={pay} />
                                </div>
                                <div className='paypart1'>
                                    <img src={home} />
                                    <img src={mada} />
                                    <img src={redbox} />
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
                                <img src={tiktok} />
                                <img src={twitter} />
                                <img src={insta} />
                                <img src={facebook} id='facebookkk' />
                            </div>

                        </div>
                        <div className='flex2-part1'>
                            <h3>أشترك في النشرة البريدية</h3>
                            <div className='input-email'>
                                <input placeholder='أدخل بريدك الإلكتروني   ' />
                                <img src={email} />
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

