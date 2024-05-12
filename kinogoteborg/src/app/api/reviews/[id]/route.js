import connectToDb from "@/lib/connectToDb";
import Review from "@/models/reviewModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id;
  console.log(id);
  try {
    await connectToDb();
    const reviews = await Review.find({ "attributes.movieID": id });

    return NextResponse.json({ success: "true", data: reviews });
  } catch (err) {
    return NextResponse.json({ success: "false", error: err });
  }
}
