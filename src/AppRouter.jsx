import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import MonthyPage from "./pages/Monthy";
import TommorowPage from "./pages/Tommorow";
import Layout from "./layout/Layout";

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Tommorow" element={<TommorowPage />} />
                    <Route path="/Monthy" element={<MonthyPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter;