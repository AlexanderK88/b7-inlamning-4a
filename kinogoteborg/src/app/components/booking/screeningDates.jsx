"use client";

import { useEffect, useState } from "react";
import { fetchScreeningDates } from "@/scripts/fetchScreeningDates";

export default function ScreeningDates({ movieID, setSelectedDate, selectedDate }) {
  const [screeningDates, setScreeningDates] = useState([]);

  useEffect(() => {
    const fetchedDataForDates = async () => {
      const fetchedData = await fetchScreeningDates(movieID);

      if (fetchedData?.length === 0) {
        const noScreeningDates = ["No available dates"];

        setScreeningDates(noScreeningDates);
        setSelectedDate(noScreeningDates[0]);
      } else {
        //to create Month name to later render
        //one screening date per day, for example "19 June"
        const todaysDate = new Date();
        const todaysMonth = todaysDate.getMonth() + 1;
        const todaysYear = todaysDate.getFullYear();
        const screeningDays = new Set();

        fetchedData.forEach((screening) => {
          const date = new Date(screening.attributes.date);
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          if (year === todaysYear && month === todaysMonth) {
            screeningDays.add(`${day} ${createMonthName(month)}`);
          }
        });

        //to sort screening dates in ascending order
        const sortedScreeningDates = Array.from(screeningDays).sort((a, b) => {
          const [dayA] = a.split(" ");
          const [dayB] = b.split(" ");
          return Number(dayA) - Number(dayB);
        });

        setScreeningDates(sortedScreeningDates);
        setSelectedDate(sortedScreeningDates[0]);
      }
    };

    fetchedDataForDates();
  }, [movieID]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-wrap justify-center my-auto">
      {screeningDates.map((date, index) => (
        <div
          key={index}
          onClick={() => handleDateClick(date)}
          className={`flex items-center justify-center min-w-[8vw] min-h-[4vw] p-2 rounded text-center hover:bg-red-700 text-stone-300 font-bold cursor-pointer 
                    ${date === selectedDate ? "bg-red-900 text-white font-bold" : "bg-gray-500 text-white"} mb-2 md:mb-0 mx-1`}
        >
          {date}
        </div>
      ))}
    </div>
  );
}

function createMonthName(monthIndex) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[monthIndex - 1];
}
