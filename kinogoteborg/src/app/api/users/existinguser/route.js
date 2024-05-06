import connectToDb from "@/lib/connectToDb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDb();
    const { email } = await req.json();
    const user = await User.findOne({ "attributes.email": email }).select("_id");

    if (!user) {
      return NextResponse.json({ user: null });
    }
    return NextResponse.json({ user });
  } catch (error) {
    console.error(error);
  }
}
