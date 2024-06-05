import { Suspense } from "react";
import RandomMovies from "./components/heroSection/RandomMovies";
import Hero from "./components/heroSection/Hero";
import CardSkeleton from "./ui/Skeletons";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="">
        <h2 className="flex flex-col text-white font-bold text-7xl items-center mb-30">
          With a wide variety of movies for every taste!
        </h2>
      </div>
      <h1 className="grid place-items-center mt-20 text-white font-bold">
        Some of the movies we have right now
      </h1>
      <Suspense
        fallback={
          <p className="text-center text-white">Loading some random movies</p>
        }
      >
        <RandomMovies />
      </Suspense>
    </>
  );
}
