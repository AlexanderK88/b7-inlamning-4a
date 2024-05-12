"use client";

import next from "next";
import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

// const handleSetChosenSeat = () => {
//     setChosenSeat(fetchKeyData)
// }

const fetchKeyData = (event) => event.target.getAttribute("data-key").split("_")[1];

const bookingHover = (event) => {
  // const value = event.target.getAttribute('data-key').split('_')[1];
  const halfValue = Number(fetchKeyData(event)) / 2;

  const lowValue = Math.floor(halfValue);
  const highValue = Math.ceil(halfValue);

  return console.log("low: ", lowValue, "high: ", highValue, "sum: ", lowValue + highValue);
};

const hoverSeats = (event) => {
  const seat = fetchKeyData(event);
};

export { bookingHover };
