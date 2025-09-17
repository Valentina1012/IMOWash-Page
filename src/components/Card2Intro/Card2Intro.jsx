import Styles from './Card2Intro.module.css'
import iconBlack from '../../assets/img/iconBlack-IMO.png'

export default function Card2Intro() {

    return (
        <article className={`${Styles.principal}`}>
                <header>
                    <div>
                        {/* <h3>Your car loves this. So does Earth.</h3> */}
                        <p className={`${Styles.title}`}>Your car loves this. So does Earth.</p>
                        <p>Beyond clean. Eco-intelligent.</p>
                    </div>
                    <button>imo.cars.com</button>
                </header>
                <footer>
                    <p>Minimal water waste</p>
                    <img className={`${Styles.iconBlack}`}src={iconBlack} alt="Black icon of Imowash" />
                    <p>Zero toxic runoff</p>
                </footer>
            </article>
    )
}