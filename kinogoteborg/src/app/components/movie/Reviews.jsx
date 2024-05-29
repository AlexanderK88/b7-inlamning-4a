"use client";
import { useState, useEffect } from "react";

export default function Reviews({ isVisible, onClose, setShowReviewForm, setShowReviewModal, id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/api/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
      });
  }, [id]);

  const reviewFormHandler = () => {
    setShowReviewForm(true);
    setShowReviewModal(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col ">
        <button className="text-white text-3xl place-self-end hover:scale-105" onClick={onClose}>
          X
        </button>
        <div className="bg-stone-800 text-stone-200 min-h-[500px] p-10 rounded-lg">
          <h2 className="text-xl text-center">Reviews</h2>
          <div className="border-solid border-y-2 border-gray-600 max-h-[450px] overflow-y-auto overflow-x-hidden">
            {reviews.map((review) => {
              return (
                <div key={review.id} className="border-b-2 border-solid border-gray-500 p-4 ">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="mr-2">User: </span>
                      {review?.attributes?.author}
                    </li>
                    <li>
                      <span className="mr-2">Rating:</span> {review?.attributes?.rating}
                    </li>
                    <li>
                      <span className="mr-2">Review:</span> {review?.attributes?.comment}
                    </li>
                  </ul>
                </div>
              );
            })}
            <p
              className=" ml-auto text-end underline p-2 hover:cursor-pointer hover:text-stone-600 w-1/4"
              onClick={reviewFormHandler}
            >
              Write a review
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
