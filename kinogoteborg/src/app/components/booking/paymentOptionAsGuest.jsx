import { Button } from "./button";

export default function PaymentAsGuest({ setBookingState, nextState, isComplete }) {
  return (
    <>
      <p>Edit payment as guest test</p>
      <Button onClick={() => setBookingState(nextState)}>Confirm Booking</Button>
      <br></br>
      <Button
        onClick={() => {
          setBookingState("Login"), isComplete(false);
        }}
      >
        Cancel
      </Button>
    </>
  );
}
