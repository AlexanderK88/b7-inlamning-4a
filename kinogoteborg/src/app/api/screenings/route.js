import connectToDb from "@/lib/connectToDb";
import Screening from "@/models/screeningsModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { movieID, date } = await req.json();

    const newDate = new Date(date);
    const newStartTime = new Date(date);

    await connectToDb();

    const screeningCount = await Screening.countDocuments();

    await Screening.create({
      id: screeningCount + 1,
      attributes: {
        movieID,
        date: newDate,
        startTime: newStartTime,
      },
    });

    return NextResponse.json({ message: "Screening registered successfully", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Error while registering screening",
      error: error,
      status: 400,
    });
  }
}
