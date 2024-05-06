import { Button } from "./button";

export default function BookingLogin({ setBookingState, nextState, isModalOpen }) {
  return (
    <>
      <h2 className="relative top-0 left-[30%]">loginpage</h2>
      <form className="mt-14 mb-6">
        <div>
          <label>Email Adress</label>
          <input placeholder="exempel@mail.com" className="bg-white m-3"></input>
        </div>
        <div>
          <label>Password</label>
          <input placeholder="Enter you password" className="bg-white m-3"></input>
        </div>

        <Button onClick={() => setBookingState("PaymentAsUser")} className={"mt-10"}>
          Logga in
        </Button>
        <Button onClick={() => setBookingState("PaymentAsGuest")} className={"my-3"}>
          Betala som gäst
        </Button>
      </form>
      <div className="flex flex-col text-xs ">
        <a href="/signup" className="hover:text-red-400 underline">
          Skapa nytt konto
        </a>
        <a href="/forgottenpassword" className="hover:text-red-400 underline">
          Glömt lösenord
        </a>
      </div>
    </>
  );
}
