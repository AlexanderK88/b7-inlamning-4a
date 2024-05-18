export async function fetchScreeningTimes(id, date) {
  const formattedDate = createDateIndex(date);

  const resp = await fetch(`http://localhost:3000/api/booking/${id}/times/?date=${formattedDate}`);
  const data = await resp.json();

  return data.data;

  {
    /*return fetch(`http://localhost:3000/api/booking/${id}/times/?date=${formattedDate}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(res.json());
      return res.json();
    })
    .catch((error) => {
      throw error;
    });*/
  }
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
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const year = new Date().getFullYear();
  const month = monthIndex[monthParts[1]];
  const day = monthParts[0];
  return `${year}-${month}-${day}`;
}
