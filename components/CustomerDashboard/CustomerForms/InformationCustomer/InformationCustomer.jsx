"useclient"
import Image from 'next/image'
import edit from '../../../../public/Images/Customerifo/Group 37669.svg'
import appl from '../../../../public/Images/Dahboard/apple.svg'
import google from '../../../../public/Images/Dahboard/bmnm.svg'
import facebook from '../../../../public/Images/Dahboard/facebook.svg'
import tiktok from '../../../../public/Images/Dahboard/Icon simple-tiktok.svg'
import twitter from '../../../../public/Images/Dahboard/Icon awesome-twitter.svg'
import snap from '../../../../public/Images/Dahboard/Icon awesome-snapchat-ghost.svg'
import facebookkk from '../../../../public/Images/Dahboard/Icon awesome-facebook-f.svg'
import insta from '../../../../public/Images/Dahboard/Icon awesome-instagram.svg'
import './InformationCustomer.css'
export default function InformationCustomer() {
    return (
        <div>
            <form className="form-content-dashboard" >
                <div className='form-header'>

                    <div>
                        <h2 > مرحبا بك   </h2>
                        <hr style={{ backgroundColor: '#d17a52', height: '1px', border: 'none' }}></hr>

                    </div>
                </div>
                <div className='form-container'>
                    <div className='customer-form'>
                        <div className='customer-info'>

                            <label>
                                تاريخ الميلاد
                            </label>
                            <div className="input-dashboard">
                                <input type="date" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>
                        <div className='customer-info'>

                            <label>
                                اسم المستخدم
                            </label>

                            <div className="input-dashboard">
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                                <input type="text" />

                            </div>

                        </div>


                    </div>
                    <div className='customer-form'>

                        <div className='customer-info'>

                            <label>
                                الاسم الاخير
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>

                        <div className='customer-info'>

                            <label>
                                الاسم الاول
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='customer-form'>

                        <div className='customer-info'>

                            <label>
                                كلمة السر
                            </label>
                            <div className="input-dashboard">
                                <input type="password" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>

                        <div className='customer-info'>

                            <label>
                                البريد الالكتروني
                            </label>
                            <div className="input-dashboard">
                                <input type="email" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='customer-form'>

                        <div className='customer-info'>

                            <label>
                                المدينه
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>

                        <div className='customer-info'>

                            <label>
                                الدوله
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='customer-form'>

                        <div className='customer-info'>

                            <label>
                                رقم الهاتف
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>
                        <div className='customer-info'>

                            <label>
                                العنوان الرئيسي
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='friend-info'>

                        <div className='adress-friend'>
                            <label>ادخل الموقع على الخريطه</label>
                            <div className='map-friend'>
                                <iframe height="81px" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=elmokatam%20Cairo+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>


                            </div>

                        </div>

                        <div className='link-customer'>
                            <div className='link-customer-cont' >
                                <div className='link-acount-comp'>
                                    <div>
                                        <div className='link-acount'>

                                            <div><Image src={google} alt='ggg' /> </div>
                                            <p>اربط حسابك الان</p>
                                        </div>
                                        <div className='link-acount'>
                                            <div><Image src={facebook} alt='ggg' /> </div>
                                            <p>اربط حسابك الان</p>
                                        </div>
                                        <div className='link-acount'>
                                            <div><Image src={appl} alt='ggg' /> </div>
                                            <p>اربط حسابك الان</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='contactwith-us'>
                                    <p>تابعنا على مواقع التواصل الإحتماعي</p>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image src={tiktok} alt='edit' />
                                        <Image src={snap} alt='edit' />
                                        <Image src={twitter} alt='edit' />
                                        <Image src={facebookkk} alt='edit' />
                                        <Image src={insta} alt='edit' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>


        </div>
    )
}