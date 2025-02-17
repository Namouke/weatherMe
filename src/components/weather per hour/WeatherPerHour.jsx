import React from "react";
import styles from "./WeatherPerHour.module.scss";

const WeatherPerHour = () => {
    return (
        <div className={styles.WeatherPerHour}>
            <p>xx:xxam/pm</p>
            <p>XX°</p>
        </div>
    )
}

export default WeatherPerHour;