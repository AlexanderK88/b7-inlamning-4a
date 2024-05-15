import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bottom-0 bg-[#800020] w-full pt-10 flex justify-center">
      <div className="flex flex-col justify-center text-center md:text-left gap-5 md:gap-20 md:flex-row md:justify-baseline pb-5">
        <Link href="/">
          <Image
            src="/footerLogo.png"
            width={150}
            height={150}
            alt="Cinema logo in footer"
            className="mx-auto"
          />
        </Link>
        <div className="flex flex-col w-60 mt-6">
          <p className="text-xs font-bold text-white">Kino Göteborg</p>
          <p className="text-xs text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet, nisl id consequat
            tempor, erat dui rhoncus nisl, vel pretium lacus enim vitae ligula.
          </p>
        </div>
        <div className="flex flex-col mt-6">
          <p className="text-xs font-bold text-white">Navigation</p>
          <Link href="/movies" className="text-xs text-white">
            Movies
          </Link>
          <Link href="" className="text-xs text-white">
            About us
          </Link>
          <Link href="" className="text-xs text-white">
            News
          </Link>
        </div>
        <div className="flex flex-col mt-6">
          <p className="text-xs font-bold text-white">Sociala Medier</p>
        </div>
      </div>
    </div>
  );
}
