export default function Bookings() {
  return (
    <div className="col-span-6 w-full bg-stone-800 flex flex-col items-center gap-8 mb-10">
      <h1 className="text-2xl text-stone-200 text-center mt-8">Bookings</h1>
      <div className="text-stone-200 border-2 border-solid border-stone-300 bg-stone-700 w-3/4 md:w-3/5 xl:w-1/2 2xl:w-1/3 min-h-32 shadow-md rounded-md p-4">
        <ul className="pl-2">
          <li className="p-2 my-4">
            <span>Movie title</span>
          </li>
          <li className="p-2 my-4">
            <span>Booking ref: 912803euqs</span>
          </li>
          <li className="p-2 my-4">
            <span>Time: 2021-08-20 18:00</span>
          </li>
          <li className="p-2 my-4">
            <span>Seats: 2</span>
          </li>
          <li className="p-2 my-4">
            <span>Price: 200 SEK</span>
          </li>
        </ul>
      </div>
      <div className="text-stone-200 border-2 border-solid border-stone-300 bg-stone-700 w-3/4 md:w-3/5 xl:w-1/2 2xl:w-1/3 min-h-32 shadow-md rounded-md p-4">
        <ul className="pl-2">
          <li className="p-2 my-4">
            <span>Movie title</span>
          </li>
          <li className="p-2 my-4">
            <span>Booking ref: 912803euqs</span>
          </li>
          <li className="p-2 my-4">
            <span>Time: 2024-03-20 21:00</span>
          </li>
          <li className="p-2 my-4">
            <span>Seats: 3</span>
          </li>
          <li className="p-2 my-4">
            <span>Price: 300 SEK</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
