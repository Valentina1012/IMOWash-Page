import Styles from './Card1Intro.module.css'
import iconWhite from '../../assets/img/iconWhite-IMO.png'
import blueSquares from '../../assets/img/blue-squares.png'

import { HiArrowSmallDown } from "react-icons/hi2";

export default function Card2Intro() {

    return (
        <article className={`${Styles.principal}`}>
                <header>
                    <img className={`${Styles.iconWhite}`}src={iconWhite} alt="White icon of Imowash" />
                    <div>
                        <img className={`${Styles.blueSquares}`}src={blueSquares} alt="Grid of blue squares" />
                        <p>No harsh chemicals. No toxic runoff.</p>
                    </div>
                </header>
                <div>
                    <hr />
                    <footer>
                        <div className={`${Styles.title}`}>
                            <p>Less water <HiArrowSmallDown /></p>
                            <p>More impact</p>
                        </div>
                        <p>A brilliant shine, with the planet in mind.</p>
                        <p>Smarter wash starts here. Purity. Planet</p>
                    </footer>
                </div>
            </article>
    )
}