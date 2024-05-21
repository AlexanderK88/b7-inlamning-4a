import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
  movieID: { type: String, required: true },
  uuid: { type: String, required: true },
  userID: { type: String, required: false },
  details: {
    date: { type: String, required: true },
    time: { type: String, required: true },
    seats: { type: Array, required: true },
    isBooked: { type: Boolean, required: true },
  },
});

export default mongoose.models.Booking || mongoose.model("Booking", seatSchema);
