"use client";

import { useEffect, useState } from "react";

export default function ScreeningDates({ id, onClick }) {
  const [screeningDates, setScreeningDates] = useState([]);
  //for indicator of chosen date
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/booking/${id}/dates`)
      .then((res) => res.json())
      .then((data) => {
        console.log(id);
        console.log(data);
        setScreeningDates(data.data.map(screening => screening.attributes.date));
        setSelectedDate(data.data[0].attributes.date);
      });
  }, [id]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onClick(date);
  };

  return (
    <div>
      {screeningDates.map((date, index) => (
        <div
          key={index}
          onClick={() => handleDateClick(date)}
          className={`w-[8vw] h-[4vw] p-2 rounded text-center hover: bg-red-700 text-stone-300 font-bold cursor-pointer 
                    ${date === selectedDate ? "bg-red-800 text-stone-300 font-bold" : "bg-gray-200 text-white"}`}
        >
          {date}
        </div>
      ))}
    </div>
  );
}
