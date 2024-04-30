import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  attributes: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imdbRating: { type: Number, required: true },
    image: {
      url: { type: String, required: true },
      alt: { type: String, required: true },
    },
    releaseDate: { type: String, required: true },
    genre: { type: Array, required: true },
  },
});

export default mongoose.models.Movie || mongoose.model("Movie", movieSchema);
