"use client"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CustomerFreind.css'
import edit from '../../../public/Images/Customerifo/Group 37669.svg'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

export default function CustomerFreind() {
    return (
        <div className='CustomerFreind' dir="rtl" lang="ar">
            <h2> مرحبا بك<span>Customer-Name</span>    </h2>
            <hr></hr>
            <div className='friend'>
                <div className='friend-form'>
                    <div className='friend-info'>

                        <label>
                            اسم الصديق
                        </label>
                        <div className="input">
                            <input type="text" />
                            <div className="icon-edit">
                                <Image src={edit} alt='edit' />

                            </div>
                        </div>

                    </div>
                    <div className='friend-info pading' >

                        <label>
                            المدينه
                        </label>
                        <div className="input">
                            <input type="number" />
                            <div className="icon-edit">
                                <Image src={edit} alt='edit' />

                            </div>
                        </div>

                    </div>
                    <div className='friend-info pading'>

                        <label>
                            عنوان الصديق بالتفصيل
                        </label>
                        <div className="input">
                            <input type="text" />
                            <div className="icon-edit">
                                <Image src={edit} alt='edit' />

                            </div>
                        </div>

                    </div>
                </div>
                <div className='friend-form'>
                    <div className='friend-info'>

                        <label>
                            المدينه
                        </label>
                        <div className="input">
                            <input type="number" />
                            <div className="icon-edit">
                                <Image src={edit} alt='edit' />

                            </div>
                        </div>

                    </div>
                    <div className='friend-info'>

                        <div className='adress-friend'>
                            <label>ادخل الموقع على الخريطه</label>
                            <div className='map-friend'>
                                <iframe width="100%" height="120px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=elmokatam%20Cairo+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                <div className="edit-adressfriend">

                                    <div className="input">
                                        <input type="text" />
                                        <div className="icon-edit">
                                            <Image src={edit} alt='edit' />

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}