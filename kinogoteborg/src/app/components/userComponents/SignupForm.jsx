export default function SignupForm({ setIsRegistered }) {
  const hasUserHandler = () => {
    setIsRegistered(true);
  };
  return (
    <div className="min-h-1/3 bg-slate-400 min-w-3/5 md:w-2/5 xl:w-1/4 rounded-md shadow-md p-6 ">
      <h1 className="text-center my-4 text-xl font-bold">Sign up</h1>
      <form className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="fullName">
          Full Name
        </label>
        <input type="text" name="fullName" placeholder="Full Name" />
        <label className="font-bold" htmlFor="phone">
          Phone Number
        </label>
        <input type="text" name="phone" placeholder="Phone number" />
        <label className="font-bold" htmlFor="email">
          Email
        </label>
        <input type="email" name="email" placeholder="Email" />
        <label className="font-bold" htmlFor="password">
          Password
        </label>
        <input type="password" name="password" placeholder="password" />
        <button
          className=" mt-4 bg-red-800 hover:bg-red-700 text-stone-300 font-bold cursor-pointer px-6 py-2 rounded-md"
          onClick=""
        >
          Sign up
        </button>
        <div>
          <p className="text-right mt-4">
            Already have an account?
            <span
              className="font-bold underline hover:cursor-pointer ml-2 hover:text-stone-700"
              onClick={hasUserHandler}
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
