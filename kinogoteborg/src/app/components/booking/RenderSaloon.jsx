"use client";

import React, { Suspense, useEffect, useState } from "react";

import { hoverSeats, handleSeatsToBook } from "@/app/components/booking/multiHover";
import { Loading } from "./loading";
import { fetchSaloon } from "@/scripts/fetchSaloonLayout";
import { fetchBookedSeats } from "@/scripts/fetchSeatsFromDB";

export function RenderSaloon({
  seats,
  saloonNumber,
  setSeatsToBook,
  movieID,
  selectedDate,
  selectedTime,
  seatsToBook,
  userID,
}) {
  const [data, setData] = useState();
  const [bookings, setBooking] = useState();
  let sortedBooking;

  useEffect(() => {
    const fetchDataForSaloon = async () => {
      const fetchData = await fetchSaloon(saloonNumber);
      setData(fetchData);
      const fetchBookings = await fetchBookedSeats(movieID, selectedDate, selectedTime);
      setBooking(fetchBookings);
    };

    fetchDataForSaloon();
  }, [seatsToBook, selectedDate, selectedTime]);

  useEffect(() => {
    if (Array.isArray(bookings)) {
      const payload = bookings.map((booking) => booking.details.seats);
      const flat = payload.flat();
      const set = [...new Set(flat)];
      sortedBooking = set;
    }

    //RESETS FROM BLACK
    var elements = document.querySelectorAll('[data-key*="_B"]');
    elements?.forEach((element) => {
      var dataKeyValue = element.getAttribute("data-key");
      element.classList.remove("!bg-black");
      var newDataKeyValue = dataKeyValue.replace("_B", "");
      element.setAttribute("data-key", newDataKeyValue);
    });

    //ADDS BLACK AFTER FETCH FROM DB
    sortedBooking?.forEach((seatKey) => {
      const element = document.querySelector(`[data-key="${seatKey}"]`);
      if (element) {
        element.classList.add("!bg-black");
        element.setAttribute("data-key", `${seatKey}_B`);
      }
    });
  }, [bookings, selectedDate, selectedTime]);

  useEffect(() => {
    const elements = document.getElementsByClassName("!bg-white");
    if (elements.length > 0) {
      Array.from(elements).forEach((element) => {
        element.classList.remove("!bg-white");
      });
    }
  }, [selectedDate, selectedTime]);

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

  const bookedSeat = (i, seatNumber) => {
    return (
      <div
        key={`seat_${i}`}
        data-key={`seat_${i.toString()}_B`}
        className={`m-1 w-6 h-6 border rounded-sm justify-center text-center align-middle bg-black`}
      >
        {seatNumber}
      </div>
    );
  };

  let counter = 1;
  for (const seat of cinemaData[0].seats) {
    for (let i = 0; i < seat.count; i++) {
      if (sortedBooking?.includes(counter)) {
        currentRowSeats.push(bookedSeat(counter, counter));
      } else {
        currentRowSeats.push(
          seat.type === "regular"
            ? renderSeat(counter, counter, false)
            : renderSeat(counter, counter, true),
        );
      }
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
    <div className="grid w-full h-full justify-items-start grid-flow-row overflow-auto m-0">
      <Suspense>{collectedSaloonSeats}</Suspense>
    </div>
  );
}
