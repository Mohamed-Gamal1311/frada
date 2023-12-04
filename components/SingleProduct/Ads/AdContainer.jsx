import Image from "next/image"
import Ad from "../../../public/Images/AdSingleProduct.jpg"
export default function AdContainer() {
    return (
        <div style={{ width: '100vw', height: '100%' }}>

            <Image
                src={Ad}
                style={{ width: '100%', height: '100%' }}
            />

        </div>
    )
}

