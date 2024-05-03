import { Button } from "./button";

export default function EditPaymentAsuser({ setBookingState, nextState, isComplete }) {
  return (
    <>
      <p>Payment options as user</p>
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
