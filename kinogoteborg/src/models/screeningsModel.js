import mongoose from "mongoose";

const screeningSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  attributes: {
    movieID: { type: Number, required: true },
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    seats: { type: Array, required: true },
  },
});

const Screening = mongoose.model("screenings", screeningSchema);

export default Screening;
