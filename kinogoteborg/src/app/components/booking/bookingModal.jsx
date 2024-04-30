"use client";

import React, { useState } from "react";
import { Button } from "@/app/components/booking/button";

export default function BookingModal({ isComplete }) {
  const [bookingState, setBookingState] = useState("intro");

  switch (bookingState) {
    case "intro":
      return (
        <>
          <h2>Welcome to our booking system!</h2>
          <Button onClick={() => setBookingState("bookingForm")} className={"w-[10em]"}>
            first step
          </Button>
          <p>test</p>
        </>
      );
    case "bookingForm":
      return (
        <>
          <h2>Booking Form</h2>
          {/* Add your booking form here */}
          <div className="flex flex-row">
            <Button onClick={() => setBookingState("confirmation")}>Confirm Booking</Button>
            <Button
              onClick={() => {
                setBookingState("intro"), isComplete(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </>
      );
    case "confirmation":
      return (
        <>
          <h2>Confirmation</h2>
          <p>Your booking has been confirmed!</p>
          <Button
            onClick={() => {
              setBookingState("intro"), isComplete(false);
            }}
          >
            Close
          </Button>
        </>
      );
    default:
      return null;
  }
}
