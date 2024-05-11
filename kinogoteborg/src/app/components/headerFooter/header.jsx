import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#333333] grid grid-cols-2">
      <Image
        src="/headerLogo.png"
        width={150}
        height={150}
        alt="Cinema logo in header"
        className="ml-3"
      />
      <div className="flex gap-15 text-right p-5 mt-10 mr-20 justify-end gap-20">
        <a className="text-white text-2xl font-bold" href="/movies">
          Filmer
        </a>
        <a className="text-white text-2xl font-bold" href="">
          Om oss
        </a>
        <a className="text-white text-2xl font-bold" href="">
          Nyheter
        </a>
      </div>
    </div>
  );
}
