import connectToDb from "@/lib/connectToDb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function PATCH(req) {
  const { password, email } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await connectToDb();
    const user = await User.findOne({ "attributes.email": email });

    if (!user) {
      return resizeBy.status(404).json({ success: "false", error: "User not found" });
    }

    user.attributes.password = hashedPassword;
    await user.save();

    return NextResponse.json({ success: "true", data: user });
  } catch (err) {
    return NextResponse.json({ success: "false", error: err.message });
  }
}
