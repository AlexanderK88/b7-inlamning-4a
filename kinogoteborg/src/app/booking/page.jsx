"use client";

//import rendersaloon to render page.
//build modal to use booking.js
//add state for booking to use, might be better placed in booking.js
// renderSaloon(2)
//   .then(cinema => console.log(cinema))
//   .catch(error => console.error(error));

import React, { useState } from "react";
import { Button, RedButton } from "@/app/components/booking/button";
import { set } from "mongoose";

import BookingModal from "@/app/components/booking/bookingModal";
import ScreeningDates from "@/app/components/booking/screenings";
import ScreeningTimes from "@/app/components/booking/screeningTimes";

const Modal = ({ isModalOpen }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-hidden flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto px-4 py-8">
        <div className="bg-[#7E6969] text-white rounded-lg shadow-lg p-6 w-[96vw] md:w-[50vw]">
          <BookingModal
            isModalOpen={isModalOpen}
            isVerified={false}
            isLogin={false}
            specialNeeds={false}
          />
        </div>
      </div>
    </div>
  );
};

export default function Page({ params }) {
  //inserted params for correct movie
  const [bookNow, setBookNow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const movieID = params.id;
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
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
          {/*<div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>*/}
          <ScreeningDates id={movieID} onClick={handleDateSelect} />
        </div>

        <div className="md:col-span-2 md:col-start-1 md:row-start-2 flex flex-row align-center justify-evenly p-2 border">
          <p>screening times</p>
          {/*<div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>
          <div className="bg-gray-200 w-[8vw] h-[4vw]">content</div>*/}
          <ScreeningTimes id={movieID} date={selectedDate} onClick={handleTimeSelect} />
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

      {/* Opens the booking modal when isModalOpen = true. */}
      {bookNow && <Modal isModalOpen={setBookNow} knownUser={isLogin} />}
    </div>
  );
}
