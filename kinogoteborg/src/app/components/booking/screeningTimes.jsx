"use client";

import { useEffect, useState } from "react";

export default function ScreeningTimes({ id, date, onClick }) {
  const [screeningTimes, setScreeningTimes] = useState([]);
  //for indicator of chosen time
  const [selectedTime, setSelectedTime] = useState(null);

  console.log(date);

  ////const formattedDate = createDateIndex(date);

  useEffect(() => {
    if (date) {
    fetch(`http://localhost:3000/api/booking/${id}/times/?date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(id);
        console.log(date);
        console.log(data);
        setScreeningTimes(data.data);
        setSelectedTime(data.data[0]);
      });
    }
  }, [date]);

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

{/*function createDateIndex(dateMonthName) {
  const monthParts = dateMonthName.split(" ");
  const monthIndex = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const year = new Date().getFullYear();
  const month = monthIndex[monthParts[i]];
  const day = monthParts[0];
  return `${year}-${month}-${day}`;
}*/}
