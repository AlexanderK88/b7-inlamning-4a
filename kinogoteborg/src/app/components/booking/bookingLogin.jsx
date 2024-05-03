import { Button } from "./button";

export default function BookingLogin({ setBookingState, nextState, isComplete }) {
  return (
    <>
      <h2 className="relative top-0 left-[30%]">loginpage</h2>
      <form className="my-14">
        <div>
          <label>Email Adress</label>
          <input placeholder="exempel@mail.com" className="bg-white m-3"></input>
        </div>
        <div>
          <label>Password</label>
          <input placeholder="Enter you password" className="bg-white m-3"></input>
        </div>

        <Button onClick={() => setBookingState("paymentAsUser")} className={"mt-10"}>
          Logga in
        </Button>
        <Button onClick={() => setBookingState("paymentAsGuest")} className={"my-3"}>
          Betala som gäst
        </Button>
      </form>
    </>
  );
}
