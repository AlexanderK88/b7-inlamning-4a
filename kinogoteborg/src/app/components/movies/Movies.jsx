"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
  }, []);

  return (
    <>
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className="rounded-md bg-stone-800 w-5/5 max-w-64 m-4 flex flex-col justify-between items-center"
          >
            <img
              className="w-64 h-96 rounded-md shadow-md"
              src={movie.attributes.image.url}
              alt={movie.attributes.image.alt}
            />
            <h2
              className={`${
                movie.attributes.title.length >= 16 ? "text-xl" : "text-2xl"
              } text-white mt-4 mb-2 text-center`}
            >
              {movie.attributes.title}
            </h2>
            <Link
              href={`http://localhost:3000/movies/${movie.id}`}
              className="w-full p-2 m-2 bg-red-800 text-stone-300 text-center rounded-full hover:bg-red-700 mb-5 hover:font-bold"
            >
              Book Now
            </Link>
          </div>
        );
      })}
    </>
  );
}
