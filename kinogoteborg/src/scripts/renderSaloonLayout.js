import fs from "fs";


//Fetches data from "Saloon" collection-db to render the requested saloon.

export default async function renderSaloon(saloonNumber) {


    fs.readFile("./saloons.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading JSON file:", err);
        return;
      }
      
      console.log('test')
      
      let currentRowSeats = [];
  
      try {
        const cinemaData = JSON.parse(data)
        .filter(
          (saloonData) => saloonData.saloon == saloonNumber);
          console.log('test cinmea')
  
        for (const saloonData of cinemaData) {
          // if (saloonData.row === "next") {
          //   printRow(currentRowSeats);
          //   currentRowSeats = [];
          // }
  
          for (const seat of saloonData.seats) {
            currentRowSeats.push(seat.type === "regular" ? "X" : "D"); //LINE TO TEST SCRIPT WITH (remove later)
            //===============
            //input all the react components here
            //===============
            /*
          component or function to build a seat with movieid, screening details and seat number, bind that with a push to Db
          add parameter for 'regular' and 'special'
          */
            if (
              currentRowSeats.length > 0 &&
              (seat.row === "next" || !saloonData.seats.includes(seat))
            ) {
              currentRowSeats.push("\n");
            }
          }
        }
  
        printRow(currentRowSeats);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
      }
      // console.log(currentRowSeats)
      
      function printRow(seats) {
        if (seats.length > 0) {
          // console.log(seats.join(""));
        }
        return currentRowSeats;
      }
  
    });
    
    
  }