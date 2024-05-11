import Image from "next/image";

export default function Footer() {
  return (
    <div className="absolute bottom-0 bg-[#800020] w-full pt-10 flex justify-center">
      <div className="flex gap-20 flex-row pb-5">
        <Image
          src="/footerLogo.png"
          width={150}
          height={150}
          alt="Cinema logo in footer"
        />
        <div className="flex flex-col w-60 mt-6">
          <p className="text-xs font-bold text-white">Kino Göteborg</p>
          <p className="text-xs text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            laoreet, nisl id consequat tempor, erat dui rhoncus nisl, vel
            pretium lacus enim vitae ligula.
          </p>
        </div>
        <div className="flex flex-col mt-6">
          <p className="text-xs font-bold text-white">Navigation</p>
          <a href="/movies" className="text-xs text-white">
            Filmer
          </a>
          <a href="" className="text-xs text-white">
            Om oss
          </a>
          <a href="" className="text-xs text-white">
            Nyheter
          </a>
        </div>
        <div className="flex flex-col mt-6">
          <p className="text-xs font-bold text-white">Sociala Medier</p>
        </div>
      </div>
    </div>
  );
}
