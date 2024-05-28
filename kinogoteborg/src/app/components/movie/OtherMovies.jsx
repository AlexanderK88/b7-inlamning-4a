"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Movies({ id }) {
  const [movies, setMovies] = useState([]);
  const [movie1, setMovie1] = useState(null);
  const [movie2, setMovie2] = useState(null);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
        let validIds = data.data
          .map((movie) => movie.id)
          .filter((movieId) => movieId !== Number(id));

        const randomIndex1 = Math.floor(Math.random() * validIds.length);
        const randomId1 = validIds[randomIndex1];
        validIds = validIds.filter((id) => id !== randomId1);

        const randomIndex2 = Math.floor(Math.random() * validIds.length);
        const randomId2 = validIds[randomIndex2];

        setMovie1(data.data.find((movie) => movie.id === randomId1));
        setMovie2(data.data.find((movie) => movie.id === randomId2));
      });
  }, [id]);

  return (
    <>
      <h2 className="text-center text-2xl text-stone-200 my-3">Other Popular Movies</h2>
      <div className="flex flex-col sm:flex-row justify-center my-12">
        <div className="flex flex-col w-6/6 sm:w-1/5 mx-5 items-center sm:justify-center">
          <Link
            href={`/movies/${movie1?.id}`}
            className="flex flex-col items-center text-center text-xl text-stone-200 hover:text-stone-100 justify-center mb-5"
          >
            <div className="w-[180px] h-[270px]">
              <Image
                src={movie1?.attributes?.image?.url}
                alt={movie1?.attributes?.image?.alt}
                className="rounded-md"
                width={180}
                height={270}
              />
            </div>

            <p className="mt-4 mb-8 sm:my-4 h-4">{movie1?.attributes?.title}</p>
          </Link>
        </div>
        <div className="flex flex-col w-6/6 sm:w-1/5 mx-5 items-center sm:justify-center">
          <Link
            href={`/movies/${movie2?.id}`}
            className="flex flex-col items-center text-center text-xl text-stone-200 hover:text-stone-100 justify-center mb-5"
          >
            <div className="w-[180px] h-[270px]">
              <Image
                src={movie2?.attributes?.image?.url}
                alt={movie2?.attributes?.image?.alt}
                className="rounded-md"
                width={180}
                height={270}
              />
            </div>

            <p className="mt-4 mb-8 sm:my-4 h-4">{movie2?.attributes?.title}</p>
          </Link>
        </div>
      </div>
    </>
  );
}
