export default function Form() {
  return (
    <>
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 ">
        <h1 className="text-5xl font-semibold">Welcome Back</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Welcome back! Please enter your details.
        </p>
        <div className="mt-8">
          <form >
            <div>
              <label htmlFor="Email" className="text-lg font-medium">
                Email
              </label>
              <input
                placeholder="Enter your email"
                type="text"
                name="email"
                id="email"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              ></input>
            </div>
            <div>
              <label htmlFor="Password" className="text-lg font-medium">
                Password
              </label>
              <input
                placeholder="Enter your password"
                type="password"
                name="passwoed"
                id="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              ></input>
            </div>
          </form>
          <div className="mt-8 flex justify-between items-center">
                <div >
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="ml-2 font-medium text-base">
                    Stay Logged In
                </label>
                </div>
                <button className="font medium text-base text-violet-500">
                    Forgot password
                </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
                <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">Sign In</button>
            </div>
        </div>
      </div>
    </>
  );
}
