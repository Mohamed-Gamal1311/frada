import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import home from "../../../public/Images/Bottomhead/home_icon.svg";
import crosshair from "../../../public/Images/ICONS-phone/orders.svg"
import frada from "../../../public/Images/ICONS-phone/Frada.svg"
import My_account_icon from "../../../public/Images/ICONS-phone/My_account_icon.svg"
import My_Wishes_Button_icon from "../../../public/Images/ICONS-phone/My_Wishes_Button_icon.svg"
import supporticon from "../../../public/Images/ICONS-phone/suport icon.svg"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import "./Bottom.css";

export default function Bottom() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const listElements = document.querySelectorAll('.list');

        const activeLink = (index) => {
            listElements.forEach((item) => item.classList.remove('active'));
            listElements[index].classList.add('active');
        };

        const handleClick = (index) => {
            setActiveIndex(index);
        };

        listElements.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeLink(index);
                handleClick(index);
            });
        });

        // Cleanup event listeners on component unmount
        return () => {
            listElements.forEach((item, index) => {
                item.removeEventListener('click', () => {
                    activeLink(index);
                    handleClick(index);
                });
            });
        };
    }, []); // Empty dependency array ensures the effect runs only once, on component mount

    return (
        <div className='holder'>
            <div className="navigation">
                <ul>
                    <li className={`list ${activeIndex === 0 ? 'active' : ''}`}>
                        <a href="#">
                            <span className="icon" width="50px" height="50px">

                                <ion-icon name="home-outline"><Image src={supporticon} width={25} height={25} alt="icon" /></ion-icon>
                            </span>
                            <span className="text">تواصل معنا</span>
                        </a>
                    </li>
                    <li className={`list ${activeIndex === 1 ? 'active' : ''}`}>
                        <a href="#">
                            <span className="icon" width="50px" height="50px">

                                <ion-icon name="home-outline"><Image src={crosshair} width={25} height={25} alt="icon" /></ion-icon>

                            </span>
                            <span className="text">طلباتي</span>
                        </a>
                    </li>
                    <li className={`list ${activeIndex === 2 ? 'active' : ''}`}>
                        <a href="#">
                            <span className="icon" width="50px" height="50px">

                                <ion-icon name="home-outline"><Image src={frada} width={25} height={25} alt="icon" /></ion-icon>

                            </span>
                            <span className="text">فرادا</span>
                        </a>
                    </li>
                    <li className={`list ${activeIndex === 3 ? 'active' : ''}`}>
                        <a href="#">
                            <span className="icon" width="50px" height="50px">

                                <ion-icon name="home-outline"><Image src={My_Wishes_Button_icon} width={25} height={25} alt="icon" /></ion-icon>

                            </span>
                            <span className="text">امنياتي</span>
                        </a>
                    </li>
                    <li className={`list ${activeIndex === 4 ? 'active' : ''}`}>

                        <Link href="dashboard">
                            <span className="icon" width="50px" height="50px">
                                <ion-icon name="home-outline"><Image src={My_account_icon} width={25} height={25} alt="icon" /></ion-icon>

                            </span>
                            <span className="text">حسابي</span>
                        </Link>
                    </li>
                    <div className="indicator">


                    </div>
                </ul>
            </div>
        </div>
    );
}
