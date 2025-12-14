import Styles from "./SearchBar.module.css"
import { icons } from "../icons"

export default function SearchBar({ onChangeFn }) {
    return (
        <div className={`${Styles.principal}`}>
            <div className={`${Styles.inputContainr}`}>
                <div className={`${Styles.iconInput}`}>{icons.crosshair}</div>
                <input className={`${Styles.inputBar}`} onChange={onChangeFn} type="text" placeholder="Town or Postcode"/>
            </div>
            <button className={`${Styles.btnAction}`}>Search</button>
        </div>
    )
}