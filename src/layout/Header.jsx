import React from "react";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import logo from "../assets/logo/logo_soleil_nuage.png"
import Clock from "../components/clock/Clock";
import HeaderNav from "../components/layout/header/HeaderNav"
import "../styles/layout/header.scss"

const Header = () => {

    return (
        <nav className="header">
            <Link to="/">
                <div className="header__logo">
                    <img className="header__logo__img" src={logo} alt="Logo WeatherMe" />
                    <p className="header__logo__text">WeatherMe</p>
                    <Clock />
                </div>
            </Link>
            <HeaderNav />
        </nav>
    )
}

export default Header;