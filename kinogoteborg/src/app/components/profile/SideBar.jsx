"use client";

import { signOut, useSession } from "next-auth/react";

export default function SideBar({ setPage }) {
  const { data: session, status } = useSession();
  console.log(session);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If user is not authenticated, you can redirect them to the login page
  if (!session) {
    return <div>Please log in</div>;
  }
  const handleMenuClick = (e) => {
    setPage(e.target.innerText);
  };
  return (
    <aside className="h-{400px} w-full bg-slate-500 sm:h-full flex flex-col py-4 grid-span-1">
      <h1 className="text-center mt-8 text-2xl font-bold">Profile</h1>
      <h2 className="text-center mt-3 text-xl font-bold">{session?.user?.name}</h2>{" "}
      {/* The name of the user is displayed */}
      <nav
        className="text-center sm:text-left my-8 flex flex-col gap-4 w-full"
        onClick={handleMenuClick}
      >
        <h3 className="bg-white bg-opacity-10 sm:p-2 hover:bg-opacity-20 hover:cursor-pointer rounded-md py-2 sm:pl-4 font-bold">
          General
        </h3>
        {/* Shows user information */}
        <h3 className="bg-white bg-opacity-10 sm:p-2 hover:bg-opacity-20 hover:cursor-pointer rounded-md pl-0 py-2 sm:pl-4 font-bold">
          Bookings
        </h3>
        {/* Shows all the bookings that the user has done */}
        <h3 className="bg-white bg-opacity-10 sm:p-2 hover:bg-opacity-20 hover:cursor-pointer rounded-md pl-0 py-2 sm:pl-4 font-bold">
          Reviews
        </h3>
        {/* Shows all the reviews the user has done */}
        <h3 className="bg-white bg-opacity-10 sm:p-2 hover:bg-opacity-20 hover:cursor-pointer rounded-md pl-0 py-2 sm:pl-4 font-bold">
          Settings
        </h3>
        {/* The user can change account information */}
      </nav>
      <button
        className="bg-red-700 text-white font-bold px-6 mt-3 py-2 rounded-md mx-5"
        onClick={() => signOut()}
      >
        Log out
      </button>
    </aside>
  );
}
