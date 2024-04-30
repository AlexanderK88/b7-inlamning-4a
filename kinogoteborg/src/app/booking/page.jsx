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
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-[30em] border border-black pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="flex flex-col items-center justify-center">
            <BookingModal isComplete={isComplete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [bookNow, setBookNow] = useState(false);

  const handleCompletedBooking = (value) => {
    setBookNow(value);
  };

  return (
    <>
      <p>hello world</p>
      <Button onClick={() => setBookNow(true)}>Book Now</Button>

      {/* Looks better in the return statement but might be a bit harder to read compared to the part below */}
      {bookNow && <Modal isComplete={setBookNow} />}

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
    </>
  );
}
