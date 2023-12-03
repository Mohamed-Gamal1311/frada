import Image from 'next/image'
import Phone from "../../../public/Images/Icons/1st Bar/call-icon.svg"
import Mail from "../../../public/Images/Icons/1st Bar/Mail.svg"
import Facebook from "../../../public/Images/Icons/1st Bar/Facebook.svg"
import Instagram from "../../../public/Images/Icons/1st Bar/Instagram.svg"
import Snapchat from "../../../public/Images/Icons/1st Bar/Snapchat.svg"
import Tiktok from "../../../public/Images/Icons/1st Bar/Tiktok.svg"
import Twitter from "../../../public/Images/Icons/1st Bar/Twitter.svg"
import styles from '../../../src/app/page.module.css'

export default function Up() {
    return (
        <div className="message flex-rows">
            <div className="header-content">
                <Image className="header-svg" src={Phone} alt="Phone" />
                <span className="bolder">
                    +966-55-372-5995
                </span>:اتصل بنا اليوم
            </div>
            <div className="header-content">
                <Image className="header-svg" src={Mail} alt="Mail" />

                <p>تابع كل جديد من خلال الإشتراك في النشرة الإخبارية</p>
            </div>
            <div className="header-content-logos">
                <Image className='header-svg' src={Facebook} alt="Facebook" />
                <Image className='header-svg' src={Instagram} alt="Instagram" />
                <Image className='header-svg' src={Snapchat} alt="Snapchat" />
                <Image className='header-svg' src={Tiktok} alt="Tiktok" />
                <Image className='header-svg' src={Twitter} alt="Twitter" />


            </div>
        </div>
    )
}
