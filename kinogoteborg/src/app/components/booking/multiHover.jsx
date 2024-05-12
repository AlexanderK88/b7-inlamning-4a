"use client";

import next from "next";
import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

// const handleSetChosenSeat = () => {
//     setChosenSeat(fetchKeyData)
// }

const fetchKeyData = (Event) => Event.target.getAttribute("data-key").split("_")[1];

const bookingHover = (Event) => {
  // const value = event.target.getAttribute('data-key').split('_')[1];
  const halfValue = Number(fetchKeyData(Event)) / 2;

  const lowValue = Math.floor(halfValue);
  const highValue = Math.ceil(halfValue);

  return console.log("low: ", lowValue, "high: ", highValue, "sum: ", lowValue + highValue);
};

const hoverSeats = (Event, amountOfSeats) => {
  const seat = fetchKeyData(Event);
  const bookSeats = [];
  // Generate an array of seat keys from seat to seat + amountOfSeats
  for (let i = seat; i < amountOfSeats + Number(seat); i++) {
    bookSeats.push(`seat_${i}`);
  }
  // Iterate over each seat key and apply hover effect
  bookSeats.forEach((seatKey) => {
    const element = document.querySelector(`[data-key="${seatKey}"]`);
    if (element) {
      element.classList.toggle("opacity-50");
    }
  });
};

export { bookingHover, hoverSeats };
