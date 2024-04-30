export default function SideBar() {
  return (
    <aside className="w-1/6 bg-slate-500 h-full flex flex-col py-4">
      <h1 className="text-center mt-8 text-2xl">Profile</h1>
      <h2 className="text-center mt-3 text-xl">Namn</h2> {/* The name of the user is displayed */}
      <nav className=" my-8 flex flex-col gap-4 w-full">
        <h3 className="bg-white bg-opacity-10 p-2 hover:bg-opacity-20 hover:cursor-pointer rounded-md pl-4">
          General
        </h3>{" "}
        {/* Shows user information */}
        <h3 className="bg-white bg-opacity-10 p-2 hover:bg-opacity-20 hover:cursor-pointer  rounded-md pl-4">
          Bookings
        </h3>{" "}
        {/* Shows all the bookings that the user has done */}
        <h3 className="bg-white bg-opacity-10 p-2 hover:bg-opacity-20 hover:cursor-pointer rounded-md pl-4">
          Reviews
        </h3>{" "}
        {/* Shows all the reviews the user has done */}
        <h3 className="bg-white bg-opacity-10 p-2 hover:bg-opacity-20 hover:cursor-pointer rounded-md pl-4">
          Settings
        </h3>{" "}
        {/* The user can change account information */}
      </nav>
    </aside>
  );
}
