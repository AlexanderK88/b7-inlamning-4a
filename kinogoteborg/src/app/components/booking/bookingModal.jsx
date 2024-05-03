"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/app/components/booking/button";

// first step: login
import BookingLogin from "@/app/components/booking/bookingLogin";
// Steps as a user
import PaymentAsUser from "@/app/components/booking/paymentAsUser";
import EditPaymentAsUser from "@/app/components/booking/editPaymentAsUser";
// Steps as a guest
import BookingAsGuest from "@/app/components/booking/bookingAsGuest";
import PaymentAsGuest from "@/app/components/booking/paymentOptionAsGuest";
// Endstep validation for all
import BookingControl from "@/app/components/booking/controlOfBooking";
import BookingConfirmation from "@/app/components/booking/bookingConfirmation";
// Check for special needs
import ValidateSpecialNeeds from "@/app/components/booking/validateSpecialNeeds";

export const ModalHeader = ({ input }) => {
  return (
    <div class="flex justify-center">
      <h2 class="relative text-2xl text-white underline underline-offset-2">{input}</h2>
    </div>
  );
};

export default function BookingModal({ isComplete, isVerified, isLogin, specialNeeds }) {
  const [bookingState, setBookingState] = useState("Login");

  // if (isLogin) setBookingState("PaymentAsUser");

  // if(!isVerified && specialNeeds) {setBookingState("ValidateSpecialNeeds")};

  useEffect(() => {
    if (isLogin) {
      setBookingState("PaymentAsUser");
    } else if (!isVerified && specialNeeds) {
      setBookingState("ValidateSpecialNeeds");
    }
  }, [isLogin, isVerified, specialNeeds]);

  return (
    <>
      <div className="relative float-start top-0 left-[90%]">
        <Button
          className={"p-0"}
          onClick={() => {
            setBookingState("Login"), isComplete(false);
          }}
        >
          X
        </Button>
      </div>

      {bookingState === "Login" ? (
        <BookingLogin setBookingState={setBookingState} isComplete={isComplete} />
      ) : null}

      {/* OPTIONS FOR USERS */}
      {bookingState === "PaymentAsUser" ? (
        <PaymentAsUser
          setBookingState={setBookingState}
          nextState={"ControlOfBooking"}
          isComplete={isComplete}
        />
      ) : null}

      {bookingState === "EditPaymentAsUser" ? (
        <EditPaymentAsUser
          setBookingState={setBookingState}
          nextState={"ControlOfBooking"}
          isComplete={isComplete}
        />
      ) : null}

      {/* OPTIONS FOR GUESTS */}

      {bookingState === "BookingAsGuest" ? (
        <BookingAsGuest
          setBookingState={setBookingState}
          nextState={"PaymentAsGuest"}
          isComplete={isComplete}
        />
      ) : null}

      {bookingState === "PaymentAsGuest" ? (
        <PaymentAsGuest
          setBookingState={setBookingState}
          nextState={"ControlOfBooking"}
          isComplete={isComplete}
        />
      ) : null}

      {/* ENDSTEP OF BOOKING  */}
      {bookingState === "ControlOfBooking" ? (
        <BookingControl
          setBookingState={setBookingState}
          nextState={"ConfirmationOfBooking"}
          isComplete={isComplete}
        />
      ) : null}

      {bookingState === "ConfirmationOfBooking" ? (
        <BookingConfirmation setBookingState={setBookingState} isComplete={isComplete} />
      ) : null}

      {bookingState === "ValidateSpecialNeeds" ? (
        <ValidateSpecialNeeds
          setBookingState={setBookingState}
          nextState={"bookingForm"}
          isComplete={isComplete}
        />
      ) : null}
    </>
  );
}
