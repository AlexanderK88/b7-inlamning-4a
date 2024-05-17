import connectToDb from "@/lib/connectToDb";
import Review from "@/models/reviewModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const userID = params.id;
    await connectToDb();

    const reviews = await Review.find({ "attributes.userID": userID });

    return NextResponse.json({ success: "true", data: reviews });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: "false", error: error.message });
  }
}
