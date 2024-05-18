import connectToDb from "@/lib/connectToDb";
import Screening from "@/models/screeningsModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id;

  const url = new URL(req.url);
  const date = url.searchParams.get("date");
  const dateObj = new Date(date);

  //To match -2 hours in database to get a full day
  //due to the case of manually filling database
  //with +2 hours using Postman.
  //When database is correct startOfDate & endOfDate can
  //be updated with (0, 0, 0, 0) respectively (23, 59, 59, 999).
  const startOfDate = new Date(dateObj.setHours(2, 0, 0, 0));
  const endOfDate = new Date(startOfDate);
  endOfDate.setDate(endOfDate.getDate() + 1);
  endOfDate.setHours(1, 59, 59, 999);

  if (!date) {
    return NextResponse.json({ success: "false", error: "Date is missing" });
  }

  await connectToDb();

  try {
    const screenings = await Screening.find({
      "attributes.movieID": id,
      "attributes.date": {
        $gte: startOfDate,
        $lte: endOfDate,
      },
    });

    return NextResponse.json({ success: "true", data: screenings });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: "false", error: error.message });
  }
}
