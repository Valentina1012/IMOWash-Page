import CardFeature from '../../components/CardFeature/CardFeature.jsx'
import Styles from './OurFeatures.module.css'
import cleaning from '../../assets/img/cleaning.png'
import secure from '../../assets/img/secure.png'
import cleaningPayment from '../../assets/img/cleaning-payment.png'

export default function OurFeatures() {
    return (
        <section className={`${Styles.principal}`}>
            <h2 className={`${Styles.title}`}>Our features</h2>
            <div className={`${Styles.featuresContainr}`}>
                <div className={`${Styles.firstChild}`}><CardFeature text="Experience advanced car care technology for a brilliant shine and secure cashless payments." image={cleaningPayment} altImg="Imagen de ejemplo" /></div>
                <div className={`${Styles.twoContainr}`}>
                    <CardFeature text="Save time at the car wash and relax knowing your secure cashless payment has already been made." image={secure} altImg="Imagen de ejemplo" />
                    <CardFeature text="Enjoy a spotless interior with our quick and efficient cleaning service." image={cleaning} altImg="Imagen de ejemplo" />
                </div>
            </div>
        </section>
    )
}