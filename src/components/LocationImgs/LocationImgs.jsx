import { useState } from 'react';
import Arrow from '../Arrow';
import Styles from './LocationImgs.module.css'
import { IoClose } from "react-icons/io5";

export default function LocationImgs({ location, onClose }) {
    const images = location?.images
    const [idImage, setIdImage] = useState(0);

    return (
        <section className={`${Styles.locationDetail}`}>
            <button className={`${Styles.closeBtn}`} onClick={onClose}><IoClose /></button>
            <img className={`${Styles.imgDetail}`} src={(images[idImage]).url} alt="" />
            <Arrow left centered preview
            onClick={() => setIdImage(prev => prev - 1 < 0 ? images.length - 1 : prev - 1)}
            />
            <Arrow centered preview
            onClick={() => setIdImage(prev => prev + 1 > images.length - 1 ? 0 : prev + 1)}
            />
        </section>
    )
}