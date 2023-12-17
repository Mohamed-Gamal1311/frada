"use client"

import Image from 'next/image'
import aplle from '../../public/Images/payment/pay.svg'
import mostcard from '../../public/Images/Payment/moste card.svg'
import mada from '../../public/Images/Payment/مدي.svg'
import './Payment.css'
export default function Payment() {
    return (
        <div className='pay-gate'>
            <div className='container'>
                <div className='gate-content'>
                    <div className='gate-box1'>
                        <div style={{ margin: '2%' }}>
                            <h4 style={{ marginBottom: '1.6%', color: '#D17A52' }}>تفاصيل الدفع</h4>
                            <div className='header-gate'><h4 style={{ width: '50%', color: '#332C32' }}>اختر طريقة الدفع المسجله</h4>
                                <h4 style={{ width: '50%', textAlign: 'end', textDecoration: 'underline', color: '#332C32' }}>اضافة وسيلة دفع جديده</h4>
                            </div>
                            <div style={{ marginTop: '1.6%' }}>
                                <div className='chose-gate'>
                                    <div><input type='radio' id='radio1' /></div>
                                    <div className='card-gate'>
                                        <div><Image src={mostcard} alt='most' /><span>بطاقة الائتمان</span></div>
                                    </div>
                                </div>
                                <div className='chose-gate'>
                                    <div><input type='radio' id='radio2' /></div>
                                    <div className='card-gate'><div><Image src={mada} alt='most' /><span>مدى</span></div></div>
                                </div>
                                <div className='chose-gate'>
                                    <div><input type='radio' id='radio3' /></div>
                                    <div className='card-gate'><div><Image src={aplle} alt='most' /><span>ابل بي</span></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='gate-box2'>
                        <div style={{ margin: '7%' }}>
                            <div className='detail-gate'>
                                <p>المجموع</p>
                                <p>0.00  رس</p>
                            </div>
                            <div className='detail-gate'>
                                <p>رسوم التوصيل</p>
                                <p>0.00  رس</p>
                            </div>
                            <div className='detail-gate'>
                                <p>رسوم الخدمه</p>
                                <p>0.00  رس</p>
                            </div>
                            <div className='detail-gate'>
                                <p>اجمالي المبلغ</p>
                                <p>0.00  رس</p>
                            </div>
                            <div className='detail-gate'>
                                <p>الاجمالي بعد الخصم</p>
                                <p>0.00  رس</p>
                            </div>
                            <div style={{ marginTop: '5%', display: 'flex', justifyContent: 'center' }}> <button>تنفيذ الطلب</button></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
