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
