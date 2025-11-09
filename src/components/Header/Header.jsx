import Styles from './Header.module.css'
import icono from '../../assets/img/iconWhite-IMO.png'
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react'

export default function Header() {
    const [showingMenu, setShowingMenu] = useState(true)

    const manageMenu = () => {
        const dataMenu = document.getElementById("menu-links");
        const menuBg = document.getElementById("menu-bg");

        if(showingMenu) {
            dataMenu.style.transform = "translateX(150px)"
            menuBg.style.background = "rgba(0, 0, 0, 0.5)"
        } else {
            dataMenu.style.transform = "translateX(100vw)"
            menuBg.style.background = "none"
        }
        setShowingMenu(!showingMenu);
    }

    return (
        <header className={`${Styles.header}`}>
            <div className={`${Styles.logoySelect}`}>
                <a className={`${Styles.logo}`} href="">imowash</a>
                <select className={`${Styles.select}`} name="Language" id="language">
                    <option value="london">UK-LONDON</option>
                </select>
            </div>
            <img className={`${Styles.icon}`} src={icono} alt="IMO white icon"/>
                <section className={`${Styles.menuContainer}`}>
                    <span className={`${Styles.menu}`} onClick={() => manageMenu()}><IoIosMenu /></span>
                    <div id="menu-bg" className={`${Styles.bgMenu}`}>
                        <nav id="menu-links" className={`${Styles.links}`}>
                            <a href="">IMO technology</a>   
                            <a href="">Our features</a>
                            <a href="">History</a>
                            <a href="">Subscription</a>
                            <a href="">Our clients</a>
                            <a href="">Locations</a>
                        </nav>
                    </div>
                </section>
            
        </header>
    );
}