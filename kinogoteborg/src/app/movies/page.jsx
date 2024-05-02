import Movies from "../components/movies/Movies";

export default function Page() {
  return (
    <main className="w-4/4 h-3/4 mx-auto bg-stone-700 flex flex-wrap justify-evenly gap-8 max-w-7xl">
      <Movies />
    </main>
  );
}
