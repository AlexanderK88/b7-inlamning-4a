"use client";

import { useSession } from "next-auth/react";
export default function General() {
  const { data: session } = useSession();
  return (
    <div className="h-full col-span-6 w-full bg-stone-800 flex flex-col items-center gap-8 mb-10">
      <h1 className="text-2xl text-stone-200 text-center mt-8">General</h1>

      <div className="border-2 border-solid border-stone-500 bg-stone-700 w-3/4 md:w-3/5 xl:w-1/2 2xl:w-1/3 min-h-32 shadow-md rounded-md text-stone-200">
        <ul className="ml-8">
          <li className="p-2 my-4">
            Name: <span>{session?.user?.name}</span>
          </li>
          <li className="p-2 my-4">
            Number: <span>{session?.user?.phoneNumber}</span>
          </li>
          <li className="p-2 my-4">
            Email: <span>{session?.user?.email}</span>
          </li>
        </ul>
      </div>
      <div className="border-2 border-solid border-stone-500 bg-stone-700 w-3/4 md:w-3/5 xl:w-1/2 2xl:w-1/3 min-h-32 shadow-md rounded-md text-stone-200 p-4">
        <h2 className="text-center text-xl my-2">Last watched movie</h2>
        <p className="text-center my-2">Movie title</p>
        <p className="text-center">Date</p>
      </div>
      <div className="border-2 border-solid border-stone-500 bg-stone-700 w-3/4 md:w-3/5 xl:w-1/2 2xl:w-1/3 min-h-32 shadow-md rounded-md text-stone-200 p-4">
        <h2 className="text-center text-xl my-2">Last written review</h2>
        <p className="text-center my-2">Movie title</p>
        <p className="text-center">
          This movie was so so good, i really enjoyed it until the staff spit iy c and ate my and
          ate my popcorn
        </p>
      </div>
    </div>
  );
}
