import { Button, RedButton } from "./button";

export default function BookingControl({
  setBookingState,
  isModalOpen,
  movieName,
  seatsToBook,
  session,
  time,
  date,
  guestUser,
  uuid,
}) {
  const totalPrice = seatsToBook[0].length * 130;
  const paymentMethod = "I Kassa";
  const userName = guestUser.name;
  const userID = session?.user?.id;

  async function confirmBookingDb() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      uuid: uuid,
      userID: userID,
      guestName: guestUser.name,
      guestPhone: guestUser.phone,
      guestEmail: guestUser.email,
      isBooked: true,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/booking/seats", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <h2 className="text-2xl underline mt-2">Kontrollera bokningen</h2>

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
        <Button
          onClick={() => {
            confirmBookingDb();
            setBookingState("ConfirmationOfBooking");
          }}
        >
          Bekräfta Bokning
        </Button>
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
