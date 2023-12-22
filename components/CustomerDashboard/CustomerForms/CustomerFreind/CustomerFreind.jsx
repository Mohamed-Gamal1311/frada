"useclient"
import Image from 'next/image'
import edit from '../../../../public/Images/Customerifo/Group 37669.svg'
import '../InformationCustomer/InformationCustomer.css'
import './CustomerFreind.css'

export default function CustomerFreind() {
    return (
        <div>
            <form className="CustomerFreind" >
                <div className='form-header header-customerfriend'>

                    <div>
                        <h2 > مرحبا بك   </h2>
                        <hr style={{ backgroundColor: '#d17a52', height: '1px', border: 'none' }}></hr>

                    </div>
                </div>
                <div className='form-content container-shadow'>
                    <div className='customer-form'>
                        <div className='customer-info'>

                            <label>
                                رقم الهاتف
                            </label>
                            <div className="input-dashboard">
                                <input type="number" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>
                        <div className='customer-info'>

                            <label>
                                اسم الصديق
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
                                المدينه
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>
                        {/* <div className='customer-info'>

                            <label>
                                الاسم الاخير
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div> */}



                    </div>
                    <div className='customer-form'>

                        <div className='customer-info'>

                            <label>
                                عنوان الصديق بالتفصيل
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
                                عنوان الصديق بالتفصيل
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>
                    </div>
                    <div><button>إزالة صديق</button></div>

                </div>

                <div className='form-content container-shadow' style={{ marginTop: '4%' }}>
                    <div className='customer-form'>

                        <div className='customer-info'>

                            <label>
                                رقم الهاتف
                            </label>
                            <div className="input-dashboard">
                                <input type="number" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>
                        <div className='customer-info'>

                            <label>
                                اسم الصديق
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
                                المدينه
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>

                        {/* <div className='customer-info'>

                            <label>
                                الاسم الاخير
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div> */}



                    </div>
                    <div className='customer-form'>

                        <div className='customer-info'>


                            <div className="input-dashboard">
                                <input type="password" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>
                        <div className='customer-info'>

                            <label>
                                عنوان الصديق بالتفصيل
                            </label>
                            <div className="input-dashboard">
                                <input type="text" />
                                <div className="icon-edit">
                                    <Image src={edit} alt='edit' />

                                </div>
                            </div>

                        </div>

                    </div>
                    <div><button>إزالة صديق</button></div>
                </div>
            </form>
            <div className='add-friend'><h2>+ أضف صديق جديد</h2></div>


        </div>
    )
}