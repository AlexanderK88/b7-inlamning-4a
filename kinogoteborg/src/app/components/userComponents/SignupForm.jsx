"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function submitHandler(e) {
    e.preventDefault();
    if (!name || !email || !phoneNumber || !password) {
      setError("Please fill all the fields");
      return;
    }

    try {
      const resUserExists = await fetch("api/users/existinguser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists");
        return;
      }

      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, phoneNumber }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        setError("");
        router.push("/login");
      } else {
        console.log("user registration failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-1/3 bg-slate-400 min-w-3/5 md:w-2/5 xl:w-1/4 rounded-md shadow-md p-6 ">
      <h1 className="text-center my-4 text-xl font-bold">Sign up</h1>
      <form className="flex flex-col gap-2" onSubmit={submitHandler}>
        <label className="font-bold" htmlFor="fullName">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label className="font-bold" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
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
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className=" mt-4 bg-red-800 hover:bg-red-700 text-stone-300 font-bold cursor-pointer px-6 py-2 rounded-md">
          Sign up
        </button>
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
        <div>
          <p className="text-right mt-4">
            Already have an account?
            <Link href="/login">
              <span className="font-bold underline hover:cursor-pointer ml-2 hover:text-stone-700">
                Login
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
