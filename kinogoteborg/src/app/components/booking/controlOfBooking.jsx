import { Button, RedButton } from "./button";

export default function BookingControl({ setBookingState, isModalOpen }) {
  const movieName = "Pulp Fiction";
  const seats = ["1", "2", "3"];
  const date = "14 februari";
  const totalPrice = "300kr";
  const paymentMethod = "Credit";

  return (
    <>
      <h2 className="text-2xl underline mt-2">Kontrollera bokningen</h2>

      <div className="mx-3 my-5 flex flex-col justify-start gap-2">
        <p>Film: {movieName}</p>
        <p>Platser: {seats}</p>
        <p>Datum: {date}</p>
        <p>Pris: {totalPrice}</p>
        <p>Betalsätt: {paymentMethod}</p>
      </div>

      <div className="text-xs font-extralight w-[80%]">
        Kontrollera att alla uppgifter stämmer och konfirmera betalningen genom att klicka på betala
      </div>
      <div className="flex flex-row mt-8 justify-evenly">
        <Button onClick={() => setBookingState("ConfirmationOfBooking")}>Confirm Booking</Button>
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
