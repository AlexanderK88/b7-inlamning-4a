"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/app/components/booking/button";
import BookingLogin from "@/app/components/booking/bookingLogin";
import BookingAsGuest from "@/app/components/booking/bookingAsGuest";
import BookingConfirmation from "@/app/components/booking/bookingConfirmation";
import BookingControl from "@/app/components/booking/controlOfBooking";
import PaymentAsUser from "@/app/components/booking/paymentAsUser";
import PaymentAsGuest from "@/app/components/booking/editPaymentAsUser";
import ValidateSpecialNeeds from "@/app/components/booking/validateSpecialNeeds";
import EditPaymentAsUser from "@/app/components/booking/editPaymentAsUser";

export const ModalHeader = ({ input }) => {
  return (
    <div class="flex justify-center">
      <h2 class="relative text-2xl text-white underline underline-offset-2">{input}</h2>
    </div>
  );
};

const ModalExit = () => {
  return (
    <div className="relative float-start top-0 left-[90%]">
      <Button
        className={"p-0"}
        onClick={() => {
          setBookingState("intro"), isComplete(false);
        }}
      >
        X
      </Button>
    </div>
  );
};

export default function BookingModal({ isComplete, knownUser }) {
  const [bookingState, setBookingState] = useState("login");

  if (knownUser) setBookingState("paymentAsUser");

  return (
    <>
      <ModalExit />

      {bookingState === "login" ? (
        <BookingLogin setBookingState={setBookingState} isComplete={isComplete} />
      ) : null}

      {/* OPTIONS FOR USERS */}
      {bookingState === "paymentAsUser" ? (
        <PaymentAsUser
          setBookingState={setBookingState}
          nextState={"controlOfBooking"}
          isComplete={isComplete}
        />
      ) : null}

      {bookingState === "editPaymentAsUser" ? (
        <EditPaymentAsUser
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      ) : null}

      {/* OPTIONS FOR GUESTS */}
      {bookingState === "paymentOptionAsGuest" ? (
        <BookingAsGuest
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      ) : null}

      {/* ENDSTEP OF BOOKING  */}
      {bookingState === "controlOfBooking" ? (
        <BookingControl
          setBookingState={setBookingState}
          nextState={"confirmationOfBooking"}
          isComplete={isComplete}
        />
      ) : null}

      {bookingState === "confirmationOfBooking" ? (
        <BookingConfirmation setBookingState={setBookingState} isComplete={isComplete} />
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
