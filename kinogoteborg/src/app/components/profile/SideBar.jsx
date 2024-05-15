"use client";

import { signOut, useSession } from "next-auth/react";

export default function SideBar({ setPage }) {
  const { data: session, status } = useSession();

  const handleMenuClick = (e) => {
    setPage(e.target.innerText);
  };
  return (
    <aside className="h-{400px} w-full bg-zinc-900 text-stone-200 sm:h-full flex flex-col py-4 col-span-2">
      <h1 className="text-center mt-8 text-2xl font-bold">Profile</h1>
      <h2 className="text-center mt-3 text-xl font-bold">{session?.user?.name}</h2>
      <nav
        className="text-center sm:text-left my-8 flex flex-col gap-4 w-full"
        onClick={handleMenuClick}
      >
        <h3 className="bg-white bg-opacity-10 sm:p-2 hover:bg-opacity-20 hover:cursor-pointer pl-0 py-2 sm:pl-4 font-bold">
          General
        </h3>
        <h3 className="bg-white bg-opacity-10 sm:p-2 hover:bg-opacity-20 hover:cursor-pointer pl-0 py-2 sm:pl-4 font-bold">
          Bookings
        </h3>
        <h3 className="bg-white bg-opacity-10 sm:p-2 hover:bg-opacity-20 hover:cursor-pointer pl-0 py-2 sm:pl-4 font-bold">
          Reviews
        </h3>
        <h3 className="bg-white bg-opacity-10 sm:p-2 hover:bg-opacity-20 hover:cursor-pointer pl-0 py-2 sm:pl-4 font-bold">
          Settings
        </h3>

        {session?.user?.admin == true ? (
          <h3 className="bg-white bg-opacity-10 sm:p-2 hover:bg-opacity-20 hover:cursor-pointer pl-0 py-2 sm:pl-4 font-bold">
            Admin
          </h3>
        ) : (
          ""
        )}
      </nav>
      <button
        className="bg-rose-900 text-white font-bold px-6 mt-3 py-2 rounded-md mx-5 hover:bg-rose-800"
        onClick={() => signOut()}
      >
        Log out
      </button>
    </aside>
  );
}
