"use client";

import { useEffect, useState } from "react";

export default function ScreeningTimes({ id, date, onClick }) {
  const [screeningTimes, setScreeningTimes] = useState([]);
  //for indicator of chosen time
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    if (date) {
      fetch(`http://localhost:3000/api/booking/${id}/times`)
        .then((res) => res.json())
        .then((data) => {
          console.log(id);
          console.log(date);
          console.log(data);
          setScreeningTimes(data.data);
          setSelectedTime(data.data[0]);
        });
    }
  }, [id, date]);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    onClick(time);
  };

  return (
    <div>
      {screeningTimes.map((time, index) => (
        <div
          key={index}
          onClick={() => handleTimeClick(time)}
          className={`w-[8vw] h-[4vw] p-2 rounded text-center hover: bg-red-700 text-stone-300 font-bold cursor-pointer 
                    ${time === selectedTime ? "bg-red-800 text-stone-300 font-bold" : "bg-gray-200 text-white"}`}
        >
          {time}
        </div>
      ))}
    </div>
  );
}
