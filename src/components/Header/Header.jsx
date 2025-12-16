import Styles from './Header.module.css'
import icono from '../../assets/img/iconWhite-IMO.png'
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react'

export default function Header() {
    const [showingMenu, setShowingMenu] = useState(true)

    const manageMenu = () => {
        const menuBg = document.getElementById("menu-bg");

        showingMenu ? menuBg.style.display = "block" : menuBg.style.display = "none"
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
                            <a href="#technology">IMO technology</a>   
                            <a href="#ourFeatures">Our features</a>
                            <a href="#history">History</a>
                            <a href="#subscription">Subscription</a>
                            <a href="#ourClients">Our clients</a>
                            <a href="#locations">Locations</a>
                        </nav>
                    </div>
                </section>
            
        </header>
    );
}