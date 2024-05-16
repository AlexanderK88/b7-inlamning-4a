"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Reviews() {
  const { data: session } = useSession();
  const [reviews, setReviews] = useState();
  const id = session?.user?.id;

  useEffect(() => {
    fetch(`/api/reviews/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
      });
  }, [id]);

  return (
    <div className="h-full col-span-6 w-full bg-stone-800 flex flex-col items-center gap-8 mb-10">
      <h1 className="text-2xl text-stone-200 text-center mt-8">Reviews</h1>
      {reviews?.map((review) => (
        <div
          key={review.id}
          className="border-2 border-solid border-stone-500 bg-stone-700 w-3/4 md:w-3/5 xl:w-1/2 2xl:w-1/3 min-h-32 shadow-md rounded-md text-stone-200 p-4"
        >
          <h2 className="text-center text-xl my-2">{review.attributes.movieTitle}</h2>
          <p className="text-center my-2">Rating: {review.attributes.rating}</p>
          <p className="text-center">{review.attributes.comment}</p>
        </div>
      ))}
    </div>
  );
}
