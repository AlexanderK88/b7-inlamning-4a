import { Button } from "./button";
import { useState } from "react";
export default function PaymentAsUser({ setBookingState, nextState, isComplete }) {
  const [paymentOption, setPaymentOption] = useState(undefined);

  return (
    <>
      <p>Payment modal for logedin user</p>

      <Button onClick={() => setBookingState(nextState)}>Confirm Booking</Button>
      <br></br>
      <Button
        onClick={() => {
          setBookingState("intro"), isComplete(false);
        }}
      >
        Cancel
      </Button>
    </>
  );
}
