import Styles from './History.module.css'

export default function History() {
    return(
        <section className={`${Styles.principal}`}>
            <header className={`${Styles.header}`}>
                <p>imowash</p> 
                <span>-</span> 
                <p>60 years of innovation in car care</p>
            </header>  
            <hr />
            <div className={`${Styles.innerContainr}`}>
                <p className={`${Styles.title}`}>
                    We are Imowash. Driven by care and innovation.
                </p>
                <div className={`${Styles.rightColContainr}`}>
                    <p className={`${Styles.introduction}`}>
                        Pioneering clean car care since 1965 - from water-saving systems to biodegradable solutions.   
                    </p>
                    <p className={`${Styles.description}`}>
                        For 60 years, we've lead car care industry with eco-friendly technologies and water-saving systems. Trusted by global brands and private owners, we deliver premium service with minimal environmental impact.
                    </p>
                </div>
            </div>
        </section>
    );
}