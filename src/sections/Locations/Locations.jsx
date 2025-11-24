import Styles from "./Locations.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import locations from '../../data/locations.json';
import CardLocation from './../../components/CardLocation/CardLocation';

export default function Locations() {
    return (
        <section className={`${Styles.principal}`}> 
            <h2>Find your nearest IMO car wash</h2>
           <div className={`${Styles.subtitleContainr}`}> 
                <p className={`${Styles.subtitle}`}> With dozens of locations across the UK, you're never far from an IMO car wash</p>
                <SearchBar />
               
            </div> 
            <div className={`${Styles.sliderContainr}`}>
                {
                    locations.map((l, indx) => {
                        return <CardLocation key={indx} specialty={l.specialty} ubication={l.ubication} extendedUbication={l.extendedUbication} imgSlide={l.images} hours={l.hours}/>
                    })         
                }
            </div>
        </section>
    )
} 