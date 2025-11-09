import Styles from './CardPartner.module.css';

export default function CardPartner({ icon, iconBrand }) {
    return (
        <div className={`${Styles.principal} `}>
            <div className={`${Styles.iconContainr}`}>
                <img className={`${Styles.icon}`} src={icon} width={70} alt={`${iconBrand}`} />
            </div>
            <p className={`${Styles.iconBrand}`}>{iconBrand}</p>
        </div>
    )
}