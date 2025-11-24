import Styles from './CardLocation.module.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import "keen-slider/keen-slider.min.css"

export default function CardLocation({ specialty, ubication, extendedUbication, imgSlide, hours }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        })

    return (
        <section className={`${Styles.principal}`}>
                <div className={`${Styles.navigationWrapper}`}> 
                    <ul ref={sliderRef} className='keen-slider'>
                        {imgSlide?.map((img, indx) => {
                            return (
                                <div key={indx} className={`keen-slider__slide slide ${Styles.slideContainr}`}>
                                    <p className={`${Styles.specialty}`}>{specialty}</p>
                                    <h3 className={`${Styles.titleUbication}`}>{ubication}</h3>
                                    <img className={`${Styles.imgSlide}`} src={img} alt="" />
                                </div>
                            )
                        })}
                    </ul>
                    {loaded && instanceRef.current && (
                        <div className={`${Styles.dots}`}>
                            {[...Array(instanceRef.current.track.details?.slides.length).keys()].map((idx) => {
                                return (
                                    <div key={idx} className={`${Styles.navCarousel}`}>
                                        <button className={`${Styles.dot} ${Styles[currentSlide === idx ? "activeDot" : ""]}`} onClick={() => { instanceRef.current?.moveToIdx(idx)}}></button>
                                    </div>
                                )
                    })}
                        </div>
                        
                    )}
            </div>
           
            <footer className={`${Styles.footer}`}>
                <p className={`${Styles.extendedUbication}`}>{extendedUbication}</p>
                <div>
                    <p>{hours[0]}</p>
                    <p>{hours[1]}</p>
                </div> 
                <button className={`${Styles.btnReservation}`}><a href=''>Book now</a></button>
                <a className={`${Styles.link}`} href="">Navigate on Google Maps</a>
            </footer>
        </section>
    )
}
