import Styles from './Introduction.module.css'
import Card1Intro from '../Card1Intro/Card1Intro'
import Card2Intro from '../Card2Intro/Card2Intro'
import Card3Intro from '../Card3Intro/Card3Intro'


export default function Introduction() {

    return (
        <section className={`${Styles.principal}`}>
            <h3>IMO technology</h3>
            <div className={`${Styles.cardContainr}`}>
                <Card1Intro />
                <Card2Intro />
                <Card3Intro />
            </div>
        </section>
    )
}