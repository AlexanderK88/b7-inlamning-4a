import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  attributes: {
    movieID: { type: Number, required: true },
    rating: { type: Number, required: true },
    author: { type: String, required: true },
    comment: { type: String, required: true },
  },
});

const Review = mongoose.model("reviews", reviewSchema);

export default Review;
