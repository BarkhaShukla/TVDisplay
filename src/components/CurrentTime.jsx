import React, { useState, useEffect } from "react";
import './/App.css';
import { logo } from './/shirley-ryan-abilitylab-vector-logo 2.svg';

function CurrentTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const formatTime = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hours >= 12 ? "pm" : "am";
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };


    return (
        <div className="body">
            <p className="Time">
                <span className="Logo">
                    <img src={logo} alt="" />
                </span>
                {formatTime(time)}
            </p>

        </div>
    );
}

export default CurrentTime;
