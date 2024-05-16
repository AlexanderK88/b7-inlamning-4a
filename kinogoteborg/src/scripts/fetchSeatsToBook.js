const postSeats = (movieID, seatsToBook, date, time, userID) => {
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

  fetch("http://localhost:3000/api/booking/seats", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

const putSeats = (seatsToBook, uuid, status) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    uuid: uuid,
    seats: seatsToBook,
    isBooked: status,
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
