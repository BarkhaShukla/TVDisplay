import React, { useState, useEffect } from "react";
import './/App.css';

function SRALabImg() {
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
        <img src={process.env.PUBLIC_URL+'/img/logo.jpg'} alt="logo" align="left"/>
        <div style={{ textAlign: 'right', padding: '30px'}}>
            {formatTime(time)}
        </div>
            <div>
                <img src={process.env.PUBLIC_URL+'/img/entrance1.jpg'} alt="entrance" style={{height: "75vh", width: "100vw", align: "center" }} />
            </div>

        </div >

    );
}


export default SRALabImg;
