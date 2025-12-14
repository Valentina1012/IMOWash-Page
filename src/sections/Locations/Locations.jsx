import Styles from "./Locations.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import locations from '../../data/locations.json';
import CardLocation from './../../components/CardLocation/CardLocation';
import { useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import LocationImgs from "../../components/LocationImgs/LocationImgs";

export default function Locations() {
    const [search, setSearch] = useState(null); 
    const todasLasCards = locations;
    const [locationClickeada, setLocationClickeada] = useState(null);

    const handleClickCard = (e) => {
        const targetCard = e.target.closest(".cardLocationWrapper");
        if(!targetCard) return;
        const actualLocation = locations.find(l => l.id == targetCard.id)
        setLocationClickeada(actualLocation);
    }

    const onInputDo = (e) => {
        if(e.target.value == "") { 
            setSearch(null);
            return;
        } 
        const cardsFiltradas = todasLasCards.filter(c =>
            c.ubication.toLowerCase().includes(e.target.value.toLowerCase()) || c.postCode.toLowerCase().includes(e.target.value.toLowerCase())
        );
        cardsFiltradas?.length > 0 ? setSearch(cardsFiltradas) : setSearch("No se ha encontrado la búsqueda");
    }

    return (
        <section className={`${Styles.principal}`}>
            {locationClickeada?.id && (<LocationImgs location={locationClickeada} onClose={() => setLocationClickeada(null)}/>)}
            <h2>Find your nearest IMO car wash</h2>
            <div className={`${Styles.subtitleContainr}`}> 
                <p className={`${Styles.subtitle}`}> With dozens of locations across the UK, you're never far from an IMO car wash</p>
                <SearchBar onChangeFn={onInputDo} />
            </div> 
            {search ? (
                typeof search == "string" ? <p className={`${Styles.searchNotFound}`}>{search}</p>
                    : <div className={`${Styles.sliderContainr}`}>
                        {
                            search?.map((l, indx) => {
                                return <CardLocation key={indx} location={l} handleClick={(e) => handleClickCard(e)}/>
                            })
                        }
                    </div>
            )
                : (<div className={`${Styles.sliderContainr}`}>
                    <Carousel contents={locations} handleClickCard={(e) => handleClickCard(e)}/>
                   </div>)
            }
            
        </section>
    )
} 