import React from "react";
import styles from "./location.module.scss";
import locationLogo from "../../assets/location Search Bar/🦆 icon _search_.png"

const Location = () => {

    return (
        <div className={styles.location}>
            <img src={locationLogo} className={styles.location__logo} alt="Icon de Recherche de localisation" />
            <p className={styles.location__bar}>Search location...</p>
        </div>
    )
};

export default Location;