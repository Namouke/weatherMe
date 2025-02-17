import React from "react";
import styles from "./location.module.scss";
import locationLogo from "../../assets/location Search Bar/🦆 icon _search_.png"

const Location = () => {

    return (
        <div className="location">
            <img src={locationLogo} className="location__logo" alt="Icon de Recherche de localisation" />
            <p className="location__bar"></p>
        </div>
    )
};

export default Location;