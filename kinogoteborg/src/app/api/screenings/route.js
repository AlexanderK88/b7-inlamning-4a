import connectToDb from "@/lib/connectToDb";
import Screening from "@/models/screeningsModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { movieID, date, startTime } = await req.json();

    await connectToDb();

    const screenings = await Screening.find({});

    const length = screenings.length;

    await Screening.create({
      id: length + 1,
      attributes: {
        movieID,
        date,
        startTime,
      },
    });

    return NextResponse.json({ message: "Screening registered successfully", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Error while registering screening",
      status: 400,
    });
  }
}
