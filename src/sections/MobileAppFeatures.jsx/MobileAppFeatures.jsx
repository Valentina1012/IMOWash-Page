import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from 'react';
import Styles from './MobileFeatures.module.css';
import { featureMobile1, featureMobile2, featureMobile3 } from '../../assets/img'

const featuresArr= [
    {text:["Get rewarded everytime you wash your car", "Loyalty members unlock exclusive perks and savings", "Track your bonuses and benefits in one place", "Never miss a reward with smart reminders"], image:featureMobile1}, 
    {text:["Your car's status is available in real time", "Check the history of recent services", "Summary of your monthly and weekly costs at your fingertips", "View and manage your appointment calendar"], image:featureMobile2}, 
    {text:["Redeem exclusive benefits", "Accumulate points with every wash", "Surprise rewards for your loyalty", "Earn bonuses for an active subscription"], image:featureMobile3}];

export default function MobileAppFeatures() {
    const numSlidesToShow = window.matchMedia("(min-width: 1024px)").matches ? 2.3 : 1;
    const [features, setFeatures] = useState(featuresArr[0]);
    const [currentSlide, setCurrentSlide] = useState({ num: 0, class: "activeSlide" });
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide({num: slider.track.details.rel, class: "activeSlide"});
            setFeatures(featuresArr[slider.track.details.rel]);
        },
        loop: true,
        mode: "free-snap",
        slides: { origin: "center", perView: numSlidesToShow, spacing: 15 },
    })
    
    return (
         <section ref={sliderRef} className={`${Styles.general} keen-slider`}>
            <div className='keen-slider__slide mobile-slide'>
                <p className={`${Styles.titleScroll} ${Styles[currentSlide.class]}`}>Track progress</p>
            </div>
            <div className='keen-slider__slide mobile-slide'>
                <p className={`${Styles.titleScroll} ${Styles[currentSlide.class]}`}>Quick looking</p>
            </div>
            <div className='keen-slider__slide mobile-slide'>
                <p className={`${Styles.titleScroll} ${Styles[currentSlide.class]}`}>Loyalty system</p>
            </div>
            <div className={`${Styles.imgContainr}`}><img className={`${Styles.imgMobile}`} src={features.image} alt="" /></div>
            <footer className={`${Styles.footerMobileApp}`}>
                <div className={`${Styles.features}`}>
                    <div className={`${Styles.twoFeatures}`}>
                        <p className={`${Styles.feature}`}>{features.text[0]}</p>
                        <p className={`${Styles.feature}`}>{features.text[1]}</p>
                    </div>
                    <div className={`${Styles.twoFeatures}`}>
                        <p className={`${Styles.feature}`}>{features.text[2]}</p>
                        <p className={`${Styles.feature}`}>{features.text[3]}</p>
                    </div>
                </div>
                <a className={`${Styles.btnDownloadApp}`} href="">Download App ↗</a>
            </footer>
            
        </section>
        
    )
}

