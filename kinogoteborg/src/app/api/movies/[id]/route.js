import connectToDb from "@/lib/connectToDb";
import Movie from "@/models/movieModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id;
  await connectToDb();
  try {
    const movie = await Movie.findOne({ id: id });

    return NextResponse.json({ success: "true", data: movie });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: "false", error: error.message });
  }
}
