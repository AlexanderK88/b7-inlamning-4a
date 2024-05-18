import connectToDb from "@/lib/connectToDb";
import { NextResponse } from "next/server";
import findBookedSeats from "@/models/findBookedSeats";

export async function GET(req, { params }) {
  const movieID = params.movieID;
  const date = params.date;
  const time = params.time;

  if (!movieID || !date || !time) {
    return NextResponse.json({ error: "failed with parameters", status: 400 });
  }

  try {
    await connectToDb();
    const seats = await findBookedSeats.find({
      movieID: /^movieID$/i,
      "details.date": /^date$/i,
      "details.time": /^time$/i,
    });

    return NextResponse.json({
      message: "successful fetch of booked seats",
      status: 200,
      data: seats,
    });
  } catch (e) {
    return NextResponse.json({ message: "Failure to fetch seats for movie", status: 400 });
  }
}

export async function POST(req) {
  try {
    await connectToDb();

    // Parse request body
    const body = await req.json();
    const { movieID, date, time } = body;

    // Validate parameters
    if (!movieID || !date || !time) {
      return NextResponse.json({
        message: "Invalid parameters. Please provide movieID, date, and time.",
        status: 400,
      });
    }

    // Query the database for booked seats for the specific movieID, date, and time
    const seats = await findBookedSeats.find({
      movieID: movieID,
      "details.date": date,
      "details.time": time,
    });

    // Return the booked seats
    return NextResponse.json({
      message: "Successfully fetched booked seats",
      status: 200,
      data: seats,
    });
  } catch (e) {
    console.error("Error fetching booked seats:", e);
    return NextResponse.json({
      message: "Failure to fetch seats for movie",
      status: 500,
    });
  }
}
