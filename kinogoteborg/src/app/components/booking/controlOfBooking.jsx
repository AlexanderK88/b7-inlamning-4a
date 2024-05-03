import { Button } from "./button";

export default function BookingControl({ setBookingState, nextState, isComplete }) {
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

      <Button onClick={() => setBookingState("confirmationOfBooking")}>Confirm Booking</Button>
    </>
  );
}
