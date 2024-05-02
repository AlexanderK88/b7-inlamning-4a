import { Button } from "./button";

export default function PaymentAsUser({ setBookingState, nextState, isComplete }) {
  return (
    <>
      <p>Paymen modal for logedin user</p>
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
