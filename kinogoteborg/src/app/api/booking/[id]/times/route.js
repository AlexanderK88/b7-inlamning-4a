import connectToDb from "@/lib/connectToDb";
import Screening from "@/models/screeningsModel";
import { NextResponse } from "next/server";

export async function GET(req, { params, query }) {
  const id = params.id;
  console.log(id);
  console.log(query.date);
  const date = query.date; //or searchParams i stället för query, searchParams.get('date');
  console.log(id);
  console.log(date);

  if (!date) {
    return NextResponse.json({ success: "false", error: "Date is missing" });
  }

  await connectToDb();
  try {
    const screenings = await Screening.find({
      "attributes.movieID": id,
      "attributes.date": date //new Date(date)
    });

    {/*const screenings = await Screening.aggregate([
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
    ]);*/}

    return NextResponse.json({ success: "true", data: screenings });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: "false", error: error.message });
  }
}
