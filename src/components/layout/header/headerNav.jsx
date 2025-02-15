import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./HeaderNav.module.scss"

const HeaderNav = () => {
    const location = useLocation();

    return (
        <div className={styles.header__nav}>
            <Link to="/" className={`${styles.header__nav__button} ${location.pathname === "/" ? styles.active : ""} `}><div>Today </div></Link>
            <Link to="/Tommoraw" className={`${styles.header__nav__button} ${location.pathname === "/Tommoraw" ? styles.active : ""}`}><div>Tommorow</div></Link>
            <Link to="/Monthy" className={`${styles.header__nav__button} ${location.pathname === "/Monthy" ? styles.active : ""}`}><div>Monthly Forecast</div></Link>
        </div>
    )
}

export default HeaderNav;