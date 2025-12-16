import Styles from './Card3Intro.module.css'
import iconWhite from '../../assets/img/iconWhite-IMO.png'

export default function Card3Intro() {

    return (
        <section className={`${Styles.principal}`}>
            <header>
                <img className={`${Styles.iconWhite}`} src={iconWhite} alt="White icon of Imowash" />
                <span>More than clean</span>
                <p>From a spotless exterior to a refreshed interior, we bring back that showroom shine without wasting a drop.</p>
            </header>
            <footer>
                <p className={`${Styles.title}`}>Drive Clean. Feel Amazing.</p>
                <div className={`${Styles.description}`}>
                    <p>Water-saving tecnology</p>
                    <p>Premium, scratch-free cleaning</p>
                    <p>Interior & exterior detailing</p>
                </div>
            </footer>
        </section>
    )
}