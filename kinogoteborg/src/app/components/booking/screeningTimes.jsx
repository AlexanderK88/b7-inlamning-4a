"use client";

import { useEffect, useState } from "react";
import { fetchScreeningTimes } from "@/scripts/fetchScreeningTimes";

export default function ScreeningTimes({ movieID, setSelectedTime, selectedTime, selectedDate }) {
  const [screeningTimes, setScreeningTimes] = useState([]);

  useEffect(() => {
    const fetchedDataForTimes = async () => {
      const fetchedData = await fetchScreeningTimes(movieID, selectedDate);

      if (fetchedData?.length === 0) {
        const noScreeningTimes = ["No available times"];

        setScreeningTimes(noScreeningTimes);
        setSelectedTime(noScreeningTimes[0]);
      } else {
        const screeningStartTimes = fetchedData.map((data) =>
          data?.attributes?.startTime?.slice(11, 16),
        );

        //to sort screening times in ascending order
        const sortedScreeningTimes = Array.from(screeningStartTimes).sort((a, b) => {
          const [timeA] = a.split(" ");
          const [timeB] = b.split(" ");
          return Number(timeA) - Number(timeB);
        });

        setScreeningTimes(sortedScreeningTimes);
        setSelectedTime(sortedScreeningTimes[0]);
      }
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
          className={`flex items-center justify-center min-w-[8vw] min-h-[4vw] p-2 rounded text-center hover:bg-red-700 text-stone-300 font-bold cursor-pointer 
                    ${time === selectedTime ? "bg-red-900 text-white font-bold" : "bg-gray-500 text-white"} mb-2 md:mb-0 mx-1`}
        >
          {time}
        </div>
      ))}
    </div>
  );
}
