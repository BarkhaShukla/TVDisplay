import React, { useState, useEffect } from "react";
import './/App.css';

function CurrentTime() {
    const [time, setTime] = useState(new Date());
    const [dayOfWeek, setDayOfWeek] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const currentDayOfWeek = days[today.getDay()];
        setDayOfWeek(currentDayOfWeek);
    }, []);


    const formatTime = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };

    const getCurrentDate = () => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const today = new Date();
        const month = months[today.getMonth()];
        const day = today.getDate();
        const year = today.getFullYear();

        return `${month} ${day}, ${year}`;
    };

    return (
        <div className="App-header">
            <img src={process.env.PUBLIC_URL+'/img/logo.jpg'} alt="logo" align="left"/>
            <div style={{ textAlign: 'right', padding: '30px'}}>
                {formatTime(time)}
            </div>
            <div className="body">
                <p style={{ margin: '0 auto', }}>Today's date is: <br/> {getCurrentDate()}.<br /><br /> Today is {dayOfWeek}.</p>
            </div>
        </div>
    );
}

export default CurrentTime;
