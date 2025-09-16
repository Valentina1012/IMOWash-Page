import Header from '../Header/Header.jsx'
import Styles from './Hero.module.css'
import mouseIcon from '../../assets/img/icon-mouse.svg'
import appleIcon from '../../assets/img/icon-Apple.png'
import googlePlayIcon from '../../assets/img/icon-GooglePlay.png'
import carImage from '../../assets/img/car-background.jpg'
import videoFondo from '../../assets/video/IMO-HeroVideo.mp4'
import DownloadApp from '../DownloadApp.jsx'

export default function Hero() {
    
    return(
        <>
            <Header />
            <section className={`${Styles.principal}`}>
                <h1 className={`${Styles.title}`}>Save time Save money Love your car.</h1>
                <div className={`${Styles.scrollContainer}`}>
                    <img src={mouseIcon} alt="mouse scroll icon"/>
                    <p className={`${Styles.pScroll}`}>Scroll down</p>
                </div>
                <div style={{marginLeft:"4em", display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                    <p>Download our app</p>
                    <div className={`${Styles.downloadsContnr}`}>
                        <DownloadApp text="Download on the" logo={appleIcon} appName="App Store"/>
                        <DownloadApp text="GET IT ON" logo={googlePlayIcon} appName="Google Play"/>
                    </div>
                </div>
                <video className={`${Styles.videoBg}`} playsInline autoPlay muted loop poster={carImage} id="bgvid">
                    <source src={videoFondo} type="video/mp4"/>
                </video>
            </section>
        </>
    )

}