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
    <>
      <img
        className="rounded-md"
        src={movie?.attributes?.image?.url}
        alt={movie?.attributes?.image?.alt}
      />
      <p>details</p>
      <p>imdb?</p>
    </>
  );
}
