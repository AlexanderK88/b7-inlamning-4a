export default function General() {
  return (
    <div className="h-full col-span-5 w-full bg-stone-700 flex flex-col items-center gap-8">
      <h1 className="text-2xl text-stone-200 text-center mt-8">General</h1>

      <div className="border-2 border-solid border-stone-500 bg-stone-700 w-3/4 min-h-32 shadow-md rounded-md text-stone-200">
        <ul className="ml-8">
          <li className="p-2 my-4">
            Name: <span>Name Surname</span>
          </li>
          <li className="p-2 my-4">
            Number: <span>+467012312345</span>
          </li>
          <li className="p-2 my-4">
            Email: <span>email@outlook.com</span>
          </li>
          <li className="p-2 my-4">
            Address: <span>Widows Alley, 90845 Stockholm</span>
          </li>
        </ul>
      </div>
      <div className="border-2 border-solid border-stone-500 bg-stone-700 w-3/4 min-h-32 shadow-md rounded-md text-stone-200 p-4">
        <h2 className="text-center text-xl my-2">Last watched movie</h2>
        <p className="text-center my-2">Movie title</p>
        <p className="text-center">Date</p>
      </div>
      <div className="border-2 border-solid border-stone-500 bg-stone-700 w-3/4 min-h-32 shadow-md rounded-md text-stone-200 p-4">
        <h2 className="text-center text-xl my-2">Last written review</h2>
        <p className="text-center my-2">Movie title</p>
        <p className="text-center">
          This movie was so so good, i really enjoyed it until the staff spit in my face and ate my
          popcorn
        </p>
      </div>
    </div>
  );
}
