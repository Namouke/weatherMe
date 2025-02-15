import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout/footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__rights">© 2020 WeatherMe. All rights reserved</p>
            <Link to="/about"><p className="footer__linkAbout">A propos de nous</p></Link>
        </footer>
    )
}
export default Footer