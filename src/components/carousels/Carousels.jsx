import React from "react";
import styles from "./Carousels.module.scss";
import LocationCarousel from "./CarouselsComponents/location/LocationCarousel";

const Carousels = () => {
    return (
        <div className={styles.Carousels}>
            <LocationCarousel />
        </div>
    )
}

export default Carousels;