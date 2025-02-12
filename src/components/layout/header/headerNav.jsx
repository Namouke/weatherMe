import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
    return (
        <div className="header__nav">
            <Link to="/"><div>Today </div></Link>
            <Link to="/Tommoraw"><div>Tommorow</div></Link>
            <Link to="Monthy"><div>Monthly Forecast</div></Link>
        </div>
    )
}

export default HeaderNav;