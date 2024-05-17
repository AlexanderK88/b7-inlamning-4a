"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="bg-[#333333] grid grid-cols-3">
      <Link href="/" className="col-span-1">
        {" "}
        <Image
          src="/headerLogo.png"
          width={150}
          height={150}
          alt="Cinema logo in header"
          className="ml-3"
        />
      </Link>

      <div className="col-span-2 flex gap-5 sm:gap-16 text-right p-5 mt-10 mr-0 sm:mr-20 justify-end">
        <Link href="/movies" className="text-white text-lg md:text-xl font-bold">
          Movies
        </Link>
        <Link href="/aboutus" className="text-white text-lg md:text-xl font-bold">
          About us
        </Link>
        <Link href="/news" className="text-white text-lg md:text-xl font-bold">
          News
        </Link>
        {session?.user ? (
          <Link href="/profile" className="text-white text-lg md:text-xl font-bold">
            Profile
          </Link>
        ) : (
          <Link href="/login" className="text-white text-lg md:text-xl font-bold">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
