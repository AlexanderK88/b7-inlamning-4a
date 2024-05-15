"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { set } from "mongoose";

export default function Settings() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPasssword] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  async function onSubmitNameChange(e) {
    e.preventDefault();

    if (!name) {
      setError1("Please fill the field");
      return;
    }

    try {
      const res = await fetch("/api/users/name", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email: session?.user?.email }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        setName("");
        setError1("");
      } else {
        console.log("Changing users name failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmitNewPassword(e) {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError2("Please fill the field");
      return;
    }

    if (password !== confirmPassword) {
      setError2("The passwords does not match");
      return;
    }

    try {
      const res = await fetch("/api/users/password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email: session?.user?.email }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        setPassword("");
        setConfirmPasssword("");
        setError2("");
      } else {
        console.log("Changing users password failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="col-span-5 flex-grow h-full w-full bg-stone-800 flex flex-col items-center gap-8">
      <h1 className="text-2xl text-stone-200 text-center mt-8">Settings</h1>
      <div className="flex w-full h-full items-center md:items-baseline justify-center md:h-3/5 flex-col md:flex-row gap-5 lg:gap-20">
        <div className="border-2 border-solid border-stone-500 bg-zinc-800 w-3/4 md:w-3/5 xl:w-1/3 min-h-32 shadow-md rounded-md text-stone-200 p-8 m-5">
          <h2 className="mb-5 text-xl font-bold">Change name</h2>
          <form className="flex flex-col gap-4" onSubmit={onSubmitNameChange}>
            <label htmlFor="name">New name</label>
            <input
              className="placeholder-white mb-2"
              type="text"
              name="name"
              placeholder="New name"
              onChange={(e) => setName(e.target.value)}
            />
            <button className="mt-4 bg-rose-800 hover:bg-rose-700 text-stone-300 font-bold cursor-pointer px-6 py-2 rounded-md">
              Submit
            </button>
            {error1 && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error1}
              </div>
            )}
          </form>
        </div>
        <div className="border-2 border-solid border-stone-500 bg-zinc-800 w-3/4 md:w-3/5 xl:w-1/3 min-h-32 shadow-md rounded-md text-stone-200 p-8 m-5">
          <h2 className="mb-5 text-xl font-bold">Change Password</h2>
          <form className="flex flex-col gap-4" onSubmit={onSubmitNewPassword}>
            <label htmlFor="password">New password</label>
            <input
              className="placeholder-white mb-2"
              type="text"
              name="password"
              placeholder="new password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm new password</label>
            <input
              className="placeholder-white mb-2"
              type="text"
              name="confirmPassword"
              placeholder="confirm new password"
              onChange={(e) => setConfirmPasssword(e.target.value)}
            />
            <button className=" mt-4 bg-rose-800 hover:bg-rose-700 text-stone-300 font-bold cursor-pointer px-6 py-2 rounded-md">
              Submit
            </button>
            {error2 && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error2}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
