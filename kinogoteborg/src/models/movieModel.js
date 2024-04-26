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
    releaseDate: { type: Date, required: true },
    genre: { type: Array, required: true },
  },
});

const Movie = mongoose.model("movies", movieSchema);

export default Movie;
