import { Button } from "./button";

export default function BookingConfirmation({ setBookingState, nextState, isComplete }) {
  return (
    <>
      <p>Booking confirmation</p>
      <Button
        onClick={() => {
          setBookingState("intro"), isComplete(false);
        }}
      >
        Enjoy your movie!
      </Button>
    </>
  );
}
