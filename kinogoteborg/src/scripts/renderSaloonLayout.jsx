// import fs from "fs";

// //Fetches data from "Saloon" collection-db to render the requested saloon.

// export default async function RenderSaloon(saloonNumber) {
//   const saloon = fs.readFile("./src/scripts/saloons.json", "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading JSON file:", err);
//       return;
//     }

//     // console.log(data)

//     let currentRowSeats = [];

//     try {
//       const cinemaData = JSON.parse(data).filter((saloonData) => saloonData.saloon == saloonNumber);
//       // cinemaData.map((item) => item.seats.map((seat) => console.log(seat)));

//       for (const saloonData of cinemaData) {
//         // if (saloonData.row === "next") {
//         //   printRow(currentRowSeats);
//         //   currentRowSeats = [];
//         // }
//         // console.log('saloonData', saloonData.seats.map((item) => console.log(item)))

//         for (const seat of saloonData.seats) {
//           // console.log('seat', seat)
//           const regular = (i) => {
//             return <div key={i} className="mx-2 bg-red-400 w-[2vw] h-[2vw] border"></div>;
//           };
//           const special = (i) => {
//             return <div key={i} className="mx-2 bg-red-400 w-[2vw] h-[2vw] border"></div>;
//           };
//           let count = 0;
//           for (let i = 0; i < seat.count; i++) {
//             currentRowSeats.push(seat.type === "regular" ? regular(count) : special(count)); //LINE TO TEST SCRIPT WITH (remove later)
//             count++;
//           }
//           //===============
//           //input all the react components here
//           //===============
//           /*
//           component or function to build a seat with movieid, screening details and seat number, bind that with a push to Db
//           add parameter for 'regular' and 'special'
//           */
//           if (
//             currentRowSeats.length > 0 &&
//             (seat.row === "next" || !saloonData.seats.includes(seat))
//           ) {
//             currentRowSeats.push("\n");
//           }
//         }
//       }

//       printRow(currentRowSeats);
//     } catch (parseError) {
//       console.error("Error parsing JSON:", parseError);
//     }
//     // console.log(currentRowSeats)

//     function printRow(seats) {
//       if (seats.length > 0) {
//         // console.log(seats.join(""));
//       }
//       return currentRowSeats;
//     }
//   });
//   return saloon;
// }

// // renderSaloon(1);

import React from "react";
import { useRouter } from "next/router";

export async function fetchSaloon(saloonNumber) {
  try {
    const response = await fetch(`api/booking?saloon=${saloonNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch saloon data: ${response.statusText}`);
      // console.log('error in fetch')
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching saloon data:", error);
    throw error; // Re-throw the error to handle it elsewhere
  }
}

export async function RenderSaloon(saloonNumber) {
  try {
    const cinemaData = JSON.parse(fetchSaloon(1));
    if (cinemaData.length === 0) {
      console.error("Saloon not found.");
      return null;
    }

    let currentRowSeats = [];

    for (const saloonData of cinemaData) {
      for (const seat of saloonData.seats) {
        const regular = (i) => {
          return <div key={i} className="mx-2 bg-red-400 w-[2vw] h-[2vw] border"></div>;
        };
        const special = (i) => {
          return <div key={i} className="mx-2 bg-red-400 w-[2vw] h-[2vw] border"></div>;
        };
        let count = 0;
        for (let i = 0; i < seat.count; i++) {
          currentRowSeats.push(seat.type === "regular" ? regular(count) : special(count));
          count++;
        }
        if (
          currentRowSeats.length > 0 &&
          (seat.row === "next" || !saloonData.seats.includes(seat))
        ) {
          currentRowSeats.push(<br key={-1} />);
        }
      }
    }

    return currentRowSeats;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
