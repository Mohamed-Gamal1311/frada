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
                <Image className='header-svg' src={Facebook} alt="Facebook" style={{ height: '86%', marginRight: '2px' }} />
                <a href='https://www.instagram.com/fbyfarada/?hl=ar' style={{ textDecoration: 'none' }}> <Image className='header-svg' src={Instagram} alt="Instagram" /></a>
                <a href='https://www.snapchat.com/add/fradaksa?locale=ar' style={{ textDecoration: 'none' }} > <Image className='header-svg' src={Snapchat} alt="Snapchat" /></a>
                <a href='https://www.tiktok.com/tag/%D9%81%D8%B1%D8%A7%D8%AF%D8%A7' style={{ textDecoration: 'none' }}> <Image className='header-svg' src={Tiktok} alt="Tiktok" /></a>
                <a href='https://twitter.com/fradaksa?lang=ar' style={{ textDecoration: 'none' }}> <Image className='header-svg' src={Twitter} alt="Twitter" /></a>


            </div>
        </div>
    )
}
