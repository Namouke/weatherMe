import React from "react";
import styles from "./LocationCarousel.module.scss";
import PingLocation from "../../../../assets/Carousels/Location/🦆 icon _location_.png"

const LocationCarousel = () => {
    return (
        <div className={styles.location}>
            <p>Paris</p>
            <img src={PingLocation} alt="Logo location" />
        </div>
    )
}

export default LocationCarousel;