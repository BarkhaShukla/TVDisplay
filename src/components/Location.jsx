import React, { useState, useEffect } from "react";
import './/App.css';

function Location() {
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
        <div className="header">
            <p className="Time">
                <img src="/img/logo.jpg" alt="" align="left" />
                {formatTime(time)}
            </p>
            <div className="body" style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
                <p style={{ margin: '0 auto', }}>I am in Chicago, IL <br />
                    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
                        <img src="/img/skyline.png" alt="" style={{ display: "block", margin: "0 auto", height: "55vh", width:"100vw"}} />
                    </div>
                </p>
            </div>
        </div>
    );
}


export default Location;
