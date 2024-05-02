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

  switch (bookingState) {
    case "login":
      return (
        <BookingLogin
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      );

    case "paymentAsUser":
      return (
        <PaymentAsUser
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      );

    case "paymentAsGuest":
      return (
        <PaymentAsGuest
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      );

    case "paymentOption":
      return (
        <PaymentAsUser
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      );

    case "controlOfBooking":
      return (
        <BookingControl
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      );

    case "confirmationOfBooking":
      return (
        <BookingConfirmation
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      );

    case "validateSpecialNeeds":
      return (
        <ValidateSpecialNeeds
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      );

    default:
      return null;
  }
}
