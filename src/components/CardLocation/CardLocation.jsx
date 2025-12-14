import Styles from './CardLocation.module.css';

export default function CardLocation({ location, handleClick }) {
    return (
        <section className={`${Styles.principal} `}>
            <div id={location.id} className={`${Styles.navigationWrapper} cardLocationWrapper`}> 
                <div className={`${Styles.slideContainr}`}>
                    <div className={`${Styles.iconOpenWindow}`} onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                    </div>
                    <p className={`${Styles.specialty}`}>{location.specialty}</p>
                    <h3 className={`${Styles.titleUbication}`}>{location.ubication}</h3>
                    <img className={`${Styles.imgSlide}`} src={location.images[0].url} alt="" />
                </div>
            </div>
           
            <footer className={`${Styles.footer}`}>
                <p className={`${Styles.extendedUbication}`}>{location.extendedUbication}</p>
                <div className={`${Styles.hours}`}>
                    <p>{location.hours[0]}</p>
                    <p>{location.hours[1]}</p>
                </div> 
                <hr />
                <button className={`${Styles.btnReservation}`}><a href=''>Book now</a></button>
                <a className={`${Styles.link}`} href="">Navigate on Google Maps</a>
            </footer>
        </section>
    )
}
