import { Button, RedButton } from "./button";

export default function PaymentAsGuest({ setBookingState, isModalOpen }) {
  return (
    <>
      <p>Edit payment as guest test</p>

      <div className="flex flex-row mt-10 justify-evenly">
        <Button onClick={() => setBookingState("ControlOfBooking")}>Confirm Booking</Button>

        <RedButton
          onClick={() => {
            setBookingState("Login"), isModalOpen(false);
          }}
        >
          Cancel
        </RedButton>
      </div>
    </>
  );
}
