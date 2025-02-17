import React from "react";
import styles from "./LocationCarousel.module.scss";
import PingLocation from "../../../../assets/Carousels/Location/🦆 icon _location_.png"

const LocationCarousel = () => {
    return (
        <div className={styles.location}>
            <p className={styles.location__text}>Paris</p>
            <img src={PingLocation} className={styles.location__ping} alt="Logo location" />
        </div>
    )
}

export default LocationCarousel;