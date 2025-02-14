import React from "react";
import { useState, useEffect } from "react";

const Clock = (props) => {
    const { className = "" } = props;

    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { hour: "2-digit", minute: "2-digit" };
            const frenchTime = new Intl.DateTimeFormat("fr-FR", options).format(now);
            setTime(frenchTime);
        };


        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [])

    return <p className={`clock ${className}`}>Time: {time}</p>

}

export default Clock;