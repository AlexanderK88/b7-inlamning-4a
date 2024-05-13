"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/app/components/booking/button";
import { RenderSaloon } from "../components/booking/RenderSaloon";

import BookingModal from "@/app/components/booking/bookingModal";

const Modal = ({ isModalOpen, isLogin, isVerified, specialNeeds }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-hidden flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto px-4 py-8">
        <div className="bg-[#7E6969] text-white rounded-lg shadow-lg p-6 w-[96vw] md:w-[50vw]">
          <BookingModal
            isModalOpen={isModalOpen}
            isLogin={isLogin}
            isVerified={isVerified}
            specialNeeds={specialNeeds}
          />
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [bookNow, setBookNow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [seats, setSeats] = useState(4);
  const [isVerified, setIsVerified] = useState(false); //Fetch from userProfile
  const [specialNeeds, setSpecialNeeds] = useState(false); //Set if SpecialNeeds sets are chosen
  const [seatsToBook, setSeatsToBook] = useState([]);

  useEffect(() => {
    console.log("seats to book: ", seatsToBook);
  }, [seatsToBook]);

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
        <div className="flex flex-col md:col-span-3 md:row-span-6 md:col-start-1 md:row-start-3 border items-center m-0">
          <div id="movieScreen" className="h-2 w-full bg-black col-start-1 rounded-md border"></div>
          <RenderSaloon saloonNumber={2} seats={seats} setSeatsToBook={setSeatsToBook} />
        </div>

        <div className="md:col-start-4 md:row-start-8 border justify-center items-center grid">
          <Button onClick={() => setBookNow(true)} className={"w-[10em]"}>
            Book Now
          </Button>
        </div>
      </div>

      {/* Opens the booking modal when isModalOpen = true. */}
      {bookNow && (
        <Modal
          isModalOpen={setBookNow}
          isLogin={isLogin}
          isVerified={isVerified}
          specialNeeds={specialNeeds}
          seatsToBook={seatsToBook}
        />
      )}
    </div>
  );
}
