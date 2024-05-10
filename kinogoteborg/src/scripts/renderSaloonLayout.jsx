"use server";
import clsx from "clsx";

export async function RenderProcess(saloonNumber) {
  try {
    const data = await fetchSaloon(saloonNumber); // Wait for fetchSaloon to complete
    return RenderSaloon(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function fetchSaloon(saloonNumber) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    saloon: saloonNumber,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Return the Promise chain
  return fetch("http://localhost:3000/api/booking", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.error("Error fetching saloon data:", error);
      throw error; // Re-throw the error to handle it elsewhere
    });
}

export async function RenderSaloon(data) {
  try {
    // Fetch saloon data
    const cinemaData = data.data;

    // Check if saloon data is empty
    if (!cinemaData || cinemaData.length === 0) {
      console.error("Saloon not found.");
      return null;
    }

    let collectedSaloonSeats = [];
    let currentRowSeats = [];

    const regular = (i, seatNumber) => {
      const classNames = clsx(
        "m-2",
        "bg-red-400",
        "w-fit",
        "h-6",
        "border",
        "hover:bg-gray-400",
        "rounded-sm",
        "text-center",
        "align-middle",
        "justify-center",
      );
      return (
        <div key={`seat_${i}`} className={classNames}>
          {seatNumber}
        </div>
      );
    };

    const special = (i, seatNumber) => {
      return (
        <div
          key={`seat_${i}`}
          className="m-2 bg-blue-400 w-fit h-6 border hover:bg-blue-200 active:bg-black rounded-sm justify-center text-center align-middle"
        >
          {seatNumber}
        </div>
      );
    };

    let counter = 1;
    for (const seat of cinemaData[0].seats) {
      for (let i = 0; i < seat.count; i++) {
        currentRowSeats.push(
          seat.type === "regular" ? regular(counter, seat.row) : special(counter, seat.row),
        );
        counter++;
      }

      if (
        cinemaData[0].seats.indexOf(seat) >= cinemaData[0].seats.length - 1 ||
        (seat.row === "same" &&
          cinemaData[0].seats.indexOf(seat) + 1 < cinemaData[0].seats.length &&
          cinemaData[0].seats[cinemaData[0].seats.indexOf(seat) + 1].row !== "same") ||
        seat.row === "next"
      ) {
        collectedSaloonSeats.push(
          <div
            key={`layer_${collectedSaloonSeats.length}`}
            className="flex flex-row w-full col-span-6 bg-gray-900 justify-center content-center items-center align-middle"
          >
            {currentRowSeats}
          </div>,
        );
        currentRowSeats = [];
      }
    }

    if (currentRowSeats.length > 0) console.log("success build");
    return collectedSaloonSeats;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
