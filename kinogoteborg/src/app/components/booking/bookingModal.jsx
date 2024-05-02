"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/app/components/booking/button";
import BookingLogin from "@/app/components/booking/bookingLogin";
import BookingAsGuest from "@/app/components/booking/bookingAsGuest";
import BookingConfirmation from "@/app/components/booking/bookingConfirmation";
import BookingControl from "@/app/components/booking/controlOfBooking";
import PaymentAsUser from "@/app/components/booking/paymentAsUser";
import PaymentAsGuest from "@/app/components/booking/paymentOptions";
import ValidateSpecialNeeds from "@/app/components/booking/validateSpecialNeeds";

export default function BookingModal({ isComplete, knownUser }) {
  const [bookingState, setBookingState] = useState("login");

  if (knownUser) setBookingState("paymentAsUser");

  return (
    <>
      {bookingState === "login" ? (
        <BookingLogin
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      ) : null}

      {bookingState === "paymentAsUser" ? (
        <PaymentAsUser
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      ) : null}

      {bookingState === "paymentAsGuest" ? (
        <PaymentAsGuest
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      ) : null}

      {bookingState === "paymentOption" ? (
        <PaymentAsUser
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      ) : null}

      {bookingState === "controlOfBooking" ? (
        <BookingControl
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      ) : null}

      {bookingState === "confirmationOfBooking" ? (
        <BookingConfirmation
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      ) : null}

      {bookingState === "validateSpecialNeeds" ? (
        <ValidateSpecialNeeds
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      ) : null}
    </>
  );
}
