"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Movies({ id }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(id);
        console.log(data);
        setMovie(data.data);
      });
  }, [id]);

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 my-12 pb-8">
      <div className=" w-5/6 sm:w-4/6 lg:w-1/4  rounded-md ">
        <img
          className="rounded-md"
          src={movie?.attributes?.image?.url}
          alt={movie?.attributes?.image?.alt}
        />
      </div>
      <div className="text-stone-200 flex flex-col mt-auto w-5/6 sm:w-4/6 lg:w-2/6 gap-8 ">
        <div>
          <h1 className="text-3xl">{movie?.attributes?.title}</h1>
          <span>({movie?.attributes?.releaseDate})</span>
        </div>

        <ul className="flex flex-col gap-4">
          <li>Genre: {movie?.attributes?.genre.join(", ")}</li>
          <li>Imdb rating: {movie?.attributes?.imdbRating}</li>
        </ul>
        <p>{movie?.attributes?.description}</p>
        <Link href={`http://localhost:3000/booking/${movie?.id}`}>
          <button className="p-2 bg-red-900 w-3/4 rounded-md shadow-sm hover:bg-red-800 hover:shadow-md ">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}
