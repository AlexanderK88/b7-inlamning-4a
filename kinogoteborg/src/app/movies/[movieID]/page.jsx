"use client";

import Movie from "@/app/components/movie/Movie";
import OtherMovies from "@/app/components/movie/OtherMovies";
import { useState } from "react";

export default function Page({ params }) {
  const [id, setId] = useState(params.movieID);

  return (
    <div className="my-[100px]">
      <Movie id={id} />
      <OtherMovies id={id} />
    </div>
  );
}
