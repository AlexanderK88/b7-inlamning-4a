"use client";
import { Button } from "./button";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function BookingLogin({ setBookingState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      setBookingState("PaymentAsUser");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="relative top-0 left-[30%] text-xl">loginpage</h2>
      <form className="mt-14 mb-6" onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="font-bold" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button className={"mt-10"}>Logga in</Button>
        <Button onClick={() => setBookingState("PaymentAsGuest")} className={"my-3"}>
          Betala som gäst
        </Button>
        <div className="flex flex-col text-xs ">
          <a href="/signup" className="hover:text-red-400 underline">
            Skapa nytt konto
          </a>
          <a href="/forgottenpassword" className="hover:text-red-400 underline">
            Glömt lösenord
          </a>
        </div>
      </form>
    </>
  );
}
