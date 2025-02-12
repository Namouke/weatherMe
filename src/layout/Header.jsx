import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo/logoWeatherMe_transparent.png"
import "../styles/layout/header.scss"

const Header = () => {

    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
            const frenchTime = new Intl.DateTimeFormat("fr-FR", options).format(now);
            setTime(frenchTime);
        };
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="header">
            <Link to="/">
                <div className="header__logo">
                    <img className="header__logo__img" src={logo} alt="Logo WeatherMe" />
                    <p className="header__logo__clock">🕒{time}</p>
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