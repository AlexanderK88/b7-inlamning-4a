export default async function Movies() {
  const res = await fetch("http://localhost:3000/api/movies");
  const data = await res.json();
  const movies = data.data;
  return (
    <>
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className="rounded-md bg-stone-700 w-5/5 max-w-64 m-4 flex flex-col justify-between items-center"
          >
            <img
              className="w-64 h-96 rounded-md shadow-md"
              src={movie.attributes.image.url}
              alt={movie.attributes.image.alt}
            />
            <h2
              className={`${
                movie.attributes.title.length >= 16 ? "text-xl" : "text-2xl"
              } text-white mt-4 mb-2 text-center`}
            >
              {movie.attributes.title}
            </h2>
            <button className="w-full p-2 m-2 bg-red-800 text-stone-300 rounded-full hover:bg-red-700 mb-5 hover:font-bold">
              Book Now
            </button>
          </div>
        );
      })}
    </>
  );
}
