import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css"
import Styles from './Carousel.module.css';
import CardLocation from '../CardLocation/CardLocation';
import { useState } from 'react';
import Arrow from '../Arrow';

export default function Carousel({ contents, handleClickCard}) {
    const numSlidesToShow = window.matchMedia("(min-width: 1024px)").matches ? 2.3 : 1;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: numSlidesToShow,
            spacing: 14
        },
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    });


    return(
        <div className={`${Styles.navigationWrapper}`}> 
            <ul ref={sliderRef} className='keen-slider'>
                {contents?.map((c, indx) => {
                    return (
                        <div key={indx} className={`keen-slider__slide slideLocationContainr ${Styles.slideContainr}`}><CardLocation handleClick={handleClickCard} location={c}/></div>
                    )
                })}
            </ul>
            {loaded && instanceRef.current && (
                <>
                    <Arrow
                    left
                    onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                    />

                    <Arrow
                    onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                    }
                    />
                </>
            )}
        </div>
    )
}