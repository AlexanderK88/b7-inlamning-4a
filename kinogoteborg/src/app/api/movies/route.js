import connectToDb from "@/lib/connectToDb";
import Movie from "@/models/movieModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDb();

  try {
    const movies = await Movie.find();

    return NextResponse.json({ success: "true", data: movies });
  } catch (err) {
    return NextResponse.json({ success: "false", error: err });
  }
}
