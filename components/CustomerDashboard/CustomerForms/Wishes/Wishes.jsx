import './Wishes.css'
import Image from 'next/image'
import Search from "../../../../public/Images/Icons/2nd Bar/Union 1.svg"
import product from '../../../../public//Images/Dahboard/WhatsApp Image 2023-12-13 at 12.09.35 AM.jpeg'
export default function Wishes() {
    return (
        <div className="Wishes"  >
            <div className='hrader-payment' style={{ margin: '4%', width: '100%', marginBottom: '0', display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', marginTop: '1%', alignItems: 'center' }} >

                <div style={{ marginRight: '12%', width: '20%' }}>
                    <h2 style={{ color: '#D17A52', textAlign: 'end' }}> مرحبا بك   </h2>
                    <hr style={{ backgroundColor: '#d17a52', height: '1px', border: 'none', width: '100%' }}></hr>

                </div>
                {/* <div className="search-wishes">

                    <div class="search">
                        <form className="search-bar" action="">
                            <input type="text" placeholder="ابحث عن منتج..." name="search2" />
                            <button type="submit"><i className="fa fa-search"><Image src={Search} alt="Search" /></i></button>
                        </form>
                    </div>
                </div> */}

            </div>
            <h1 className='title-head' style={{ textAlign: 'center', fontSize: '20px', marginTop: '3%', color: '#D17A52' }}>قائمة امنياتي</h1>
            <div className='wishes-content'>
                <h3 style={{ margin: '4%', width: '88%', marginBottom: '0', textAlign: 'end', marginTop: '2%' }}>الترتيب حسب</h3>
                <div className='wishes-cards'>
                    <div className='cardwishcontent'>
                        <div className='image'><Image src={product} alt='product' /></div>
                        <h4>نعال فرادا شرقي</h4>
                        <h5 className='model-code'>aa1</h5>
                        <h6>9الوان</h6>
                        <div className='price'>
                            <h6>0.22  رس</h6>
                            <h6 className='discound'>30.8  رس</h6>

                        </div>

                    </div>
                    <div className='cardwishcontent'>
                        <div className='image'><Image src={product} alt='product' /></div>
                        <h4>نعال فرادا شرقي</h4>
                        <h5 className='model-code'>aa1</h5>
                        <h6>9الوان</h6>
                        <div className='price'>
                            <h6>0.22  رس</h6>
                            <h6 className='discound'>30.8  رس</h6>

                        </div>

                    </div>
                    <div className='cardwishcontent'>
                        <div className='image'><Image src={product} alt='product' /></div>
                        <h4>نعال فرادا شرقي</h4>
                        <h5 className='model-code'>aa1</h5>
                        <h6>9الوان</h6>
                        <div className='price'>
                            <h6>0.22  رس</h6>
                            <h6 className='discound'>30.8  رس</h6>

                        </div>

                    </div>
                    <div className='cardwishcontent'>
                        <div className='image'><Image src={product} alt='product' /></div>
                        <h4>نعال فرادا شرقي</h4>
                        <h5 className='model-code'>aa1</h5>
                        <h6>9الوان</h6>
                        <div className='price'>
                            <h6>0.22  رس</h6>
                            <h6 className='discound'>30.8  رس</h6>

                        </div>

                    </div>
                    <div className='cardwishcontent'>
                        <div className='image'><Image src={product} alt='product' /></div>
                        <h4>نعال فرادا شرقي</h4>
                        <h5 className='model-code'>aa1</h5>
                        <h6>9الوان</h6>
                        <div className='price'>
                            <h6>0.22  رس</h6>
                            <h6 className='discound'>30.8  رس</h6>

                        </div>

                    </div>


                </div>
            </div>


        </div >
    )
}