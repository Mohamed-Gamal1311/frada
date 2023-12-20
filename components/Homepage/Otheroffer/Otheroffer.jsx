"use client"

import Image from 'next/image'
import part1 from '../../../public/Images/Homepage/OtherOffers/sa-2.jpg'
import part2 from '../../../public/Images/Homepage/OtherOffers/sa-1.jpg'
import './Otheroffer.css'

export default function Otheroffer() {
    return (
        <div className="Otheroffer">
            <div className='container'>
                <div className='Otheroffer-content'>
                    <div className='Otheroffer-cards'>
                        <div className='Otheroffer-part1' style={{ position: 'relative' }} >

                            <div className='Otheroffer-responsive'>


                                <div className='mmmmm' style={{ marginTop: '1%', width: '100%', position: 'relative' }}>
                                    <h3>الاكسسوارات الرجالية</h3>
                                    <Image src={part1} alt='image' />
                                    {/* <div className='bottom'></div>
                                    <button>تسوق الان</button> */}
                                </div>

                                <div className='orange-block blockoranng1'> <button className='button11'>تسوق الآن</button></div>

                            </div>
                        </div>
                        <div className='Otheroffer-part1' style={{ position: 'relative' }} >

                            <div className='Otheroffer-responsive margin-top' style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>
                                <div style={{ marginTop: '1%', width: '100%', position: 'relative' }}>
                                    <h3 style={{ marginBottom: '1%', width: '100%' }}>الزي السعودي</h3>
                                    <Image src={part2} alt='image' style={{ height: 'auto' }} />
                                    {/* <div className='bottom'></div>
                                    <button>تسوق الان</button> */}
                                </div>
                                <div className=' blockoranng2  orange-block'>  <button className='button22' style={{ fontFamily: '' }}>تسوق الآن</button></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}