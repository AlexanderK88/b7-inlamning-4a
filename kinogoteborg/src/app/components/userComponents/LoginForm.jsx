"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Fill out all the fields");
      return;
    }

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
      router.replace("profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-1/3 bg-slate-400 min-w-3/5 md:w-2/5 xl:w-1/4 rounded-md shadow-md p-6 ">
      <h1 className="text-center my-4 text-xl font-bold">Login</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
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
          Login
        </button>
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
        <div>
          <p className="text-right mt-4">
            Don't have an account?
            <Link href="/signup">
              <span className="font-bold underline hover:cursor-pointer ml-2 hover:text-stone-700">
                SignUp
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
