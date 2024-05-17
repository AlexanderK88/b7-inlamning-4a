import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
  uuid: { type: String, required: true },
  userID: { type: String },
  details: {
    date: { type: Date, required: true },
    time: { type: String, required: true },
    seats: { type: [String], required: true },
    isBooked: { type: Boolean, required: true },
  },
});

export default mongoose.models.Booking || mongoose.model("Booking", seatSchema);
