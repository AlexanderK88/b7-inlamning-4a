import { Button, RedButton } from "./button";

export default function BookingLogin({ setBookingState, nextState, isModalOpen }) {
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
        <div className="flex flex-row m-3 justify-evenly">
          <Button onClick={() => setBookingState("PaymentAsUser")}>Logga in</Button>

          <RedButton
            onClick={() => {
              setBookingState("Login"), isModalOpen(false);
            }}
          >
            Cancel
          </RedButton>
        </div>
        <a href="/forgottenpassword" className="underline hover:text-red-400 text-xs">
          Glömt lösenord
        </a>
      </form>
    </>
  );
}
