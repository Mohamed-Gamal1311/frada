"use client"
import Image from 'next/image';
import zxcvbn from 'zxcvbn';
import image from '../../../public/Images/Login/0V5A3401.png';
import apple from '../../../public/Images/Login/apple.png';
import facebook from '../../../public/Images/Login/facebook.png';
import google from '../../../public/Images/Login/bmnm.png';
import './Signup.css';
import { useState } from 'react';

export default function Signuppage() {
    const [password, setPassword] = useState('');
    const passwordStrength = zxcvbn(password);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const getPasswordStrengthColor = () => {
        const strength = passwordStrength.score;
        if (strength === 0) {
            return 'red'; // ضعيفة
        } else if (strength === 1) {
            return 'orange'; // ضعيفة / متوسطة
        } else if (strength === 2) {
            return 'yellow'; // متوسطة
        } else if (strength === 3) {
            return 'lightgreen'; // قوية / متوسطة
        } else {
            return 'green'; // قوية
        }
    };

    const hrStyle = {
        backgroundColor: getPasswordStrengthColor(),
    };

    return (
        <div className="Login-page" dir='rtl' lang='en'>
            <div className="login-components">
                <div className="Image-login">
                    <Image src={image} alt='welcome' />
                </div>
                <div className='form-content'>
                    <form>
                        <div>
                            <h2>سجل حساب جديد مع فرادا</h2>
                            <p className='have-acount' style={{ marginBottom: '2% !imporant' }}>بالفعل لدي حساب <span>تسجيل الدخول</span></p>
                            <div className='image-iconlogin'>
                                <div className='apple'><Image src={apple} alt='aplle' /></div>
                                <div className='facebook'><Image src={facebook} alt='facebook' /></div>

                                <div className='google'>
                                    <p>سجل باستخدام جوجل</p>
                                    <Image src={google} alt='google' />
                                </div>
                            </div>
                            <p className='or'>-او-</p>
                            <div className='form-input'>
                                <div className='input-content'>
                                    <label>الاسم بالكامل</label>
                                    <input type='text' />
                                </div>
                                <div className='input-content'>
                                    <label>البريد الإلكتروني </label>
                                    <input type='email' />
                                </div>
                                <div className='input-content'>
                                    <label> كلمة السر </label>
                                    <input type='password' onChange={handlePasswordChange} />
                                </div>
                                <div className='strong-password'>
                                    <p> كلمة المرور قوية  </p>
                                    <div className='measure-pass'>
                                        <div className='strength' style={hrStyle}></div>
                                        <div className='strength' style={hrStyle}></div>
                                        <div className='strength' style={hrStyle}></div>
                                        <div className='strength' style={hrStyle}></div>
                                    </div>
                                </div>
                                <div className='security'>
                                    <input type='checkbox' style={{ marginLeft: '1%', marginBottom: '6%' }} />
                                    <p className='para-security'>
                                        عند قيامي بانشاء حساب فأنا اوافق على <span>سياسة الخصوصية</span>

                                        <br></br><span>شروط الخدمة</span><span className='and'>   و   </span> <span>تلقي الأخبار والإشعارات</span>
                                    </p>
                                </div>
                                <div className='submit'>
                                    <button>أنشى الحساب</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}