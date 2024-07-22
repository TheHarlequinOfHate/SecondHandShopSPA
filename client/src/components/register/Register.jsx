export default function Register() {
    return (
        <>
            <div id="mainbody" className="flex justify-center flex-col items-center p-20 bg-gradient-to-tr from-neutral-200 to-neutral-100 h-screen">
                <h1 className="mb-20 text-violet-400 rounded-lg w-6/12 h-10 font-bold text-center text-2xl ">Please Fill The Form Below To Create Your Account </h1>
                    <form className="border-2 border-violet-200 flex items-center flex-col w-3/12 h-5/6 bg-white rounded-lg shadow-lg">
                    <div className=" flex items-center flex-col ">
                        <label htmlFor="username"
                            className="pt-8 pb-2 font-bold text-xl"
                         >Username</label>
                        <input 
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter Your Username"
                            className="pt-2 pb-2 border-2 border-violet-300 rounded-md text-center text-violet-500 font-bold flex w-80 h-15"
                        ></input>
                        <label htmlFor="password" 
                            className="pt-8 pb-2 font-bold text-xl t"
                        >Password</label>
                        <input 
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Your Password"
                            className="pt-2 pb-2 border-2 border-violet-300 rounded-md text-center text-violet-500 font-bold flex w-80 h-15"

                        ></input>
                        <label htmlFor="email"
                            className="pt-8 pb-2 font-bold text-xl"
                        >Email</label>
                        <input 
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email"
                            className="pt-2 pb-2 border-2 border-violet-300 rounded-md text-center text-violet-500  font-bold flex w-80 h-15"
                            ></input>
                        <label htmlFor="country"
                            className="pt-8 pb-2 font-bold text-xl "
                        >Country</label>
                        <input 
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Enter Your Country"
                            className="pt-2 pb-2 border-2 border-violet-300 rounded-md text-center text-violet-500  font-bold flex w-80 h-15"
                        ></input>
                        <button type="submit" className="flex mt-20 flex-grow-1 w-full h-10 rounded-lg font-bold text-2xl justify-center text-white bg-violet-500 hover:bg-violet-700 font-mono ">
                            Register
                            </button>
                    </div>
                    </form>
            </div>
        </>
    )
}