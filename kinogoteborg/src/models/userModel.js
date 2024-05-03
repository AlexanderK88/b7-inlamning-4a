import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  attributes: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    admin: { type: Boolean, required: true },
    handicap: { type: Boolean, required: true },
    bookings: { type: Array, required: true },
    reviews: { type: Array, required: true },
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
