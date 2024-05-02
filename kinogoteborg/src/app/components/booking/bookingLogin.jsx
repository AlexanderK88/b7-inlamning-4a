import { Button } from "./button";

export default function BookingLogin({ setBookingState, nextState, isComplete }) {
  return (
    <>
      <h2>loginpage</h2>
      <form>
        <div>
          <label>Email Adress</label>
          <input placeholder="exempel@mail.com" className="m-3"></input>
        </div>
        <div>
          <label>Password</label>
          <input placeholder="Enter you password" className="m-2"></input>
        </div>

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
      </form>
    </>
  );
}
