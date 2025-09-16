export default function DownloadApp({text, logo, appName}) {

    return (
        <section style={{background:"#fff", color:"#000", display:"flex", borderRadius:".4em", padding: ".4em", minWidth: "fit-content"}}>
            <img src={logo} alt={`Logo de la app ${appName}`} style={{width: "2em", height: "fit-content"}}/>
            <div>
                <p style={{margin: "0", fontSize:".7em"}}>{text}</p>
                <h4 style={{margin: "0", fontSize:"1.2em"}}>{appName}</h4>
            </div>
        </section>
    );
}