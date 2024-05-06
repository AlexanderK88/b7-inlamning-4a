import { Button } from "./button";

export default function BookingConfirmation({ setBookingState, nextState, isModalOpen, isLogin }) {
  const movieName = "Pulp Fiction";
  const seats = ["1", "2", "3"];
  const date = "14 februari";
  const totalPrice = "300kr";
  const paymentMethod = "Credit";
  const userName = "_USERNAME_";

  const ConfirmUser = () => {
    return (
      <>
        <h2>Tack {userName} för din bokning</h2>
        <div className="mx-3 my-5 flex flex-col justify-start gap-2">
          <p>Film: {movieName}</p>
          <p>Platser: {seats}</p>
          <p>Datum: {date}</p>
          <p>Pris: {totalPrice}</p>
          <p>Betalsätt: {paymentMethod}</p>
        </div>
      </>
    );
  };

  const ConfirmGuest = () => {
    return (
      <>
        <h2 className="text-xl">Tack för din reservation</h2>
        <p className="text-sm w-3/4 mt-4 ">
          Hämta och betala för dina biljetter i kassan senast 2 timmar före filmstart
        </p>

        <div className="mx-3 my-5 flex flex-col justify-start gap-2">
          <p>Film: {movieName}</p>
          <p>Platser: {seats}</p>
          <p>Datum: {date}</p>
          <p>Pris: {totalPrice}</p>
          <p>Betalsätt: {paymentMethod}</p>
        </div>
      </>
    );
  };

  return (
    <>
      {isLogin && <ConfirmUser />}
      {!isLogin && <ConfirmGuest />}
      <Button
        onClick={() => {
          setBookingState("Login"), isModalOpen(false);
        }}
      >
        Enjoy your movie!
      </Button>
    </>
  );
}
