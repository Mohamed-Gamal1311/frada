"use client"
import './InformationCustomer.css'
import Image from 'next/image'
import edit from '../../../public/Images/Customerifo/Group 37669.svg'
import goole from '../../../public//Images/Login/bmnm.png'
import apple from '../../../public//Images/Login/apple.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebook from '../../../public//Images/Login/facebook.png'
import tiktok from '../../../public//Images/Customerifo/Icon simple-tiktok.svg'
import instagram from '../../../public//Images/Customerifo/Icon awesome-instagram.svg'
import facebookkk from '../../../public//Images/Customerifo/Icon awesome-facebook-f.svg'
import twitter from '../../../public//Images/Customerifo/Icon awesome-twitter.svg'
import snap from '../../../public//Images/Customerifo/Icon awesome-snapchat-ghost.svg'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

export default function InformationCustomer() {
    return (
        <div className="InformationCustomer" dir="rtl" lang="ar">
            <div className="container">
                <div className="form-information">
                    <h2> مرحبا بك  <span>Customer-Name</span></h2>
                    <div className="form-content">
                        <form>



                            <div className="form1">
                                <div className="edit-ifo">
                                    <label>
                                        اسم المستخدم
                                    </label>
                                    <div className="input">
                                        <input type="text" />
                                        <div className="icon-edit">
                                            <Image src={edit} alt='edit' />
                                            <button type='submit'> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="edit-ifo">
                                    <label>
                                        تاريخ الميلاد
                                    </label>
                                    <div className="input " >
                                        <input className='date' type="date" />
                                        <div className="icon-edit">
                                            <Image src={edit} alt='edit' className='date-image' />
                                            <button type='submit' className='datesubmit'> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form1'>
                                <div className="edit-ifo">
                                    <label>
                                        الاسم الاول
                                    </label>
                                    <div className="input">
                                        <input type="text" />
                                        <div className="icon-edit">
                                            <Image src={edit} alt='edit' />
                                            <button type='submit'> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="edit-ifo">
                                    <label>
                                        الاسم الاخير
                                    </label>
                                    <div className="input">
                                        <input type="text" />
                                        <div className="icon-edit">
                                            <Image src={edit} alt='edit' />
                                            <button type='submit'> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='form1'>
                                <div className="edit-ifo">
                                    <label>
                                        البريد الالكتروني
                                    </label>
                                    <div className="input">
                                        <input type="email" />
                                        <div className="icon-edit">
                                            <Image src={edit} alt='edit' />
                                            <button type='submit'> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="edit-ifo">
                                    <label>
                                        كلمة السر
                                    </label>
                                    <div className="input">
                                        <input type="text" />
                                        <div className="icon-edit">
                                            <Image src={edit} alt='edit' />
                                            <button type='submit'> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='form1'>
                                <div className="edit-ifo">
                                    <label>
                                        الدوله
                                    </label>
                                    <div className="input">
                                        <input type="text" />
                                        <div className="icon-edit">
                                            <Image src={edit} alt='edit' />
                                            <button type='submit'> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="edit-ifo">
                                    <label>
                                        المدينه
                                    </label>
                                    <div className="input">
                                        <input type="text" />
                                        <div className="icon-edit">
                                            <Image src={edit} alt='edit' />
                                            <button type='submit'> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form1'>
                                <div className="edit-ifo">
                                    <label>
                                        العنوان الرئيسي
                                    </label>
                                    <div className="input">
                                        <input type="text" />
                                        <div className="icon-edit">
                                            <Image src={edit} alt='edit' />
                                            <button type='submit'> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="edit-ifo">
                                    <label>
                                        رقم الهاتف
                                    </label>
                                    <div className="input">
                                        <input type="text" />
                                        <div className="icon-edit">
                                            <Image src={edit} alt='edit' />
                                            <button type='submit'> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='customer-acount'>
                                <div className='adress-customer'>
                                    <label>ادخل الموقع على الخريطه</label>
                                    <div className='map-customer'>
                                        <iframe width="100%" height="120px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=elmokatam%20Cairo+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                        <div className="edit-adress">

                                            <div className="input">
                                                <input type="text" />
                                                <div className="icon-edit">
                                                    <Image src={edit} alt='edit' />
                                                    <button type='submit'> <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className='acounts'>
                                    <div className='acount-customer'>
                                        <div className='link-acount'>
                                            <Image src={goole} alt='google' />
                                            <p>ربط حسابك الان</p>
                                        </div>
                                        <div className='link-acount'>
                                            <Image src={apple} alt='google' />
                                            <p>ربط حسابك الان</p>
                                        </div>
                                        <div className='link-acount'>
                                            <Image src={facebook} alt='google' />
                                            <p>ربط حسابك الان</p>
                                        </div>
                                    </div>
                                    <div className='follow-our'>
                                        <p>تابعنا على مواقع التواصل الإحتماعي</p>
                                        <div className='sicial-follow'><Image src={snap} alt='snap' />

                                            <Image src={tiktok} alt='tiktok' />
                                            <Image src={twitter} alt='twitter' />
                                            <Image src={instagram} alt='instagram' />
                                            <Image src={facebookkk} alt='facebook' /></div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>

    )
}