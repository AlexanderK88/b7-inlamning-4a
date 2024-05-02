import { Button } from "./button";

export default function BookingConfirmation({ setBookingState, nextState, isComplete }) {
  return (
    <>
      <p>loginpage</p>
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
