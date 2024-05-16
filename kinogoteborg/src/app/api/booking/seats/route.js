import connectToDb from "@/lib/connectToDb";
import { NextResponse } from "next/server";
import Booking from "@/models/bookingSeatModel";
import { v4 as uuidv4 } from "uuid";
// THIS IS FOR CHOSING SEATS

/*
 POST uuid, id, date, time, seats. Hold
    // needs to create uuid
 PUT "new Seats"
    //  needs to  save old seats
*/

export async function POST(req) {
  const uuid = uuidv4();

  try {
    const { userID, date, time, seats, isBooked } = await req.json();

    await connectToDb();

    await Booking.create({
      uuid: uuid,
      userID: userID || "",
      details: {
        date,
        time,
        seats,
        isBooked,
      },
    });

    return NextResponse.json({
      message: "Request for seats successfully executed",
      status: 200,
      uuid: uuid,
    });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ message: "Error while requesting seats to hold", status: 400 });
  }
}

export async function PUT(req) {
  try {
    const { seats, uuid } = await req.json();

    await connectToDb();

    const filter = { uuid: uuid };
    const update = { "details.seats": seats };

    let doc = await Booking.findOneAndUpdate(filter, update, {
      returnOriginal: false,
    });

    return NextResponse.json({ message: "Successfully changed seats", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Could not update the chosens seats, please try again",
      status: 400,
    });
  }
}
