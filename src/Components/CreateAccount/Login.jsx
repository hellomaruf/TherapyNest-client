import logo from "../../assets/Images/logo.png";
import logo1 from "../../assets/Images/logo1.png";
import facebook from "../../assets/Images/facebook.png";
import google from "../../assets/Images/google.png";
import loginImg from "../../assets/Images/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContaxt } from "../../services/AuthProvider";
import toast from "react-hot-toast";
// import mobileLogin from "../../assets/Images/mobileLogin.png";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const { signInUser, signInWithGoogle } = useContext(AuthContaxt);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const email = data?.email;
    const password = data?.password;
    if (isChecked === true) {
      signInUser(email, password)
        .then((res) => {
          console.log(res.user);
          if (res.user) {
            navigate(from);
            toast.success(`SignIn ${email}`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError("Please check Remember me");
    }
  };

  // Signin for small device************
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (isChecked === true) {
      signInUser(email, password)
        .then((res) => {
          console.log(res.user);
          if (res.user) {
            navigate(from);
            toast.success(`SignIn ${email}`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError("Please check Remember me");
    }
  };

  const hangleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        if (res.user) {
          navigate("/");
          toast.success(`SignIn ${res.user.email}`);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="">
      <div className="bg-white hidden  sm:block">
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 items-center justify-center gap-8 h-screen max-w-7xl mx-auto">
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
                <div className="flex items-center gap-10 justify-between">
                  <button
                    onClick={hangleGoogleSignIn}
                    className="btn flex-1  bg-gradient-to-r from-[#e6e6e6] shadow-md to-[#fff]"
                  >
                    <img className="w-5" src={google} alt="" />
                    Google
                  </button>
                  <button className="btn flex-1  bg-[#278dfe] hover:bg-[#0b7dff] text-white">
                    <img className="w-6 " src={facebook} alt="" />
                    Facebook
                  </button>
                </div>
                <div className="divider py-6 text-sm">
                  Or Continue with Email
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="w-full mt-">
                    <label htmlFor="" className="font-medium">
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      aria-label="Email Address"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label htmlFor="" className="font-medium">
                      Password
                    </label>

                    <input
                      {...register("password", { required: true })}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="password"
                      name="password"
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        checked={isChecked}
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
                  <p className="text-sm text-red-600 pt-2">{error}</p>

                  <div className="flex mt-12 items-center justify-center">
                    <button className="bg-[#156bca] hover:bg-[#084e99] btn text-white px-20">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-center pb-4 text-center ">
                <span className="text-sm text-gray-600 ">
                  Dont have an account?{" "}
                </span>

                <Link
                  to={"/signup"}
                  className="mx-2 underline text-sm font-semibold text-[#1676d9] hover:underline"
                >
                  Create a Account
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-span-1 ">
            <div className=" max-w-lg mx-auto">
              <img className="" src={loginImg} alt="" />
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
                  Sign In To Your Account
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
                      <span className="text-[#1676d9]">Sign In </span>
                    </label>
                    to view all the massage therapists
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* login modal */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="">
                <div className=" py-6 text-center">
                  <h3 className="text-2xl  font-semibold">
                    Log In To Your Account
                  </h3>

                  <p className="mt-1 text-gray-500 text-sm">
                    Welcome Back! Select a method to log in:
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={hangleGoogleSignIn}
                    className="btn flex-1  bg-gradient-to-r from-[#e6e6e6] shadow-md to-[#fff]"
                  >
                    <img className="w-5" src={google} alt="" />
                    Google
                  </button>
                  <button className="btn flex-1   bg-[#278dfe] hover:bg-[#0b7dff] text-white">
                    <img className="w-6 " src={facebook} alt="" />
                    Facebook
                  </button>
                </div>
                <div className="divider py-6 text-sm">
                  Or Continue with Email
                </div>
                <form onSubmit={handleSignIn} method="dialog">
                  <div className="">
                    <div className="w-full mt-">
                      <label htmlFor="" className="font-medium">
                        Email
                      </label>
                      <input
                        name="email"
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
                        name="password"
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
                          onChange={handleCheckboxChange}
                          checked={isChecked}
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
                    <p className="text-sm text-red-600 pt-2">{error}</p>

                    <div className="flex mt-8 items-center justify-center">
                      <button className="bg-[#156bca] hover:bg-[#084e99] btn text-white px-20">
                        Sign In
                      </button>
                    </div>
                    <div className="flex items-center justify-center py-2 text-center ">
                      <span className="text-sm text-gray-600 ">
                        Dont have an account?{" "}
                      </span>

                      <Link
                        to={"/signup"}
                        className="mx-2 underline text-sm font-semibold text-[#1676d9] hover:underline"
                      >
                        Create a Account
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

export default Login;
