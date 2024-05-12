"use client"; 

import { useEffect, useState } from "react";

export default function ScreeningDates({ id }) {
    const [screeningDates, setScreeningDates] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/booking/${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(id);
            console.log(data);
            setScreeningDates(data.data);
        })
    }, [id]);

    return (
        <div>
            {screeningDates.map((date, index) => (
            <ScreeningDates key={index} date={date} />
            ))}
        </div>
    );
}

export default function ScreeningTimes({ date }) {
    
    return (
        <div>

        </div>
    )
}