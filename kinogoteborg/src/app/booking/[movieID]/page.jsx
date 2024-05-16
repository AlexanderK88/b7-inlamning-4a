"use client";

import React, { useEffect, useState } from "react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";

import { Button } from "@/app/components/booking/button";
import { RenderSaloon } from "../../components/booking/RenderSaloon";
import { Loading } from "@/app/components/booking/loading";
import BookingModal from "@/app/components/booking/bookingModal";
import { postSeats, putSeats } from "@/scripts/fetchSeatsToBook";
import { NoSeats } from "@/app/components/booking/NoSeats";
import MovieDetails from "@/app/components/booking/movieDetails";

const Modal = ({
  isModalOpen,
  isLogin,
  isVerified,
  setSpecialNeeds,
  specialNeeds,
  seatsToBook,
}) => {
  return (
    <div className="fixed z-10 inset-0 overflow-hidden flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto px-4 py-8">
        <div className="bg-[#7E6969] text-white rounded-lg shadow-lg p-6 w-[96vw] md:w-[50vw]">
          <BookingModal
            isModalOpen={isModalOpen}
            isLogin={isLogin}
            isVerified={isVerified}
            setSpecialNeeds={setSpecialNeeds}
            specialNeeds={specialNeeds}
            seatsToBook={seatsToBook}
            uuid={uuid}
          />
        </div>
      </div>
    </div>
  );
};

export default function Page({ params }) {
  const [bookNow, setBookNow] = useState(false);
  const [seats, setSeats] = useState(2);
  const [isVerified, setIsVerified] = useState(false); //Fetch from userProfile
  const [specialNeeds, setSpecialNeeds] = useState(false); //Set if SpecialNeeds sets are chosen
  const [seatsToBook, setSeatsToBook] = useState([]);
  const [isLogin, setIsLogin] = useState(null);
  const [uuid, setUuid] = useState(null);
  let oldSeats = false;
  const movieID = 1;
  const [isAllowToBook, setIsAllowToBook] = useState(false);
  const [noSeatsBooked, setNoSeatsBooked] = useState(false);
  const id = params.movieID;

  const { data: session, status } = useSession({
    required: false,
    onUnauthenticated() {
      console.log("Welcome unknown user");
    },
  });

  //PLACEHOLDER VARIABLES
  const date = new Date();
  const time = "13.00";

  useEffect(() => {
    if (status === "authenticated") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [status]);

  const [response, setResponse] = useState(null);

  // useEffect(() => {
  // if (seatsToBook && seatsToBook.length > 0) { // Check if seatsToBook is not empty
  // async function handleSeats() {
  // if (!oldSeats) {
  try {
    postSeats(movieID, seatsToBook[0], date, time, session?.user?.email)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to post seats: ${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setUuid(data.uuid);
        setOldSeats(true);
      });
    // if (!res.ok) {
    //   throw new Error(`Failed to post seats: ${res.status} - ${res.statusText}`);
    // }
    // const data = await res.json(); // Corrected variable name from `response` to `res`
    // setUuid(data.uuid);
    // setOldSeats(true);
  } catch (error) {
    // Handle fetch error
    console.error("Error while fetching:", error);
  }
  // } else {
  putSeats(seatsToBook, uuid, false);
  // }
  // }
  // handleSeats();
  // }
  // }, [seatsToBook]);

  useEffect(() => {
    if (response) {
      console.log("response: ", response);
    }
  }, [uuid, response]);

  return (
    <div className="flex flex-col border h-screen m-0 w-[80vw] m-auto">
      <div className="grid md:grid-cols-4 md:grid-rows-8 gap-4">
        <div className="md:row-span-6 md:col-start-4 md:row-start-1 border h-fit">
          <MovieDetails id={id} />
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
          <RenderSaloon
            saloonNumber={2}
            seats={seats}
            setSeatsToBook={setSeatsToBook}
            setUuid={setUuid}
            uuid={uuid}
          />
        </div>

        <div className="md:col-start-4 md:row-start-8 border justify-center items-center grid">
          {!noSeatsBooked && (
            <Button
              onClick={() => {
                if (isAllowToBook) {
                  setBookNow(true);
                } else {
                  setNoSeatsBooked(true);
                  setTimeout(() => {
                    setNoSeatsBooked(false);
                  }, 2000);
                }
              }}
              className={"w-[10em]"}
            >
              Book Now
            </Button>
          )}
          {noSeatsBooked && <NoSeats />}
        </div>
      </div>

      {/* Opens the booking modal when isModalOpen = true. */}
      {bookNow && (
        <Modal
          isModalOpen={setBookNow}
          isLogin={isLogin}
          isVerified={isVerified}
          setSpecialNeeds={setSpecialNeeds}
          specialNeeds={specialNeeds}
          seatsToBook={seatsToBook}
          uuid={uuid}
        />
      )}
    </div>
  );
}
