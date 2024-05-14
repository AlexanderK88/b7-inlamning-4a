import connectToDb from "@/lib/connectToDb";
import Screening from "@/models/screeningsModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id, date } = params;

  await connectToDb();
  try {
    const screenings = await Screening.aggregate([
      {
        $match: {
          "attributes.movieID": id,
          "attributes.startTime": new Date(date),
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "HY-%M", date: "$attributes.startTime" } },
        },
      },
    ]);

    return NextResponse.json({ success: "true", data: screenings });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: "false", error: error.message });
  }
}
