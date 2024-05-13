import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#333333] grid grid-cols-2">
      <Image
        src="/headerLogo.png"
        width={150}
        height={150}
        alt="Cinema logo in header"
        className="ml-3"
        href="/movies"
      />
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
      </div>
    </div>
  );
}
