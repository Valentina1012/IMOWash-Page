import Header from '../../components/Header/Header.jsx'
import Styles from './Hero.module.css'
import carImage from '../../assets/img/car-background.jpg'
import videoFondo from '../../assets/video/IMO-HeroVideo.mp4'
import DownloadApp from '../../components/DownloadAppIcon/DownloadApp.jsx'
import { FaApple, FaGooglePlay  } from "react-icons/fa6";
import { PiMouseSimpleThin } from "react-icons/pi";

export default function Hero() {
    
    return(
        <>
            <Header />
            <section className={`${Styles.principal}`}>
                <h1 className={`${Styles.title}`}>Save time Save money Love your car.</h1>
                <div className={`${Styles.scrollContainer}`}>
                    <span className={`${Styles.mouseIcon}`}><PiMouseSimpleThin /></span>
                    <p className={`${Styles.pScroll}`}>Scroll down</p>
                </div>
                <div className={`${Styles.appContainr}`}>
                    <p className={`${Styles.titleDownloads}`}>Download our app</p>
                    <div className={`${Styles.downloadsContnr}`}>
                        <DownloadApp text="Download on the" logo={<FaApple />} appName="App Store"/>
                        <DownloadApp text="GET IT ON" logo={<FaGooglePlay />} appName="Google Play"/>
                    </div>
                </div>
                <video className={`${Styles.videoBg}`} playsInline autoPlay muted loop poster={carImage} id="bgvid">
                    <source src={videoFondo} type="video/mp4"/>
                </video>
            </section>
        </>
    )

}