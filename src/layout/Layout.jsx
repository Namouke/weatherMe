import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import "../styles/layout/layout.scss"

const Layout = ({ children }) => {
    return (
        <div className="main">
            <Header />
            <main className="main__container">{children}</main>
            <Footer />
        </div>

    )
}

export default Layout;