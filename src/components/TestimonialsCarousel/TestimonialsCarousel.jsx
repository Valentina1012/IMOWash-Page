import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"
import Styles from "./Testimonials.module.css"

export default function TestimonialsCarousel() {
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
            <header className={`${Styles.header}`}>
                <p>Imowash trusted by industry leaders</p> 
                <span>➜</span> 
                <p>Porsche Center Berlin</p>
            </header>  
            <hr />
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide slide1">
                    <div className={`${Styles.sliderPerson}`}><p>Daniel McCarthy</p> <p>Fleet Manager</p></div><h2 className={`${Styles.testimonial}`}>Imowash keeps our fleet in top condition year-round. Their consistency, speed, and attention to detail have made them an essential partner in our operations.</h2>
                </div>
                <div className="keen-slider__slide slide2">
                    <div className={`${Styles.sliderPerson}`}><p>Laura Fernandez</p> <p>Regular Customer</p></div><h2 className={`${Styles.testimonial}`}>I’ve never seen my car shine like this! Imowash’s team is fast, professional, and incredibly thorough. It feels like driving a brand-new vehicle every time.</h2>
                </div>
                <div className="keen-slider__slide slide3">
                    <div className={`${Styles.sliderPerson}`}><p>Charles Jhones</p> <p>Taxi Owner</p></div><h2 className={`${Styles.testimonial}`}>As someone who depends on his car daily, I appreciate Imowash’s reliability. They always deliver spotless results, and their flexible schedule fits perfectly with my busy routine.</h2>
                </div>
                <div className="keen-slider__slide slide4">
                    <div className={`${Styles.sliderPerson}`}><p>Sophie Turner</p> <p>Restaurant Manager</p></div><h2 className={`${Styles.testimonial}`}>Our delivery cars represent our brand, so presentation matters. Imowash ensures they’re always clean and polished — our customers notice the difference.</h2>
                </div>
                <div className="keen-slider__slide slide5">
                    <div className={`${Styles.sliderPerson}`}><p>Matthew Taylor</p> <p>Private Customer</p></div><h2 className={`${Styles.testimonial}`}>I used to wash my car at home, but nothing compares to Imowash’s quality. They take care of every detail, even the interior looks flawless.</h2>
                </div>
                <div className="keen-slider__slide slide6">
                    <div className={`${Styles.sliderPerson}`}><p>Megan Lewis</p> <p>Real Estate Agent</p></div><h2 className={`${Styles.testimonial}`}>My car is part of my first impression with clients. Thanks to Imowash, it’s always spotless and professional-looking. They’re truly part of my success.</h2>
                </div>
                <div className="keen-slider__slide slide7">
                    <div className={`${Styles.sliderPerson}`}><p>Henry Swift</p> <p>Logistics Supervisor</p></div><h2 className={`${Styles.testimonial}`}>Managing multiple vehicles can be a headache, but Imowash makes it simple. Their regular maintenance washes save us time and keep our fleet looking top-notch.</h2>
                </div>
                </div>
            </div>
            {loaded && instanceRef.current && (
                <div className={`${Styles.footer}`}>
                    <p className={`${Styles.testimonialsNav}`}>Testimonials ➜</p>
                    <div className={`${Styles.dots}`}>
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                            <div key={idx} className={`${Styles.navCarousel}`}>
                                <button  
                                className={`${Styles.dot} ${Styles[currentSlide === idx ? "active" : ""]} `}></button>
                                <p className={`${Styles.pDot} ${Styles[currentSlide === idx ? "activeP" : ""]}`} onClick={() => { instanceRef.current?.moveToIdx(idx)}}>00{idx + 1}</p>
                            </div>
                            )
                        })}
                    </div>

                </div>
            )}
        </section>
    )
}