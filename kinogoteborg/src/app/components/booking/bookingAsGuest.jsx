import { Button } from "./button";

export default function BookingAsGuest({ setBookingState, nextState, isComplete }) {
  return (
    <>
      <h2>Booking as a guest</h2>
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
