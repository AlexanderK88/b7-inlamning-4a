"use client";

import React, { Suspense, useEffect, useState } from "react";
import { bookingHover, hoverSeats } from "@/app/components/booking/multiHover";

export function RenderSaloon({ seats, data }) {
  console.log("rendersaloon render");
  // try {

  // Fetch saloon data
  const cinemaData = data.data;

  // Check if saloon data is empty
  if (!cinemaData || cinemaData.length === 0) {
    console.error("Saloon not found.");
    return null;
  }

  let collectedSaloonSeats = [];
  let currentRowSeats = [];

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
          layer-key={`layer_${collectedSaloonSeats.length}`}
          className="flex flex-row w-full col-span-6 bg-gray-900 justify-center content-center items-center align-middle"
        >
          {currentRowSeats}
        </div>,
      );
      currentRowSeats = [];
    }
  }

  // useEffect(() => {
  //   async function fetchSaloonLayout() {
  //     try {
  //       const layout = await fetchSaloon(saloonNumber);
  //       setSaloonLayout(layout || []);
  //     } catch (error) {
  //       console.error("Error fetching saloon layout:", error);
  // }}}, []); // Run once on component mount

  //   return (
  //     <div className=" grid border max-w-full justify-items-start grid-flow-row justify-evenly overflow-auto mt-12">
  //     <div className="grid w-full h-full justify-items-start grid-flow-row justify-evenly overflow-auto m-0">
  //       {saloonLayout.length === 0 ? <div>Loading...</div> : saloonLayout}
  //       {/* <Suspense fallback={<p>Loading...</p>}>
  //         <RenderProcess saloonNumber={1}/>
  //       </Suspense> */}
  //     </div>
  //   );
  // }

  if (currentRowSeats.length > 0) console.log("success build");
  return (
    <div className="grid w-full h-full justify-items-start grid-flow-row justify- overflow-auto m-0">
      {/* {collectedSaloonSeats.length === 0 ? <div>Loading...</div> : {collectedSaloonSeats}} */}
      {collectedSaloonSeats}
    </div>
  );
  // } catch (error) {
  //   console.error("Error:", error);
  //   return null;
  // }
}
