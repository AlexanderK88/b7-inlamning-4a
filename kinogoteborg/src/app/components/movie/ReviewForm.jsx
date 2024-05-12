"use client";
import { useState } from "react";

export default function Reviews({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col ">
        <button className="text-white text-xl place-self-end hover:scale-105" onClick={onClose}>
          X
        </button>
        <div className=" bg-stone-800 p-2 rounded-md text-stone-200">
          <h2 className="text-2xl text-center">Write a review of your own</h2>
          <form action="submit" className="flex flex-col gap-2">
            <label htmlFor="Author">Author</label>
            <input type="text" name="Author" id="Author" placeholder="Name" />
            <label htmlFor="rating">Rating</label>
            <input className="w-24" type="number" min={0} max={5} name="rating" id="rating" />
            <label htmlFor="review">Review</label>
            <textarea
              name="review"
              id="review"
              cols="30"
              rows="10"
              className="w-full border border-gray-300 rounded-md bg-gray-100/40 px-6 py-2"
            ></textarea>
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
