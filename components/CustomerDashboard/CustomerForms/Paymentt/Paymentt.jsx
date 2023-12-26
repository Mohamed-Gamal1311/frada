import mada from '../../../../public//Images/Dahboard/mada.svg'
import Image from 'next/image'
import del from '../../../../public//Images/Dahboard/delet.svg'
import add from '../../../../public//Images/Dahboard/Group 67899.svg'
import visa from '../../../../public/Images/Dahboard/visa.svg'
import addmo from '../../../../public//Images/Dahboard/+أضف وسيلة دفع.svg'
import './Paymentt.css'
export default function Paymentt() {

    return (
        <div className="paymentt" style={{ marginTop: '5%' }}>
            <h2 style={{ color: '#D17A52', textAlign: 'end', marginBottom: '2%' }}>مرحبا بك</h2>
            <div className="payment-content">
                <h2 style={{ color: '#D17A52', textAlign: 'center', marginBottom: '3%' }}>وسائل الدفع</h2>
                <div className="box1" >
                    <div className="add-method">
                        <div className='add-image'>

                            <div className='add'><Image src={add} alt='add' /></div>
                            <div className='addmo' >  <Image src={addmo} alt='a' /></div>
                        </div>

                    </div>
                    <div className="cardmethod-information">
                        <div className='shadow-section' style={{ boxShadow: '5px 5px 30px #D17A5247', marginBottom: '3%', borderRadius: '5px', width: '80% ' }}>
                            <div className='card-compponet-method'>
                                <div className='imagecard-detail'>
                                    <div style={{ marginLeft: '7%' }}>
                                        <h6>
                                            CardName
                                        </h6>
                                        <h6>
                                            CardNumber
                                        </h6>
                                        <h6>
                                            Date
                                        </h6>
                                    </div>
                                    <div className='image-card'>
                                        <Image src={visa} alt='mada' />

                                    </div>
                                </div>
                                <div className='delete-card'>  <button>إزالة  <Image src={del} alt='image' /></button></div>
                            </div>
                        </div>
                        <div className='shadow-section' style={{ boxShadow: '5px 5px 30px #D17A5247', borderRadius: '5px', width: '80%' }}>
                            <div className='card-compponet-method'>
                                <div className='imagecard-detail'>
                                    <div style={{ marginLeft: '7%' }}>
                                        <h6>
                                            CardName
                                        </h6>
                                        <h6>
                                            CardNumber
                                        </h6>
                                        <h6>
                                            Date
                                        </h6>
                                    </div>
                                    <div className='image-card'>
                                        <Image src={visa} alt='mada' />
                                    </div>
                                </div>
                                <div className='delete-card'>  <button>إزالة  <Image src={del} alt='image' /></button></div>
                            </div>
                        </div>
                    </div>






                </div>
                <div className='box2' style={{ marginTop: '4%' }}>
                    <h2 style={{ color: '#D17A52', textAlign: 'end', marginBottom: '1%' }}>جميع معاملاتي</h2>
                    <div className='box2-content' style={{ boxShadow: '5px 5px 30px #D17A5247' }}>
                        <h4 style={{ textAlign: 'center', marginTop: '2%', fontSize: '15px' }}>لا توجد سجلات معاملات حتى الآن</h4>

                    </div>
                </div>
            </div>
        </div>
    )
}