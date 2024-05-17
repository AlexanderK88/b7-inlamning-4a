"use client";

import React, { useEffect, useState } from "react";

import { hoverSeats, handleSeatsToBook } from "@/app/components/booking/multiHover";
import { Loading } from "./loading";
import { fetchSaloon } from "@/scripts/fetchSaloonLayout";

export function RenderSaloon({ seats, saloonNumber, setSeatsToBook }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataForSallon = async () => {
      const fetchData = await fetchSaloon(saloonNumber);
      setData(fetchData);
    };

    fetchDataForSallon();
  }, []);

  if (!data) {
    return <Loading />;
  }

  // Fetch saloon data
  const cinemaData = data.data;

  let collectedSaloonSeats = [];
  let currentRowSeats = [];

  const renderSeat = (i, seatNumber, isSpecial) => {
    return (
      <div
        key={`seat_${i}`}
        data-key={`seat_${i.toString()}${isSpecial ? "_S" : ""}`}
        onMouseOver={(event) => hoverSeats(event, seats, true)}
        onMouseOut={(event) => hoverSeats(event, seats, false)}
        onClick={(event) => {
          handleSeatsToBook(event, setSeatsToBook, seats);
        }}
        className={`m-1 w-6 h-6 border rounded-sm justify-center text-center align-middle

          ${isSpecial ? "bg-blue-400" : "bg-red-400"}
          `}
      >
        {seatNumber}
      </div>
    );
  };

  let counter = 1;
  for (const seat of cinemaData[0].seats) {
    for (let i = 0; i < seat.count; i++) {
      currentRowSeats.push(
        seat.type === "regular"
          ? renderSeat(counter, counter, false)
          : renderSeat(counter, counter, true),
      );
      counter++;
    }

    if (
      cinemaData[0].seats.indexOf(seat) >= cinemaData[0].seats.length - 1 ||
      (seat.row === "same" &&
        cinemaData[0].seats.indexOf(seat) + 1 < cinemaData[0].seats.length &&
        cinemaData[0].seats[cinemaData[0].seats.indexOf(seat) + 1].row !== "same") ||
      seat.row === "next"
    ) {
      collectedSaloonSeats.push(
        <div
          key={`layer_${collectedSaloonSeats.length}`}
          layer-key={`layer_${collectedSaloonSeats.length}:${counter - 1}`}
          className="flex flex-row w-full col-span-6 bg-gray-900 justify-center content-center items-center align-middle"
        >
          {currentRowSeats}
        </div>,
      );
      currentRowSeats = [];
    }
  }

  return (
    <div className="grid w-full h-full justify-items-start grid-flow-row justify- overflow-auto m-0">
      {collectedSaloonSeats}
    </div>
  );
}
