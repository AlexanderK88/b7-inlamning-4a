"use client";

import Movie from "@/app/components/movie/Movie";
import OtherMovies from "@/app/components/movie/OtherMovies";
import { useState } from "react";

export default function Page({ params }) {
  const [id, setId] = useState(params.movieID);

  return (
    <div>
      <Movie id={id} />
      <OtherMovies id={id} />
    </div>
  );
}
