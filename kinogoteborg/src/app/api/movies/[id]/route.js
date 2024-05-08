import connectToDb from "@/lib/connectToDb";
import Movie from "@/models/movieModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  console.log("req.params: ", params.id);
  const id = params.id;
  console.log("id: ", id);
  await connectToDb();
  try {
    const movie = await Movie.findOne({ id: id });
    console.log(movie);

    return NextResponse.json({ success: "true", data: movie });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: "false", error: error.message });
  }
}
