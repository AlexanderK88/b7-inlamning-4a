import { useState } from "react";
import { Button, RedButton } from "./button";

export default function PaymentAsGuest({ setBookingState, isModalOpen, setGuestUser }) {
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [error, setError] = useState("");

  const handlerGuestUser = (e) => {
    e.preventDefault();

    if (!guestName || !guestEmail || !guestPhone) {
      setError("Please fill out all fields");
      console.error(error);
      return;
    }

    setGuestUser({
      name: guestName,
      phone: guestPhone,
      email: guestEmail,
    });

    setBookingState("ControlOfBooking");
  };
  return (
    <>
      <h2>Vänligen fyll i dina kontatuppgifter:</h2>
      <form onSubmit={handlerGuestUser} className="w-1/2 flex flex-col justify-center">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={(e) => {
            setGuestName(e.target.value);
          }}
        />
        <label htmlFor="phone">Phonenumber</label>
        <input
          type="text"
          name="phone"
          placeholder="Phonenumber"
          onChange={(e) => {
            setGuestPhone(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email@example.com"
          onChange={(e) => {
            setGuestEmail(e.target.value);
          }}
        />
        <div className="flex flex-row mt-10 justify-evenly">
          {/* <Button onClick={() => setBookingState("ControlOfBooking")}>Confirm Booking</Button> */}
          <button>Continue</button>
          <RedButton
            onClick={() => {
              setBookingState("Login"), isModalOpen(false);
            }}
          >
            Cancel
          </RedButton>
        </div>
        {error && <div>{error}</div>}
      </form>
    </>
  );
}
