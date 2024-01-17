"use client"
import './Cart.css'
import Image from 'next/image'
import product from '../../public/Images/cart/Rectangle 17536.svg'
import delet from '../../public/Images/cart/Icon material-delete-sweep.svg'
import mask from '../../public/Images/cart/كوبون الخصم.svg'
import aroww from '../../public//Images/cart/Icon ionic-ios-arrow-down.svg'

import './Cart.css'


export default function Cart() {
    function incrementValue() {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < 10) {
            value++;
            document.getElementById('number').value = value;
        }
    }
    function decrementValue() {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        if (value > 1) {
            value--;
            document.getElementById('number').value = value;
        }

    }
    return (
        <div className="cart">
            <div className='container'>
                <div className='order-detail'>

                    <div className='information-product'>
                        <h3 style={{ marginRight: '2%', textAlign: 'end', width: '93%' }}>تفاصيل الطلب</h3>
                        <div>
                            <div className='cart-imagepro'>
                                <div className='image-info'>
                                    <div className='image-cart'><Image src={product} alt='product' /> </div>
                                    <div style={{ textAlign: 'end' }}>
                                        <h4 style={{ marginTop: "10%" }}>اسم المنتج</h4>
                                        <h5 style={{ fontWeight: '600', marginTop: '11%' }}>اللون</h5>
                                        <h5 style={{ fontWeight: '600' }}>المقاس</h5>
                                    </div>
                                </div>
                                <div className='quantity-cart'>
                                    <div className='ccontrol-quantity'>
                                        <div className='button-cart'>
                                            <input type="button" onclick={() => decrementValue()} value="-" className='decrease' />
                                            <input type="text" name="quantity" value="1" max="10" size="1" id="number" />
                                            <input type="button" size="1" onclick={() => incrementValue()} value="+" className='increase' />

                                        </div>
                                        <div className='delete-cart'>
                                            <div className='delte-image'><Image src={delet} alt='delet' style={{ width: '80%' }} /></div>
                                            <p className='delet-par'>ازاله</p>
                                        </div>

                                    </div>
                                    <div className='price-cart'>
                                        <h5> 40.2 رس</h5>
                                        <h5 style={{ fontWeight: '500', paddingTop: '3%' }}>40.5 رس </h5>
                                        <div className='sep-cart'>/</div>
                                    </div>
                                </div>

                            </div>
                            <hr style={{ color: 'black', width: '90%', margin: 'auto' }}></hr>
                        </div>
                        <div className='total'>
                            <div className='price-total'>
                                <p>الإجمالي الفرعي(3 أصناف)</p>
                                <p style={{ marginRight: '15px', direction: 'rtl', fontWeight: '700' }}>3.5 رس</p>
                            </div>
                            <p style={{ color: '#D17A52', margin: '7%', marginTop: '0', marginRight: '0', fontWeight: '600' }}>هذه الأسعار تشمل الضريبة</p>
                        </div>
                    </div>
                    <div className='cobon'>
                        <div className='mask-cart'><Image src={mask} style={{ width: '100%', height: 'auto' }} alt='image' /></div>
                        <div className='input-cobon'>
                            <h1 style={{ textAlign: 'center', marginBottom: '5%' }}>كوبون الخصم</h1>
                            <div style={{ width: '70%', margin: 'auto' }}>  <input placeholder='أدخل كود الكوبون ...' type='text' /> </div>
                            <div className='confirm-purchase'> <button>تأكيد</button></div>
                        </div>
                    </div>
                </div>
                <div className='shiping'>
                    <div style={{ paddingTop: '2%' }}>
                        <div className='shiping-part1' >
                            <div className='chose-shipingadress' >
                                <input type="radio" id="radioButton" name="radioGroup" />
                                <h5 style={{ marginRight: '5px' }}>أشحن الطلب إلى عنواني</h5>
                            </div>
                            <h5 style={{ marginRight: '73px', textDecoration: 'underline', color: '#D17A52' }}>التعديل على العنوان</h5>
                        </div>
                        <div className='shiping-part1'>
                            <div className='chose-shipingadress' >
                                <input type="radio" />
                                <h5 style={{ marginRight: '5px' }}>  أشحن الطلب إلى عنوان صديق </h5>
                            </div>
                            <h5 style={{ marginRight: '40px', textDecoration: 'underline', color: '#D17A52' }}>أضف عنوان صديق جديد</h5>
                            <p style={{ marginRight: '3%' }}>3 شارع الملك الصالح ، حي الصحافةـ الرياض</p>
                        </div>
                        <div className='adress-record'>
                            <div style={{ display: 'flex', justifyContent: 'end', width: '45%' }}>
                                <nav>

                                    <label for="touch"><span>اختر من العناوين المسجلة</span><Image src={aroww} style={{ width: '20px', marginLeft: '2%' }} alt='image' /></label>
                                    <input type="checkbox" id="touch" />

                                    <ul class="slide">
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                    </ul>

                                </nav>
                            </div>
                            <h3 style={{ marginRight: '5%' }}>يصلك خلال 4 أيام عمل</h3>
                        </div>
                        <div className='notes' style={{
                            paddingTop: '3%', direction: 'rtl', marginRight: '2%', width: '90%', margin: 'auto'
                        }}>
                            <h3>قم بأضافة ملاحظة خاصة بك للمندوب</h3>
                            <div> <input type='text' /></div>
                            <div className='confirm'><button>اتمام الشراء</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}