import React from "react";
import Location from "../components/location search bar/LocationSearchBar"
import Carousels from "../components/carousels/Carousels";
import WeatherPerHour from "../components/weather per hour/WeatherPerHour";

const Home = () => {
    return (
        <section>
            <Location />
            <Carousels />
            <WeatherPerHour />
        </section>
    )
}

export default Home;