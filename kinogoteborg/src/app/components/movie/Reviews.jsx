"use client";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

export default function Reviews({ isVisible, onClose, setShowReviewForm, setShowReviewModal }) {
  if (!isVisible) return null;

  const reviewFormHandler = () => {
    setShowReviewForm(true);
    setShowReviewModal(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col ">
        <button className="text-white text-xl place-self-end hover:scale-105" onClick={onClose}>
          X
        </button>
        <div className="bg-stone-800 text-stone-200  p-2 rounded-md">
          <h2 className="text-xl text-center">Reviews</h2>
          <div className="border-solid border-y-2 border-gray-600 max-h-[450px] overflow-scroll">
            <div className="border-b-2 border-solid border-gray-500 p-4 ">
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="mr-2">User: </span>William Vesterberg
                </li>
                <li>
                  <span className="mr-2">Title: </span>Great Movie
                </li>
                <li>
                  <span className="mr-2">Rating:</span> 4/5{" "}
                </li>
                <li>
                  <span className="mr-2">Review:</span> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quos?
                </li>
              </ul>
            </div>
            <div className="border-b-2 border-solid border-gray-500 p-4 ">
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="mr-2">User: </span>William Vesterberg
                </li>
                <li>
                  <span className="mr-2">Title: </span>Great Movie
                </li>
                <li>
                  <span className="mr-2">Rating:</span> 4/5{" "}
                </li>
                <li>
                  <span className="mr-2">Review:</span> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quos?
                </li>
              </ul>
            </div>
            <div className="border-b-2 border-solid border-gray-500 p-4 ">
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="mr-2">User: </span>William Vesterberg
                </li>
                <li>
                  <span className="mr-2">Title: </span>Great Movie
                </li>
                <li>
                  <span className="mr-2">Rating:</span> 4/5{" "}
                </li>
                <li>
                  <span className="mr-2">Review:</span> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quos?
                </li>
              </ul>
            </div>
          </div>
          <p
            className=" ml-auto text-end underline p-2 hover:cursor-pointer hover:text-stone-600 w-1/4"
            onClick={reviewFormHandler}
          >
            Write a review
          </p>
        </div>
      </div>
    </div>
  );
}
