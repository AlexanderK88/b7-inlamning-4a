"use client";

import { useEffect, useState } from "react";

export default function AmountOfGuests({ seats, setSeats, selectedTime, selectedDate }) {
  const [numberOfGuests, setNumberOfGuests] = useState([]);

  useEffect(() => {
    const fetchAmountOfGuests = () => {
      //for maximum of 10 seats that can be booked at a time
      const choseNumber = [...Array(10).keys()].map((i) => i + 1);

      if (choseNumber.length === 0) {
        setNumberOfGuests(["No available seats"]);
        setSeats(0);
      } else {
        setNumberOfGuests(choseNumber);
        setSeats(choseNumber[0]);
      }
    };

    fetchAmountOfGuests();
  }, []);

  const handleNumberChange = (e) => {
    setSeats(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-wrap justify-center my-auto">
      <div className="md:col-start-3 md:row-start-2">
        {selectedDate === "No available Dates" || selectedTime === "No available times" ? (
          <div className="flex items-center justify-center min-w-[8vw] min-h-[4vw] p-2 rounded text-center bg-red-900 text-white font-bold">
            No available seats
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <label htmlFor="guests" className="mr-2 text-white">
              Number of Guests:{" "}
            </label>
            {numberOfGuests.length > 0 && numberOfGuests[0] !== "No available seats" ? (
              <select
                id="guests"
                value={seats}
                onChange={handleNumberChange}
                className="p-2 rounded"
              >
                {numberOfGuests.map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
