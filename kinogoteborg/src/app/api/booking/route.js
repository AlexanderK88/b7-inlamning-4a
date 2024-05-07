import connectToDb from "@/lib/connectToDb";
import { NextRequest, NextResponse } from "next/server";
import Saloon from "@/models/saloonModel";

export async function GET(input) {
  await connectToDb();

  try {
    const saloon = await Saloon.find(input);
    console.log(saloon);
    return NextResponse.json({ success: "true", data, saloon });
  } catch (err) {
    return NextResponse.json({ success: "false", error: err });
  }
}
