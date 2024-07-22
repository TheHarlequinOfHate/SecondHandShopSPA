import useForm from "../../hooks/useForm";


export default function Form() {
  const {values, onChangeHandler , onLoginClick} = useForm(loginHandler,{
    email: '',
    password: ''
  });

  console.log(values)
  return (
    <>
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 ">
        <h1 className="text-5xl font-semibold">Welcome Back</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Welcome back! Please enter your details.
        </p>
        <div className="mt-8">
          <form id="login">
            <div>
              <label htmlFor="email" className="text-lg font-medium">
                Email
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                onChange={onChangeHandler}
                value={values.email}
              ></input>
            </div>
            <div>
              <label htmlFor="password" className="text-lg font-medium">
                Password
              </label>
              <input
                placeholder="Enter your password"
                type="password"
                name="password"
                id="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                onChange={onChangeHandler}
                value={values.password}
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
                <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
                  onClick={onLoginClick}
                >
                  Log In
                </button>
                <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">Register</button>
            
            </div>
        </div>
      </div>
    </>
  );
}
