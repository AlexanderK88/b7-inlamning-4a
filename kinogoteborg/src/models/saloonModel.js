const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  row: { type: String, enum: ["next", "same"] },
  type: { type: String, enum: ["regular", "special"] },
  count: Number,
});

const saloonSchema = new mongoose.Schema({
  id: Number,
  saloon: Number,
  seats: [seatSchema],
  special: [String],
});

export default mongoose.models.Saloon || mongoose.model("Saloon", saloonSchema);
