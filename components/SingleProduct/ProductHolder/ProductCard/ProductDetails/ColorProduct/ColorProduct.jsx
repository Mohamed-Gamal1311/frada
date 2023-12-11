import './ColorProduct.css'
import Image from 'next/image'

export default function ColorProduct() {
    return (
        <div className='color-product-holder'>
            <p >اختر من الالوان</p>
            <div className='color-image-holder'>
                <div style={{ cursor: 'pointer' }}>
                    <Image src="https://i.ibb.co/VTjkqx7/7.jpg" width={80} height={80} alt={'small-Image'} className="ml-2" />
                </div>
                <div style={{ cursor: 'pointer' }}>
                    <Image src="https://i.ibb.co/VTjkqx7/7.jpg" width={80} height={80} alt={'small-Image'} className="ml-2" />
                </div>
            </div>
            {/* <Image width={50} height={50} /> */}
        </div>


    )
}