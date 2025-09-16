import Styles from './Header.module.css'
import icono from '../../assets/img/iconWhite-IMO.png'
import iconoMenu from '../../assets/img/icon-menu.svg'
import { useState } from 'react'

export default function Header() {
    const [showingMenu, setShowingMenu] = useState(true)

    const manageMenu = () => {
        const dataMenu = document.getElementById("menu-links");

        showingMenu ? dataMenu.style.opacity = "1" : dataMenu.style.opacity = "0"
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
                <img src={iconoMenu} alt='menu icon' className={`${Styles.menu}`} onClick={() => manageMenu()}/>
                <nav id="menu-links" className={`${Styles.links}`}>
                    <a href="">IMO technology</a>   
                    <a href="">Our features</a>
                    <a href="">History</a>
                    <a href="">Subscription</a>
                    <a href="">Our clients</a>
                    <a href="">Locations</a>
                </nav>
            </section>
        </header>
    );
}