import connectToDb from "@/lib/connectToDb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  const { name, email } = await req.json();
  try {
    await connectToDb();
    const user = await User.findOne({ "attributes.email": email });
    if (!user) {
      return res.status(404).json({ success: "false", error: "User not found" });
    }

    user.attributes.name = name;
    await user.save();

    return NextResponse.json({ success: "true", data: user });
  } catch (err) {
    return NextResponse.json({ success: "false", error: err.message });
  }
}
