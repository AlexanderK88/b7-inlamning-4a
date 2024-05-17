"use client";

import { useEffect, useState } from "react";
import { fetchScreeningTimes } from "@/scripts/fetchScreeningTimes";

export default function ScreeningTimes({ id, setSelectedTime, selectedTime, selectedDate }) {
  const [screeningTimes, setScreeningTimes] = useState([]);
  console.log(selectedDate);

  useEffect(() => {
    const fetchedDataForTimes = async () => {
      const fetchedData = await fetchScreeningTimes(id, selectedDate);
      setScreeningTimes(fetchedData.data);
      setSelectedTime(fetchedData.data[0]);
    };

    fetchedDataForTimes();
  }, [selectedDate]);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="flex flex-wrap justify-center my-auto">
      {screeningTimes.map((time, index) => (
        <div
          key={index}
          onClick={() => handleTimeClick(time)}
          className={`flex items-center justify-center w-[8vw] h-[4vw] p-2 rounded text-center hover:bg-red-700 text-stone-300 font-bold cursor-pointer 
                    ${time === selectedTime ? "bg-red-900 text-white font-bold" : "bg-gray-500 text-white"} mb-2 md:mb-0 mx-1`}
        >
          {time}
        </div>
      ))}
    </div>
  );
}
