import connectToDb from "@/lib/connectToDb";
import { NextResponse } from "next/server";
import Saloon from "@/models/saloonModel";

export async function GET(req) {
  await connectToDb();

  try {
    const reqSaloon = await Saloon.find(req.query);
    console.log(reqSaloon);
    return NextResponse.json({ success: true, data: reqSaloon });
  } catch (err) {
    console.error("Error fetching saloon:", err);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch saloon data",
    });
  }
}
