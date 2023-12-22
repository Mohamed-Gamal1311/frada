"use client"
import Image from 'next/image'
import plus from '../../../../public/Images/Dahboard/+.svg'
import logo from '../../../../public/Images/Dahboard/Group 67843.svg'
import logo2 from '../../../../public/Images/Dahboard/Mask Group 1.svg'
import './Paymentmethodmo.css'



import '../../../CustomerDashboard/CustomerForms/PaymentMethod/PaymentMethod.css'
export default function Paymentmethodmo() {
    return (
        <section className='Paymentmethodmo'>
            <div className="PaymentMethod" dir='rtl' lang='ar'>
                <div className="payment-content">
                    <div className='hrader-payment' style={{ margin: '4%', marginBottom: '0', marginTop: '1%' }} >

                        <div>

                            <h2 style={{ color: '#D17A52', marginTop: '1em' }}> مرحبا بك   </h2>
                            <hr style={{ backgroundColor: '#d17a52', height: '1px', border: 'none', width: '20%' }}></hr>

                        </div>
                    </div>
                    <h1 style={{ color: '#D17A52', fontSize: '22px', textAlign: 'center' }} className='big-title'>الملف الشحصي</h1>
                    <div className="payment-cards">
                        <div className="card-content">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}><Image src={plus} alt='plus' /></div>
                        </div>
                        <div className="card-content background-card">
                            <div style={{ display: 'flex' }}>
                                <Image src={logo} alt='plus' style={{ margin: '5%' }} />
                                <h2 style={{ margin: '4%', marginRight: '15%' }}>1234          ****             1234            *****</h2>
                            </div>

                        </div>

                        <div className="card-content card-diff">
                            <div className='card-detail'>
                                <div style={{ marginBottom: '9%' }}>
                                    <label className='label-payment' style={{ textAlign: 'end' }}>Card Number</label>
                                    <div className='cart-numberInput'><input type="text" /></div>
                                </div>
                                <div className='parent-payme' style={{ display: 'flex', direction: 'ltr', justifyContent: 'space-between' }}>
                                    <div style={{ width: '65%' }} className='determain-date'>
                                        <label className='label-payment'>Term of attribution </label>
                                        <div className="date-card">
                                            <input type="text" className='date-input' />
                                            <h3 style={{ marginLeft: '8%' }}>/</h3>
                                            <input type="text" className='date-input' style={{ marginLeft: '8%' }} />

                                        </div>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <label>CVV</label>
                                        <input type="text" className="cvv" />
                                    </div>
                                </div>
                                <div className='confirm-payment'><button>ADD</button></div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}