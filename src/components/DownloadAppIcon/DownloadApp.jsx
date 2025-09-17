import Styles from './DownloadAppIcon.module.css'

export default function DownloadApp({text, logo, appName}) {

    return (
        <section className={`${Styles.principal}`}>
            <span className={`${Styles.logoApp}`}> {logo} </span>
            <div>
                <p className={`${Styles.description}`}> {text} </p>
                <h4 className={`${Styles.appName}`} > {appName} </h4>
            </div>
        </section>
    );
}