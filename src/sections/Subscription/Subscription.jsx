import SubscriptionCard from '../../components/SubscriptionCard/SubscriptionCard.jsx'
import Styles from './Subscription.module.css'

export default function Subscription() {
    return(
        <section id="subscription" className={`${Styles.principal}`}>
            <p className={`${Styles.description}`}>With regular visits, deatiling costs add up. </p>
            <p className={`${Styles.description}`}>Our membership gives you access to premium services ─ without the premium price tag.</p>
            <div className={`${Styles.subsContainr}`}>
                <SubscriptionCard 
                headerIcon="⬛︎" 
                header="Without membership" 
                price="3,840" 
                subtitle="Pay more for less no perks, no priority" benefit="What you get" 
                listIds={["1", "2", "3", "4"]} 
                listItems={["Avg. spend per visit: $80", "Full price every time", "No piority scheduling", "No complementary extras"]} 
                />
                <SubscriptionCard 
                    extraClass="bgBlue"
                    headerIcon="⬤" 
                    header="With IMO membership" 
                    price="1,800" 
                    subtitle="Luxury care, priority service, one flat rate." benefit="All-inclusive perks" 
                    listIds={["1", "2", "3", "4", "5"]} 
                    listItems={["Unlimited washes", "Priority booking", "Interior detailing included", "Free vacuum stations", "Save over $2,000/year"]} 
                />
            </div>
        </section>
    )
}