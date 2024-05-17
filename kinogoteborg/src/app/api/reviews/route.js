import connectToDb from "@/lib/connectToDb";
import Review from "@/models/reviewModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { movieID, rating, author, comment } = await req.json();

    await connectToDb();

    const reviews = await Review.find({});

    const length = reviews.length;

    await Review.create({
      id: length + 1,
      attributes: {
        movieID,
        rating,
        author,
        comment,
      },
    });

    return NextResponse.json({ message: "Review registered successfully", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error while registering review", status: 400 });
  }
}
