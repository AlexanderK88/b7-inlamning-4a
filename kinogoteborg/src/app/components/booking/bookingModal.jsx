"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/app/components/booking/button";

// first step: login
import BookingLogin from "@/app/components/booking/bookingLogin";
// Steps as a user
import PaymentAsUser from "@/app/components/booking/paymentAsUser";
import EditPaymentAsUser from "@/app/components/booking/editPaymentAsUser";
// Steps as a guest
// import BookingAsGuest from "@/app/components/booking/bookingAsGuest";
import PaymentAsGuest from "@/app/components/booking/paymentOptionAsGuest";
// Endstep validation for all
import BookingControl from "@/app/components/booking/controlOfBooking";
import BookingConfirmation from "@/app/components/booking/bookingConfirmation";
// Check for special needs
import ValidateSpecialNeeds from "@/app/components/booking/validateSpecialNeeds";
import SpecialNeedsLogin from "@/app/components/booking/specialNeedsLogin";

export const ModalHeader = ({ input }) => {
  return (
    <div class="flex justify-center">
      <h2 class="relative text-2xl text-white underline underline-offset-2">{input}</h2>
    </div>
  );
};

export default function BookingModal({ isModalOpen, isLogin, isVerified, specialNeeds }) {
  const [bookingState, setBookingState] = useState("Login");

  useEffect(() => {
    if (isLogin) {
      setBookingState("PaymentAsUser");
    } else if (!isVerified && specialNeeds) {
      setBookingState("ValidateSpecialNeeds");
    }
  }, [isLogin, specialNeeds, isVerified]);

  return (
    <>
      <div className="relative float-start top-0 left-[90%]">
        <Button
          onClick={() => {
            setBookingState("Login"), isModalOpen(false);
          }}
        >
          X
        </Button>
      </div>

      {bookingState === "Login" ? (
        <BookingLogin setBookingState={setBookingState} isModalOpen={isModalOpen} />
      ) : null}

      {/* OPTIONS FOR USERS */}
      {bookingState === "PaymentAsUser" ? (
        <PaymentAsUser setBookingState={setBookingState} isModalOpen={isModalOpen} />
      ) : null}

      {bookingState === "EditPaymentAsUser" ? (
        <EditPaymentAsUser setBookingState={setBookingState} isModalOpen={isModalOpen} />
      ) : null}

      {/* OPTIONS FOR GUESTS */}

      {bookingState === "PaymentAsGuest" ? (
        <PaymentAsGuest setBookingState={setBookingState} isModalOpen={isModalOpen} />
      ) : null}

      {/* ENDSTEP OF BOOKING  */}
      {bookingState === "ControlOfBooking" ? (
        <BookingControl setBookingState={setBookingState} isModalOpen={isModalOpen} />
      ) : null}

      {bookingState === "ConfirmationOfBooking" ? (
        <BookingConfirmation
          setBookingState={setBookingState}
          isModalOpen={isModalOpen}
          isLogin={isLogin}
        />
      ) : null}

      {bookingState === "ValidateSpecialNeeds" ? (
        <ValidateSpecialNeeds setBookingState={setBookingState} isModalOpen={isModalOpen} />
      ) : null}

      {bookingState === "specialkNeedsLogin" ? (
        <SpecialNeedsLogin setBookingState={setBookingState} isModalOpen={isModalOpen} />
      ) : null}
    </>
  );
}
