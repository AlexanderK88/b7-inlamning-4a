"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="bg-[#333333] grid grid-cols-2">
      <Link href="/">
        {" "}
        <Image
          src="/headerLogo.png"
          width={150}
          height={150}
          alt="Cinema logo in header"
          className="ml-3"
        />
      </Link>

      <div className="flex gap-15 text-right p-5 mt-10 mr-20 justify-end gap-20">
        <Link href="/movies" className="text-white text-2xl font-bold">
          Filmer
        </Link>
        <Link href="" className="text-white text-2xl font-bold">
          Om oss
        </Link>
        <Link href="" className="text-white text-2xl font-bold">
          Nyheter
        </Link>
        {session?.user ? (
          <Link href="/profile" className="text-white text-2xl font-bold">
            Profile
          </Link>
        ) : (
          <Link href="/login" className="text-white text-2xl font-bold">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
