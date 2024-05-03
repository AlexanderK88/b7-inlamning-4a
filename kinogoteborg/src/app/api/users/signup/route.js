import User from "@/models/userModel";
import connectToDb from "@/lib/connectToDb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  const id = uuidv4();
  try {
    const { email, password, name, phoneNumber } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDb();
    await User.create({
      id: id,
      attributes: {
        name,
        email,
        password: hashedPassword,
        phoneNumber,
        admin: false,
        handicap: false,
        bookings: [],
        reviews: [],
      },
    });

    return NextResponse.json({ message: "User registered successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error while registering user" }, { status: 400 });
  }
}
