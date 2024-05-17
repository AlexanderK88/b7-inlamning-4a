const postSeats = async (movieID, seatsToBook, date, time, userID) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    movieID: movieID,
    userID: userID || "",
    date: date,
    time: time,
    seats: seatsToBook,
    isBooked: false,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch("http://localhost:3000/api/booking/seats", requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    console.error("Error booking seats:", error);
    throw error; // Optionally re-throw the error for further handling
  }
};

const putSeats = async (seatsToBook, uuid) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    uuid: uuid,
    seats: seatsToBook,
  });

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/api/booking/seats", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

export { postSeats, putSeats };
