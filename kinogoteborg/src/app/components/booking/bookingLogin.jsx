import { Button } from "./button";

export default function BookingLogin({ setBookingState, nextState, isComplete }) {
  return (
    <>
      <h2>loginpage</h2>
      <form>
        <label>Email Adress</label>
        <input placeholder="exempel@mail.com"></input>
      </form>

      <Button onClick={() => setBookingState("paymentAsUser")} className={"mt-10"}>
        Logga in
      </Button>
      <Button onClick={() => setBookingState("paymentAsGuest")} className={"my-3"}>
        Betala som gäst
      </Button>
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
