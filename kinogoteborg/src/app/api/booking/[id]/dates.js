import connectToDb from "@/lib/connectToDb";
import Screening from "@/models/screeningsModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const id = params.id; // or const { id } = params;

    //only first five days of interest to render page
    const today = new Date(); 
    const start = new Date(today); 
    const end = new Date(today); 
    end.setDate(end.getDate() + 4); 

    const startDate = start.toISOString() //.slice(0, 10);
    const endDate = end.toISOString() //.slice(0, 10);

    await connectToDb();
    try {
        const screenings = await Screening.aggregate([
            { $match: {
                "attributes.movieID": id,
                "attributes.date": { $gte: new Date(startDate), $lte: new Date(endDate) }
                }
            },
            { $group: {
                _id: { $dateToString: { format: "%Y-%m-%d", date: "$attributes.date" }}, 
                count: {$sum: 1} //if necessary to know for future code to render page?
            }}
        ])

        return NextResponse.json({ success: "true", data: screenings });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: "false", error: error.message });
    }
}