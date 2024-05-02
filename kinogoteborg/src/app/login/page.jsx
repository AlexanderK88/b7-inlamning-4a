"use client";

import LoginForm from "../components/userComponents/LoginForm";
import SignupForm from "../components/userComponents/SignupForm";
import { useState } from "react";

export default function page() {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <main className="grid place-items-center h-screen">
      {isRegistered ? (
        <LoginForm setIsRegistered={setIsRegistered} />
      ) : (
        <SignupForm setIsRegistered={setIsRegistered} />
      )}
    </main>
  );
}
