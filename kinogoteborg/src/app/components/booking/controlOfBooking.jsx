import { Button } from "./button";

export default function BookingControl({ setBookingState, nextState, isComplete }) {
  return (
    <>
      <p>Control of the booking (last chance to change)</p>
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
