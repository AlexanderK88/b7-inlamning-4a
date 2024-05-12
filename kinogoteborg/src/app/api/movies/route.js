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

export async function POST(req) {
  try {
    const { title, description, imdbRating, url, alt, releaseDate, genre } = await req.json();

    await connectToDb();

    const movies = await Movie.find({});

    const length = movies.length;

    await Movie.create({
      id: length + 1,
      attributes: {
        title,
        description,
        imdbRating,
        image: {
          url,
          alt,
        },
        releaseDate,
        genre,
      },
    });

    return NextResponse.json({ message: "Movie registered successfully", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error while registering movie", status: 400 });
  }
}
