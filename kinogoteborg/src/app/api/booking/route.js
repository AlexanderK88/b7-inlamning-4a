// "use server"

import connectToDb from "@/lib/connectToDb";
import { NextResponse } from "next/server";
import Saloon from "@/models/saloonModel";

export async function GET(req) {
  await connectToDb();

  try {
    console.log("query", req.query.saloon);
    const reqSaloon = await Saloon.find(req.query);
    // console.log(reqSaloon);
    return NextResponse.json({ success: true, data: reqSaloon });
  } catch (err) {
    console.error("Error fetching saloon:", err);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch saloon data",
    });
  }
}

export async function POST(req) {
  try {
    await connectToDb();
    // Extract data from the ReadableStream and parse it as JSON
    const saloonData = await parseStreamAsJSON(req.body);
    //   console.log("Saloon data:", saloonData);

    // Assuming saloonData contains the saloon information
    const reqSaloon = await Saloon.find({ saloon: saloonData.saloon });
    //   console.log("Saloon:", reqSaloon);

    return NextResponse.json({ success: true, data: reqSaloon });
  } catch (err) {
    console.error("Error fetching saloon:", err);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch saloon data",
    });
  }
}

async function parseStreamAsJSON(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  const data = Buffer.concat(chunks).toString();
  return JSON.parse(data);
}
