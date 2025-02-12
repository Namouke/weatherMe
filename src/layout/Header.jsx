import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logoWeatherMe_transparent.png"
import "../styles/layout/header.scss"

const Header = () => {
    return (
        <nav className="header">
            <Link to="/">
                <div className="header__logo">
                    <img className="header__logo__img" src={logo} alt="Logo WeatherMe" />
                    <p className="header__logo__clock">🕒10:30</p>
                </div>
            </Link>
            <div className="header__nav">
                <Link to="/"><div>Today </div></Link>
                <Link to="/Tommoraw"><div>Tommorow</div></Link>
                <Link to="Monthy"><div>Monthly Forecast</div></Link>
            </div>
        </nav>
    )
}

export default Header;