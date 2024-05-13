"use client";

const fetchKeyData = (Event) => Event.target.getAttribute("data-key").split("_")[1];
let bookSeats = [];

const fetchLayerKeyData = (event) => {
  let parentElement = event.target;
  while (parentElement !== null) {
    const layerKey = parentElement.getAttribute("layer-key");
    if (layerKey !== null) {
      return layerKey.split(":")[1];
    }
    parentElement = parentElement.parentNode;
  }
  // Desired parent element not found, return null or handle appropriately
  return null;
};

const fetchMaxSeatKey = (element) => {
  if (element) {
    const seatKeys = Array.from(element.querySelectorAll("[seat-key]")).map((seatElement) =>
      parseInt(seatElement.getAttribute("seat-key"), 10),
    );
    return Math.max(...seatKeys);
  }
  return null; // Handle case when element is null
};

const bookingHover = (Event) => {
  // const value = event.target.getAttribute('data-key').split('_')[1];
  const halfValue = Number(fetchKeyData(Event)) / 2;

  const lowValue = Math.floor(halfValue);
  const highValue = Math.ceil(halfValue);

  return console.log("low: ", lowValue, "high: ", highValue, "sum: ", lowValue + highValue);
};

const hoverSeats = (Event, amountOfSeats, inOreOut) => {
  bookSeats = [];

  const layerElement = fetchLayerKeyData(Event); // event is assumed to be available
  console.log("layer counter: ", layerElement);
  // LIMIT MAX_SEAT_VALUE TO RENDER A NO-GO APPERENCE

  const seat = fetchKeyData(Event);
  //   console.log("layer: ", fetchLayerKeyData(Event));
  // Generate an array of seat keys from seat to seat + amountOfSeats
  for (let i = seat; i < amountOfSeats + Number(seat); i++) {
    bookSeats.push(`seat_${i}`);
  }
  // Iterate over each seat key and apply hover effect
  bookSeats.forEach((seatKey) => {
    const element = document.querySelector(`[data-key="${seatKey}"]`);
    if (element) {
      inOreOut ? element.classList.add("opacity-50") : element.classList.remove("opacity-50");
    }
  });
};

const handleSeatsToBook = (event, setSeatsToBook) => {
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

export { bookingHover, hoverSeats, handleSeatsToBook };
