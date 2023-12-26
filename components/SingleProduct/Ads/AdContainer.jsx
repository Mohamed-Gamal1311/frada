import Image from "next/image"
import Ad from "../../../public/Images/AdSingleProduct.jpg"
import Admobile from '../../../public/Images/AD_SECTIONMobile.svg'
import './AdContainer.css'
export default function AdContainer() {
    return (
        <div className="seorate-single" style={{ width: '100vw', height: '100%' }}>

            <Image
                className="image-add"
                src={Ad}
                style={{ width: '100%', height: '100%' }}
            />
            <Image
                className="image-add-mobile"
                src={Admobile}

            />
        </div>
    )
}

