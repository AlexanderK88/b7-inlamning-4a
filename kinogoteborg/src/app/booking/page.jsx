"use client";

//import rendersaloon to render page.
//build modal to use booking.js
//add state for booking to use, might be better placed in booking.js
// renderSaloon(2)
//   .then(cinema => console.log(cinema))
//   .catch(error => console.error(error));
import BookingModal from "@/app/components/booking/bookingModal";

import React, { useState } from "react";
import { Button } from "@/app/components/booking/button";

const Modal = ({ isComplete }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-hidden flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto px-4 py-8">
        <div className="bg-[#7E6969] text-white rounded-lg shadow-lg p-6 w-[96vw] md:w-[50vw]">
          <BookingModal isComplete={isComplete} />
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [bookNow, setBookNow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleCompletedBooking = (value) => {
    setBookNow(value);
  };

  return (
    <div className="flex flex-col border h-screen m-0 w-[80vw] m-auto">
      <div className="grid md:grid-cols-4 md:grid-rows-8 gap-4">
        <div className="md:row-span-6 md:col-start-4 md:row-start-1 border h-[70vh]">
          movie data
          <div className="bg-gray-600 w-[90%] h-[50%] flex justify-center m-auto my-2">
            movie poster
          </div>
          <div className="bg-gray-600 w-[90%] h-[10%] flex justify-center m-auto my-2">
            movie details
          </div>
          <div className="bg-gray-600 w-[90%] h-[10%] flex justify-center m-auto my-2">
            some more details
          </div>
        </div>

        <div className="md:col-span-3 flex flex-row align-center justify-evenly border p-2 ">
          <p>screening date</p>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
        </div>

        <div className="md:col-span-2 md:col-start-1 md:row-start-2 flex flex-row align-center justify-evenly p-2 border">
          <p>screening times</p>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
        </div>
        <div className="md:col-start-3 md:row-start-2 border">amount of guests</div>
        <div className="grid md:col-span-3 md:row-span-6 md:col-start-1 md:row-start-3 border min-h-[30vh] ">
          saloon render
          <div className="h-2 w-[80%] bg-black m-auto rounded-md">content</div>
        </div>
        <div className="md:col-start-4 md:row-start-8 border justify-center items-center grid">
          <Button onClick={() => setBookNow(true)} className={"w-[10em]"}>
            Book Now
          </Button>
        </div>
      </div>

      {/* Looks better in the return statement but might be a bit harder to read compared to the part below */}
      {bookNow && <Modal isComplete={setBookNow} knownUser={isLogin} />}

      {/* { bookNow && 
<div className="">
<div className="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <BookingModal isComplete={handleCompletedBooking}/>
    </div>
  </div>
</div>
</div>
} */}
    </div>
  );
}
