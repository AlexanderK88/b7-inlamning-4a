"use client";

import { useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [imdbRating, setImdbRating] = useState(5);
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [movieID, setMovieID] = useState("");
  const [date, setDate] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  async function onSubmitMovie(e) {
    e.preventDefault();

    if (!title || !description || !genre || !imdbRating || !url || !alt || !releaseDate) {
      setError1("Please fill all the fields");
      return;
    }

    const genreArray = genre.split(" ");

    try {
      const res = await fetch("/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          genre: genreArray,
          imdbRating,
          url,
          alt,
          releaseDate,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        setError1("");
        setTitle("");
        setDescription("");
        setGenre("");
        setImdbRating(5);
        setUrl("");
        setAlt("");
        setReleaseDate("");
      } else {
        console.log("movie creation failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmitScreening(e) {
    e.preventDefault();

    if (!movieID || !date) {
      setError2("Please fill all the fields");
      return;
    }
    try {
      const res = await fetch("/api/screenings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieID, date }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        setDate("");
        setMovieID("");
        setError2("");
      } else {
        console.log("Screening creation failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="col-span-6 flex-grow h-full w-full bg-stone-800 flex flex-col items-center gap-8 mb-10">
      <h1 className="text-2xl text-stone-200 text-center mt-8">Admin Settings</h1>
      <div className="flex w-full h-full items-center lg:items-baseline justify-center lg:h-3/5 flex-col lg:flex-row gap-5 lg:gap-10 m-5">
        <div className="h-full md:mx-6 sm:h-auto border-2 border-solid border-stone-500 bg-zinc-800 w-3/4 md:w-3/5 lg:w-2/5 xl:w-1/3 2xl:w-1/3 min-h-32 shadow-md rounded-md text-stone-200 p-8 my-5">
          <h2 className="mb-5 text-xl font-bold">Create new movie</h2>
          <form className="flex flex-col gap-4 " onSubmit={onSubmitMovie}>
            <label htmlFor="title">Title</label>
            <input
              className="placeholder-white mb-2"
              type="text"
              name="title"
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Movie Description</label>
            <input
              className="placeholder-white mb-2"
              type="text"
              name="description"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="genre">Genre</label>
            <input
              className="placeholder-white mb-2"
              type="text"
              name="genre"
              placeholder="Action Comedy Romance"
              onChange={(e) => setGenre(e.target.value)}
            />
            <label htmlFor="rating">IMDB Rating</label>
            <input
              className="placeholder-white mb-2"
              type="number"
              min={0}
              max={10}
              name="rating"
              placeholder="rating from IMDB"
              onChange={(e) => setImdbRating(Number(e.target.value))}
            />
            <label htmlFor="url">Poster URL</label>
            <input
              className="placeholder-white mb-2"
              type="text"
              name="url"
              placeholder="url"
              onChange={(e) => setUrl(e.target.value)}
            />
            <label htmlFor="alt">Alterantive text</label>
            <input
              className="placeholder-white mb-2"
              type="text"
              name="alt"
              placeholder="alt"
              onChange={(e) => setAlt(e.target.value)}
            />
            <label htmlFor="date">Release Date</label>
            <input
              className="placeholder-white mb-2"
              type="text"
              name="date"
              placeholder="Release date"
              onChange={(e) => setReleaseDate(e.target.value)}
            />
            <button className=" mt-4 bg-rose-800 hover:bg-rose-700 text-stone-300 font-bold cursor-pointer px-6 py-2 rounded-md">
              Submit
            </button>
            {error1 && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error1}
              </div>
            )}
          </form>
        </div>

        <div className="h-full md:mx-6 sm:h-auto border-2 border-solid border-stone-500 bg-zinc-800 w-3/4 md:w-3/5 lg:w-2/5 xl:w-1/3 2xl:w-1/3 min-h-32 shadow-md rounded-md text-stone-200 p-8 mb-[100px]">
          <h2 className="mb-5 text-xl font-bold">Create new screening</h2>
          <form className="flex flex-col gap-4" onSubmit={onSubmitScreening}>
            <label htmlFor="movieID">Movie ID</label>
            <input
              className="placeholder-white mb-2"
              type="text"
              name="movieID"
              placeholder="Movie ID"
              onChange={(e) => setMovieID(e.target.value)}
            />
            <label htmlFor="date">Date</label>
            <input
              className="placeholder-white mb-2"
              type="text"
              name="date"
              placeholder="2024-05-05T16:00"
              onChange={(e) => setDate(e.target.value)}
            />
            <button className=" mt-4 bg-rose-800 hover:bg-rose-700 text-stone-300 font-bold cursor-pointer px-6 py-2 rounded-md">
              Submit
            </button>
            {error2 && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error2}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
