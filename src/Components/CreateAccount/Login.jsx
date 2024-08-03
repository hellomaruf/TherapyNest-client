import logo from "../../assets/Images/logo.png";
import facebook from "../../assets/Images/facebook.png";
import google from "../../assets/Images/google.png";
import loginImg from "../../assets/Images/login.png";

function Login() {
  return (
    <div className="bg-white ">
      <div className="grid grid-cols-2 px-6 items-center justify-center gap-8 h-screen max-w-7xl mx-auto">
        {/* Login Form */}
        <div className=" col-span-1">
          <div className="w-full  mx-auto overflow-hidden bg-white rounded-lg ">
            <div className=" py-4 max-w-[450px] mx-auto">
              <div className="flex  mx-auto">
                <img className="w-52" src={logo} alt="" />
              </div>

              <div className=" py-6">
                <h3 className="text-2xl  font-semibold">
                  Log In To Your Account
                </h3>

                <p className="mt-1 text-gray-500 text-sm">
                  Welcome Back! Select a method to log in:
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button className="btn px-12 bg-gradient-to-r from-[#e6e6e6] to-[#fff]">
                  <img className="w-5" src={google} alt="" />
                  Google
                </button>
                <button className="btn px-10 bg-[#278dfe] text-white">
                  <img className="w-6 " src={facebook} alt="" />
                  Facebook
                </button>
              </div>
              <div className="divider py-6">Or Continue with Email</div>
              <form>
                <div className="w-full mt-">
                  <label htmlFor="" className="font-medium">
                    Email
                  </label>
                  <input
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                </div>

                <div className="w-full mt-6">
                  <label htmlFor="" className="font-medium">
                    Password
                  </label>

                  <input
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm [--chkbg:theme(colors.blue.600)]"
                    />
                    <p className="text-sm">Remember me</p>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-[#156bca] underline  hover:text-gray-500"
                  >
                    Forget Password?
                  </a>
                </div>
                <div className="flex mt-12 items-center justify-center">
                  <button className="bg-[#156bca] btn text-white px-20">
                    Sign In
                  </button>
                </div>
              </form>
            </div>

            <div className="flex items-center justify-center pb-4 text-center ">
              <span className="text-sm text-gray-600 ">
                Dont have an account?{" "}
              </span>

              <a
                href="#"
                className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
              >
                Register
              </a>
            </div>
          </div>
        </div>
        <div className=" col-span-1 relative">
          <div className=" max-w-lg">
            <img className="" src={loginImg} alt="" />
          </div>
          <div className=" font-medium absolute bottom-1/2 right-1/3 text-center p-6 py-10 bg-black bg-opacity-45 rounded-xl max-w-72">
            <p className="text-white text-lg">
              <span className="text-[#1676d9]">Sign In</span> to view all the
              massage therapists
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
