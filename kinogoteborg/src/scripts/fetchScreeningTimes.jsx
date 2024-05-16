export async function fetchScreeningTimes(id, date) {
    const formattedDate = createDateIndex(date);

    return fetch(`http://localhost:3000/api/booking/${id}/times/?date=${formattedDate}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(id);
      console.log(date);
      console.log(data);
      setScreeningTimes(data.data);
      setSelectedTime(data.data[0]);
    });
}

function createDateIndex(dateMonthName) {
  const monthParts = dateMonthName.split(" ");
  const monthIndex = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const year = new Date().getFullYear();
  const month = monthIndex[monthParts[i]];
  const day = monthParts[0];
  return `${year}-${month}-${day}`;
}