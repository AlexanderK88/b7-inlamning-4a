"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function MovieDetails({ id }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.data);
      });
  }, [id]);

  return (
    <div className="flex flex-col text-white justify-left content-center text-left ">
      <img
        className="rounded-md"
        src={movie?.attributes?.image?.url}
        alt={movie?.attributes?.image?.alt}
      />
      <div>
        <h1 className="text-xl text-white">{movie?.attributes?.title}</h1>
      </div>
      <ul className="flex flex-col gap-4 mt-4">
        <li className="my-2">Imdb rating: {movie?.attributes?.imdbRating}</li>
      </ul>
      <p>{movie?.attributes?.description}</p>{" "}
    </div>
  );
}
