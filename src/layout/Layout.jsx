import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import "../styles/layout/layout.scss"

const Layout = ({ children }) => {
    return (
        <section className="main">
            <Header />
            <div className="main__container">{children}</div>
            <Footer />
        </section>

    )
}

export default Layout;