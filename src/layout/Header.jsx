import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logoWeatherMe_transparent.png"
import "../styles/layout/header.scss"

const Header = () => {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Logo WeatherMe" />
            </Link>
            <p className="header__clock">🕒10:30</p>
        </nav>
    )
}

export default Header;