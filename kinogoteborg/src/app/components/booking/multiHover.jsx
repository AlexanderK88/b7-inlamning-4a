"use client";

const fetchKeyData = (Event) => Event.target.getAttribute("data-key").split("_")[1];
let bookSeats = [];
let clickedSeats = [];
let oldSeats = [];

const fetchLayerKeyData = (event) => {
  let parentElement = event.target;
  while (parentElement !== null) {
    const layerKey = parentElement.getAttribute("layer-key");
    if (layerKey !== null) {
      return layerKey.split(":")[1];
    }
    parentElement = parentElement.parentNode;
  }
  return null;
};

const hoverSeats = (Event, amountOfSeats, inOreOut) => {
  bookSeats = [];

  const layerElement = fetchLayerKeyData(Event); // event is assumed to be available
  // LIMIT MAX_SEAT_VALUE TO RENDER A NO-GO APPERENCE

  const seat = fetchKeyData(Event);
  // Generate an array of seat keys from seat to seat + amountOfSeats
  let notToHigh = true;
  if (Number(seat) + amountOfSeats > Number(layerElement) + 1) {
    notToHigh = false;
  }
  for (let i = seat; i < amountOfSeats + Number(seat); i++) {
    if (i <= Number(layerElement)) {
      if (document.querySelector(`[data-key=seat_${i}]`)) {
        bookSeats.push(`seat_${i}`);
      } else if (document.querySelector(`[data-key=seat_${i}_S]`)) {
        bookSeats.push(`seat_${i}_S`);
      }
    }
  }
  // Iterate over each seat key and apply hover effect
  bookSeats.forEach((seatKey) => {
    const element = document.querySelector(`[data-key="${seatKey}"]`);
    const booked = !element.getAttribute("data-key").includes(`${seatKey}_B`);
    if (element) {
      booked
        ? inOreOut
          ? notToHigh
            ? element.classList.add("opacity-50")
            : element.classList.add("bg-red-900")
          : notToHigh
            ? element.classList.remove("opacity-50")
            : element.classList.remove("bg-red-900")
        : null;
    }
  });
};

const handleSeatsToBook = (event, setSeatsToBook, seats) => {
  if (bookSeats.length != seats) {
    return null;
  }

  if (clickedSeats) {
    clickedSeats.forEach((seatKey) => {
      const element = document.querySelector(`[data-key="${seatKey}"]`);
      if (element) {
        element.classList?.remove("bg-white");
      }
    });
  }

  clickedSeats = bookSeats;

  clickedSeats.forEach((seatKey) => {
    const element = document.querySelector(`[data-key="${seatKey}"]`);
    if (element) {
      element.classList.add("bg-white");
    }
  });

  // Update the seats to book based on the clicked seat
  setSeatsToBook((prevSeatsToBook) => {
    // Toggle the clicked seat: if it's already in the array, remove it; otherwise, add it
    if (prevSeatsToBook.includes(bookSeats)) {
      return prevSeatsToBook.filter((seat) => seat !== bookSeats);
    } else {
      return [bookSeats];
    }
  });
};

export { hoverSeats, handleSeatsToBook };
