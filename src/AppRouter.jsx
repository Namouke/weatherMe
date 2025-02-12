import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/About";
import HomePage from "./pages/About";
import MonthyPage from "./pages/About";
import TommorowPage from "./pages/About";

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={HomePage}></Route>
                    <Route path="" element={TommorowPage}></Route>
                    <Route path="" element={MonthyPage}></Route>
                    <Route path="/about" element={AboutPage}></Route>
                    <Route path="*" element={ErrorPage}></Route>
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter;