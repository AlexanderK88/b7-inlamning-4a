export async function fetchScreeningDates(id) {
  if (!id) {
    return [];
  }

  try {
    const res = await fetch(`http://localhost:3000/api/booking/${id}/dates`);

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error when fetch dates", error);
    return [];
  }
}
