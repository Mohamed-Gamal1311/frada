"use client"
import './Signin.css'
import Image from 'next/image'
import image from '../../../public/Images/Login/0V5A3401.png'
import apple from '../../../public/Images/Login/apple.png'
import facebook from '../../../public/Images/Login/facebook.png'
import google from '../../../public/Images/Login/bmnm.png'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Signinpage() {

    // let [name,setName]=useState();

    // console.log(name);


    async function setDataUSer() {
        let x = await axios.post(`https://back.fradaksa.net/api/auth/login?Email=kareem@gmail.com&password=123456`);

        console.log("Ahmed");
    }



    useEffect(() => {
        setDataUSer()
        console.log("Ahmed")
    }, [])


    return (
        <div className="Login-page" dir='rtl' lang='en'>
            <div className="login-components">
                <div className="Image-login">
                    <Image src={image} alt='welcome' />
                </div>
                <div className='form-content'>
                    <form className='form-parent'>
                        <div>
                            <h2>  تسجيل الدخول مع فرادا  </h2>

                            <div className='image-iconlogin'>
                                <div className='apple'><Image src={apple} alt='aplle' /></div>
                                <div className='facebook'><Image src={facebook} alt='facebook' /></div>

                                <div className='google'>
                                    <p>سجل باستخدام جوجل</p>
                                    <Image src={google} alt='google' /></div>
                            </div>
                            <p className='or'>-او-</p>
                            <div className='form-input'>

                                <div className='input-content'>
                                    <label>البريد الإلكتروني </label>
                                    <input type='email' />
                                </div>
                                <div className='input-content'>
                                    <label> كلمة السر </label>
                                    <input type='password' />
                                </div>

                                {/* <div className='security'>
                                    <input type='checkbox' style={{ marginLeft: '1%' }} />
                                    <p>
                                        عند قيامي بانشاء حساب فأنا اوافق على <span>سياسة الخصوصية</span>

                                        <br></br><span>شروط الخدمة</span><span className='and'>   و   </span> <span>تلقي الأخبار والإشعارات</span>
                                    </p>
                                </div> */}
                                <div className='submit'>
                                    <button  > تسجيل الدخول</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}