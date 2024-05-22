const fs = require("fs");
const { formatISO, addDays } = require("date-fns");

// Constants
const movieID = 22;
const movieTimes = ["15:00", "21:00"];
let id = 188;

// Initialize dates
let currentDate = new Date();
let firstTime = new Date(currentDate);
firstTime.setHours(15, 0, 0, 0);
let secondTime = new Date(currentDate);
secondTime.setHours(21, 0, 0, 0);

function setNewDate(initialDate, days) {
  let newDate = addDays(initialDate, days);
  return formatISO(newDate);
}

const screenings = [];

// Generate screening data
for (let movie = 1; movie <= movieID; movie++) {
  for (let i = 0; i < 100; i++) {
    // Screening 1
    const screening1 = {
      id: id++,
      attributes: {
        movieID: movie,
        date: setNewDate(firstTime, i),
        startTime: setNewDate(firstTime, i),
      },
    };

    // Screening 2
    const screening2 = {
      id: id++,
      attributes: {
        movieID: movie,
        date: setNewDate(secondTime, i),
        startTime: setNewDate(secondTime, i),
      },
    };

    screenings.push(screening1);
    screenings.push(screening2);
  }
}

// Write screenings to file
fs.writeFileSync("screenings.json", JSON.stringify(screenings, null, 2), "utf8");
