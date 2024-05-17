import { Button, RedButton } from "./button";

export default function EditPaymentAsuser({ setBookingState, nextState, isModalOpen }) {
  return (
    <>
      <p>Payment options as user</p>

      <div className="flex flex-row mt-8 justify-evenly">
        <Button onClick={() => setBookingState("ControlOfBooking")}>Confirm Booking</Button>
        <RedButton
          onClick={() => {
            setBookingState("intro"), isModalOpen(false);
          }}
        >
          Cancel
        </RedButton>
      </div>
    </>
  );
}
