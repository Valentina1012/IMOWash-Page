import Styles from './CardFeature.module.css'

export default function CardFeature({ text, image, altImg }) {
    return (
        <section className={`${Styles.principal}`}>
            <div className={`${Styles.headerContainr}`}>
                <img className={`${Styles.image}`} src={image} alt={altImg} />
                <span className={`${Styles.btnCard}`}>+</span>
            </div>
            <p>{text}</p>
        </section>
    )
}