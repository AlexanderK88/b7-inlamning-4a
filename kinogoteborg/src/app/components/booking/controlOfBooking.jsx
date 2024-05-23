import { Button, RedButton } from "./button";

export default function BookingControl({
  setBookingState,
  isModalOpen,
  movieName,
  seatsToBook,
  session,
  time,
  date,
}) {
  const totalPrice = seatsToBook[0].length * 130;
  const paymentMethod = "I Kassa";
  const userName = "_USERNAME_";

  return (
    <>
      <h2 className="text-2xl underline mt-2">Kontrollera bokningen (controlOfBooking)</h2>

      <div className="mx-3 my-5 flex flex-col justify-start gap-2">
        <p>Film: {movieName}</p>
        <p>Antal Platser: {seatsToBook[0].length}</p>
        <p>Datum: {date}</p>
        <p>Tid: {time}</p>
        <p>Pris: {totalPrice}</p>
        <p>Betalsätt: {paymentMethod}</p>
      </div>

      <div className="text-xs font-extralight w-[80%]">
        Kontrollera att alla uppgifter stämmer och konfirmera genom att klicka på bekräfta
      </div>
      <div className="flex flex-row mt-8 justify-evenly">
        <Button onClick={() => setBookingState("ConfirmationOfBooking")}>Bekräfta Bokning</Button>
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
