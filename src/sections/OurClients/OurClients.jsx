import Styles from './OurClients.module.css'
import CardPartner from '../../components/CardPartner/CardPartner'
import  { londonEV, lordstown, lynkco, bac, amg }  from '../../assets/img'
import RowList from '../../components/RowList';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import TestimonialsCarousel from '../../components/TestimonialsCarousel/TestimonialsCarousel';
const animation = { duration: 20000, easing: (t) => t }

export default function OurClients() {
    const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(2, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation)
    },
  })

    const listIds = [0, 1, 2, 4];
    const listItems = [
        {icon: lordstown, iconBrand: "Lordstown Motors"}, 
        {icon: londonEV, iconBrand: "London EV"}, 
        {icon: lynkco, iconBrand: "Lynkco"}, 
        {icon: amg, iconBrand: "AMG"}, 
        {icon: bac, iconBrand: "BAC"},
        {icon: lordstown, iconBrand: "Lordstown Motors"},
        {icon: londonEV, iconBrand: "London EV"},
        {icon: lynkco, iconBrand: "Lynkco"},
        {icon: amg, iconBrand: "AMG"},
    ];

    return (
        
        <section id="ourClients" className={`${Styles.principal}`}>
            <p className={`${Styles.title}`}>Partners</p>
            <div className={`${Styles.sliderContainr}`}>   
                <ul ref={sliderRef} className="keen-slider">
                    {<RowList rowIds={listIds} renderRow={(index) => {
                        return <div className='keen-slider__slide number-slide'>
                            <CardPartner key={index+1} icon={listItems[index].icon} iconBrand={listItems[index].iconBrand}/>
                            <CardPartner key={index+1.2} icon={listItems[index+1].icon} iconBrand={listItems[index+1].iconBrand}/>
                            <CardPartner key={index+1.4} icon={listItems[index+2].icon} iconBrand={listItems[index+2].iconBrand}/>
                            <CardPartner key={index+1.6} icon={listItems[index+3].icon} iconBrand={listItems[index+3].iconBrand}/>
                            <CardPartner key={index+1.8} icon={listItems[index+4].icon} iconBrand={listItems[index+4].iconBrand}/>
                            <CardPartner key={index+1.9} icon={listItems[index+5].icon} iconBrand={listItems[index+5].iconBrand}/>
                        </div>
                    }}/>}
                </ul>
            </div>

            <TestimonialsCarousel />
        </section>
    )
}