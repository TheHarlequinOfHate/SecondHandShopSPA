import { useLogin } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";


const loginFormKeys = {
    email: 'email',
    password: 'password'
}


export default function LogIn(){
    const login = useLogin();

    const {values, onChangeHandler , onSubmitHandler} = useForm(({email,password}) => login(email,password),{
        [loginFormKeys.email]: '',
        [loginFormKeys.password]: '',
      });
    
    return(
        <>
            <div className="flex w-full h-screen "> 
                <div className="w-full flex items-center justify-center lg:w-1/2 ">
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
                name={loginFormKeys.email}
                id="email"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                onChange={onChangeHandler}
                value={values[loginFormKeys.email]}
              ></input>
            </div>
            <div>
              <label htmlFor="password" className="text-lg font-medium">
                Password
              </label>
              <input
                placeholder="Enter your password"
                type="password"
                name={loginFormKeys.password}
                id="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                onChange={onChangeHandler}
                value={values[loginFormKeys.password]}
              ></input>
            </div>
          </form>
          <div className="mt-8 flex flex-col gap-y-4">
                <button
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
                onClick={onSubmitHandler}
                >
                  Log In
                </button>
                <Link to='/login/register' 
                    className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white font-bold text-center"
                >
                    <button>Register</button>
                </Link>
            
            </div>
        </div>
      </div>
                </div>
                <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                    <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
                    <div className="w-full h-1/2 absolute bottom-0 bg-white-/10 backdrop-blur"/>
                </div>
            </div>
        </>
    )
}