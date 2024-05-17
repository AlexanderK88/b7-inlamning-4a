"use client";
import { useState } from "react";

export default function Reviews({ isVisible, onClose, id }) {
  const [movieID, setMovieID] = useState(id);
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  async function submitReview(e) {
    e.preventDefault();
    if (!author || !rating || !comment) {
      setError("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ movieID, author, rating, comment }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        onClose();
        setError("");
      } else {
        console.log("Submitting form failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col ">
        <button className="text-white text-xl place-self-end hover:scale-105" onClick={onClose}>
          X
        </button>
        <div className=" bg-stone-800 p-2 rounded-md text-stone-200">
          <h2 className="text-2xl text-center">Write a review of your own</h2>
          <form className="flex flex-col gap-2" onSubmit={submitReview}>
            <label htmlFor="Author">Author</label>
            <input
              type="text"
              name="Author"
              id="Author"
              placeholder="Name"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
            <label htmlFor="rating">Rating</label>
            <input
              className="w-24"
              type="number"
              min={0}
              max={5}
              name="rating"
              id="rating"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
            <label htmlFor="review">Review</label>
            <textarea
              onChange={(e) => {
                setComment(e.target.value);
              }}
              name="review"
              id="review"
              cols="30"
              rows="10"
              className="w-full border border-gray-300 rounded-md bg-gray-100/40 px-6 py-2"
            ></textarea>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            <button
              type="submit"
              value="Submit"
              className="bg-red-900 w-1/4 rounded-md text-stone-200 p-2 mt-2 shadow-sm hover:bg-red-800 hover:shadow-md "
            >
              Submit review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
