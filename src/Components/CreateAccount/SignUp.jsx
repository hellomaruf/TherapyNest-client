import logo from "../../assets/Images/logo.png";
import loginImg from "../../assets/Images/signin.png";
import logo1 from "../../assets/Images/logo1.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContaxt } from "./../../services/AuthProvider";
import toast from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const { createNewUser, updateUserProfile } = useContext(AuthContaxt);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data?.name;
    const defaultImg = "https://i.ibb.co/XWCGK3x/profile.png";
    const email = data?.email;
    const password = data?.password;
    const re_password = data?.re_password;
    if (password === re_password) {
      setError("");
      if (isChecked === true) {
        setError("");
        createNewUser(email, password)
          .then((res) => {
            console.log(res.user);
            if (res.user) {
              updateUserProfile(name, defaultImg);
              navigate("/");
              toast.success(`SignUp ${email}`);
            }
            setError("");
          })
          .catch((error) => {
            setError(error.message);
          });
      } else {
        console.log("please Accept Terms of Service");
        setError("please Accept Terms of Service");
      }
    } else {
      console.log("Password did not match");
      setError("Password did not match");
    }
  };

  // SignUp for small device
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const defaultImg = "https://i.ibb.co/XWCGK3x/profile.png";
    const email = form.email.value;
    const password = form.password.value;
    const re_password = form.re_password.value;
    console.log(name, email, password, re_password);
    if (password === re_password) {
      setError("");
      if (isChecked === true) {
        setError("");
        createNewUser(email, password)
          .then((res) => {
            console.log(res.user);
            if (res.user) {
              updateUserProfile(name, defaultImg);
              navigate("/");
              toast.success(`SignUp ${email}`);
            }
            setError("");
          })
          .catch((error) => {
            setError(error.message);
          });
      } else {
        console.log("please Accept Terms of Service");
        setError("please Accept Terms of Service");
      }
    } else {
      console.log("Password did not match");
      setError("Password did not match");
    }
  };
  return (
    <div>
      <div className="bg-white hidden sm:block ">
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 items-center justify-center gap-8 h-screen max-w-7xl mx-auto">
          {/* Signup Form */}
          <div className=" col-span-1">
            <div className="w-full  mx-auto overflow-hidden bg-white rounded-lg ">
              <div className=" py-4 max-w-[450px] mx-auto">
                <div className="flex  mx-auto">
                  <img className="w-52" src={logo} alt="" />
                </div>

                <div className=" py-6">
                  <h3 className="text-2xl  font-semibold">
                    Sign Up To Your Account
                  </h3>

                  <p className="mt-1 text-gray-500 text-sm">
                    elcome Back! By click the sign up button, youre agree to
                    Zenitood Terms and Service and acknlowledge the <br />{" "}
                    <span className="text-[#1676d9] underline">
                      Privacy and Policy
                    </span>
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="w-full">
                    <label htmlFor="" className="font-medium">
                      Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      name="name"
                      placeholder="@username"
                      aria-label="Name"
                    />
                  </div>
                  <div className="w-full mt-6">
                    <label htmlFor="" className="font-medium">
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
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
                      placeholder="Enter Password"
                      aria-label="Password"
                    />
                  </div>
                  <div className="w-full mt-6">
                    <label htmlFor="" className="font-medium">
                      Confirm Password
                    </label>

                    <input
                      {...register("re_password", { required: true })}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="password"
                      name="re_password"
                      placeholder="Re-type password"
                      aria-label="Password"
                    />
                  </div>
                  <div className=" mt-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="checkbox checkbox-sm [--chkbg:theme(colors.blue.600)]"
                      />
                      <p className="text-sm text-blue-500">
                        Accept Terms of Service
                      </p>
                    </div>
                    <p className="text-sm text-red-600 mt-2">{error}</p>
                  </div>
                  <div className="flex mt-12 items-center justify-center">
                    <button className="bg-[#156bca] hover:bg-[#084e99] btn text-white px-20">
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
                </div>

                <form onSubmit={handleSignUp}>
                  <div className="">
                    <div className="w-full">
                      <label htmlFor="" className="font-medium">
                        Name
                      </label>
                      <input
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                        name="name"
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
                        name="email"
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
                        name="password"
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
                        name="re_password"
                        placeholder="Re-type password"
                        aria-label="Password"
                      />
                    </div>
                    <div className=" mt-3">
                      <div className="flex items-center gap-2">
                        <input
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                          type="checkbox"
                          className="checkbox checkbox-sm [--chkbg:theme(colors.blue.600)]"
                        />
                        <p className="text-sm text-blue-500">
                          Accept Terms of Service
                        </p>
                      </div>
                      <p className="text-sm text-red-600 pt-2">{error}</p>
                    </div>
                    <div className="flex mt-8 items-center justify-center">
                      <button className="bg-[#156bca] hover:bg-[#084e99] btn text-white px-20">
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
