import RowList from "../RowList"
import Styles from "./SubscriptionCard.module.css"

export default function SubscriptionCard({
    extraClass="bgWhite-secondGray",
    headerIcon, 
    header, 
    price, 
    subtitle, 
    benefit, 
    listIds, 
    listItems
    }) {

    return (
        <section className={`${Styles.principal} ${Styles[extraClass]}` }>
            <header className={`${Styles.header}`}>
                <span className={`${Styles.headerIcon}`}>{headerIcon}</span>
                <p className={`${Styles.headerText}`}>{header}</p>
            </header>
            <div className={`${Styles.innerContent}`}>
                <div>
                    <h2 className={`${Styles.price}`}>${price} /YEAR</h2>
                    <p className={`${Styles.subtitle}`}>{subtitle}</p>
                </div>
                <div>
                    <p className={`${Styles.benefit}`}>{benefit}:</p>
                    <ul className={`${Styles.listContainr}`}>
                        {<RowList rowIds={listIds} renderRow={(index) => {
                            return (
                                <li key={index} className={`${Styles.listItem}`}>{listItems[index]}</li>

                            )
                        }}/>}
                    </ul>
                </div>
            </div>
        </section>
    )
}