"use client";

import React, { Suspense, useEffect, useState } from "react";
import { fetchSaloon } from "@/scripts/fetchSaloonLayout";
import { bookingHover, hoverSeats } from "@/app/components/booking/multiHover";

export async function RenderSaloon({ saloonNumber, seats }) {
  try {
    const data = await fetchSaloon(saloonNumber);
    // Fetch saloon data
    const cinemaData = data.data;

    // Check if saloon data is empty
    if (!cinemaData || cinemaData.length === 0) {
      console.error("Saloon not found.");
      return null;
    }

    let collectedSaloonSeats = [];
    let currentRowSeats = [];

    // const regular = (i, seatNumber) => {
    //   const classNames = clsx(
    //     "m-2",
    //     "bg-red-400",
    //     "w-6",
    //     "h-6",
    //     "border",
    //     "hover:bg-gray-400",
    //     "rounded-sm",
    //     "text-center",
    //     "align-middle",
    //     "justify-center"
    //   );
    //   return (
    //     <div
    //       key={`seat_${i.toString()}`}
    //       data-key={`seat_${i.toString()}`}
    //       className={classNames}
    //       onMouseOver={bookingHover}>
    //       {seatNumber}
    //     </div>
    //   );
    // };

    // const special = (i, seatNumber) => {
    //   return (
    //     <div
    //       key={`seat_${i.toString()}`}
    //       data-key={`seat_${i.toString()}`}
    //       onMouseOver={bookingHover}
    //       className="m-2 bg-blue-400 w-6 h-6 border hover:bg-blue-200 active:bg-black rounded-sm justify-center text-center align-middle">
    //       {seatNumber}
    //     </div>
    //   );
    // };

    const renderSeat = (i, seatNumber, isSpecial) => {
      return (
        <div
          key={`seat_${i}`}
          data-key={`seat_${i.toString()}`}
          onMouseOver={(event) => hoverSeats(event, seats)}
          onMouseOut={(event) => hoverSeats(event, seats)}
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
            className="flex flex-row w-full col-span-6 bg-gray-900 justify-center content-center items-center align-middle"
          >
            {currentRowSeats}
          </div>,
        );
        currentRowSeats = [];
      }
    }

    if (currentRowSeats.length > 0) console.log("success build");
    return (
      <div className="grid w-full h-full justify-items-start grid-flow-row justify- overflow-auto m-0">
        {collectedSaloonSeats}
      </div>
    );
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
