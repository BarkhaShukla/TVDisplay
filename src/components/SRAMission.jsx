import React, { useState, useEffect } from "react";
import './/App.css';

function SRAMission() {
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
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };
    return (
        <div className="App-header">
           <img src="../public/img/logo.jpg" alt="logo" align="left"/>
            <div style={{ textAlign: 'right', padding: '30px'}}>
                {formatTime(time)}
            </div>
            <div className="body">
                <p>I am in a hospital where I focus on brain recovery.</p>
                
            </div>
        </div>
    );
}

export default SRAMission;
