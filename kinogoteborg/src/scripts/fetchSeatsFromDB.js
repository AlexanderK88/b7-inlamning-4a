async function fetchBookedSeats(movieID, date, time) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    movieID: movieID,
    date: date,
    time: time,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch("http://localhost:3000/api/booking/find", requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    console.error("Error booking seats:", error);
    throw error; // Optionally re-throw the error for further handling
  }
}

export { fetchBookedSeats };
