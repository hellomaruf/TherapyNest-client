import logo from "../../assets/Images/logo.png";
import loginImg from "../../assets/Images/login.png";
import logo1 from "../../assets/Images/logo1.png";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="bg-white hidden  sm:block ">
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
                    Sign In To Your Account
                  </h3>

                  <p className="mt-1 text-gray-500 text-sm">
                    elcome Back! By click the sign up button, youre agree to
                    Zenitood Terms and Service and acknlowledge the <br />{" "}
                    <span className="text-[#1676d9] underline">
                      Privacy and Policy
                    </span>
                  </p>
                </div>

                <form>
                  <div className="w-full">
                    <label htmlFor="" className="font-medium">
                      Name
                    </label>
                    <input
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      placeholder="@username"
                      aria-label="Name"
                    />
                  </div>
                  <div className="w-full mt-6">
                    <label htmlFor="" className="font-medium">
                      Email
                    </label>
                    <input
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="email"
                      placeholder="Enter your email"
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
                      placeholder="Enter Password"
                      aria-label="Password"
                    />
                  </div>
                  <div className="w-full mt-6">
                    <label htmlFor="" className="font-medium">
                      Confirm Password
                    </label>

                    <input
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="password"
                      placeholder="Re-type password"
                      aria-label="Password"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm [--chkbg:theme(colors.blue.600)]"
                      />
                      <p className="text-sm text-blue-500">
                        Accept Terms of Service
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-12 items-center justify-center">
                    <button className="bg-[#156bca] btn text-white px-20">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-center pb-4 text-center ">
                <span className="text-sm text-gray-600 ">
                  Dont have an account?{" "}
                </span>

                <Link
                  to={"/login"}
                  className="mx-2 underline text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-span-1 relative">
            <div className=" max-w-lg">
              <img className="" src={loginImg} alt="" />
            </div>
            <div className=" font-medium absolute bottom-[250px] right-1/3 text-center p-6 py-10 bg-black bg-opacity-45 rounded-xl max-w-72">
              <p className="text-white text-lg">
                <span className="text-[#1676d9]">Create Account</span>
                <br />
                Fill in Your Information
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* For mobile device */}
      <div className="sm:hidden">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: 'url("mobileLogin.png")',
          }}
        >
          <div className=" hero-content text-neutral-content ">
            <div className=" text-center">
              <div className="flex  mx-auto items-center justify-center">
                <img className="w-52" src={logo1} alt="" />
              </div>

              <div className=" py-6">
                <h3 className="text-2xl text-gray-800  font-semibold">
                  Sign Up To Your Account
                </h3>

                <p className="mt-1 text-gray-200 text-sm">
                  elcome Back! By click the sign up button, youre agree to
                  Zenitood Terms and Service and acknlowledge the <br />{" "}
                  <span className="text-[#1676d9] underline">
                    Privacy and Policy
                  </span>
                </p>
              </div>

              <div className=" flex items-center justify-center">
                <div className=" font-medium  bottom-[250px]  text-center p-6 py-10 bg-black bg-opacity-55 rounded-xl max-w-72">
                  <p className="text-white text-lg">
                    <label
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      <span className="text-[#1676d9]">Create Account</span>
                    </label>
                    <br />
                    Fill in Your Information
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* SignUp modal */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="">
                <div className=" py-6 text-center">
                  <h3 className="text-2xl  font-semibold">Sign Up</h3>

                  <p className="mt-1 text-gray-500 text-sm">
                    Welcome Back! Select a method to log in:
                  </p>
                </div>

                <div className="divider py-6 text-sm">
                  Or Continue with Email
                </div>
                <form method="dialog">
                  <div className="">
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
                        className="text-sm text-[#156bca] font-semibold underline "
                      >
                        Forget Password?
                      </a>
                    </div>
                    <div className="flex mt-8 items-center justify-center">
                      <button className="bg-[#156bca] btn text-white px-20">
                        Sign Up
                      </button>
                    </div>
                    <div className="flex items-center justify-center py-2 text-center ">
                      <span className="text-sm text-gray-600 ">
                        Already Have an Account?
                      </span>

                      <Link
                        to={"/login"}
                        className="mx-2 underline text-sm font-semibold text-[#1676d9] hover:underline"
                      >
                        Sign In
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
