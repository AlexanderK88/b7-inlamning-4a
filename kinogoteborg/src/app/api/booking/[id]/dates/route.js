import connectToDb from "@/lib/connectToDb";
import Screening from "@/models/screeningsModel";
import { NextResponse } from "next/server";

export async function GET(req, { params, query }) {
  const id = params.id;

  //only first five days of interest to render page
  const today = new Date();
  const start = new Date(today);
  const end = new Date(today);
  end.setDate(end.getDate() + 5);

  const startDate = start.toISOString().slice(0, 10);
  const endDate = end.toISOString().slice(0, 10);

  const queryStartDate = query ? query.startDate : null;
  const queryEndDate = query ? query.endDate : null;

  await connectToDb();
  try {
    const screenings = await Screening.find({
      "attributes.movieID": id,
      "attributes.date": {
        $gte: new Date(queryStartDate || startDate),
        $lte: new Date(queryEndDate || endDate),
      },
    });

    return NextResponse.json({ success: "true", data: screenings });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: "false", error: error.message });
  }
}
