import mongoose from "mongoose";

const findBookedSeats = new mongoose.Schema({
  movieID: { type: Number, required: true },
  date: { type: Date },
  time: { type: String },
});

export default mongoose.models.Booking || mongoose.model("Booking", findBookedSeats);
