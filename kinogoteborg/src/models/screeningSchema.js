import mongoose from "mongoose";

const screeningSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  attributes: {
    movieID: { type: Number, required: true },
    screenings: [
      {
        date: { type: Date, required: true },
        startTimes: {
          time: { type: Date, required: true },
        },
      },
    ],
  },
});

export default mongoose.models.Screening || mongoose.model("Screening", screeningSchema);
