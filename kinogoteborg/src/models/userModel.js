import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  attributes: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    bookings: { type: Array, required: true },
    admin: { type: Boolean, required: true },
    handicap: { type: Boolean, required: true },
  },
});

const User = mongoose.model("users", userSchema);

export default User;
