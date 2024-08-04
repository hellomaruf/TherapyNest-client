import { Disclosure, DisclosureButton } from "@headlessui/react";
import { useContext, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import { PiBell } from "react-icons/pi";
import logo from "../../assets/Images/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  BiGridAlt,
  BiMessageSquareDetail,
  BiMessageSquareError,
} from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { AuthContaxt } from "../../services/AuthProvider";
import { IoIosArrowDown } from "react-icons/io";
import toast from "react-hot-toast";

function Sidebar() {
  const { user, logout, setUser } = useContext(AuthContaxt);
  const navigate = useNavigate()
  const location = useLocation();
  const currentLocation = location.pathname;

  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  if (currentLocation === "/login") {
    return;
  }
  if (currentLocation === "/signup") {
    return;
  }
  const handleLogout = () => {
    logout();
    navigate('/login')
    setUser("");
    toast.success("Logout Successfull");
  };
  return (
    <div>
      <Disclosure as="nav" className="fixed w-full z-10">
        <div className="h-20 bg-white  ">
          <div className="md:ml-[250px] flex items-center h-full justify-between ease-out delay-150 px-4 duration-200">
            <div className="block md:hidden">
              <img className="w-[180px] " src={logo} alt="" />
            </div>
            <div className=" md:flex gap-4 hidden">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <div className="flex">
                <div className="">
                  <h3 className="font-semibold text-sm md:text-base">
                    {user?.displayName}
                  </h3>
                  <h3 className="text-gray-500 text-sm md:text-base">
                    {user?.email}
                  </h3>
                </div>
                <div className="">
                  <IoIosArrowDown className="text-xl" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="border-r pr-4">
                <button className="h-10 w-10 flex items-center justify-center border border-[#e7e7e7] rounded-full">
                  <PiBell className="text-xl" />
                </button>
              </div>
              <button
                onClick={handleLogout}
                className=" md:flex items-center gap-2 hidden text-[#f15e4a]"
              >
                <div className="">
                  <h2>Log Out</h2>
                </div>{" "}
                <div className="h-10 w-10 bg-[#ffecea] flex items-center justify-center rounded-full">
                  <IoLogOutOutline className=" text-xl" />
                </div>
              </button>

              <DisclosureButton
                onClick={handleShowSidebar}
                className=""
              ></DisclosureButton>
              <label htmlFor="my-drawer-4" className="drawer-button ">
                <HiOutlineMenuAlt3
                  aria-hidden="true"
                  className="block md:hidden text-xl"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Sidebar Routes */}
        <div
          className={`  h-screen bg-white border-r-2 z-10 fixed top-0 w-60 ${
            showSidebar ? "left-0" : "-left-96"
          }  md:left-0 peer:transition ease-out delay-150 duration-200`}
        >
          <div className="p-4 pt-6">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <ul className="mt-4">
              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 font-medium border-l-4 border-[#102c4a] "
                        : "bg-gray-200 text-gray-900 "
                    }`
                  }
                  to={"/"}
                >
                  <BiGridAlt className="text-xl font-light" /> Home
                </NavLink>
              </li>
              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/listing"}
                >
                  <LuUsers className="text-xl font-light" /> New Listing
                </NavLink>
              </li>
              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/search"}
                >
                  <RiSearchLine className="text-xl font-light" /> Search
                </NavLink>
              </li>
              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/about"}
                >
                  <BiMessageSquareDetail className="text-xl font-light" /> About
                </NavLink>
              </li>
              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/favorites"}
                >
                  <FaRegHeart className="text-xl font-light" /> Favorites
                </NavLink>
              </li>

              <div className="py-4">
                <hr className="" />
              </div>

              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/helpCenter"}
                >
                  <BiMessageSquareError className="text-xl font-light" /> Help
                  Center
                </NavLink>
              </li>
              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/helpCenter"}
                >
                  <FiSettings className="text-xl font-light" /> Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-100 rounded-none text-base-content min-h-full w-64 m-0 p-0">
              <div className="w-full  bg-[#156bca] space-y-2  p-6 text-center flex flex-col items-center">
                <img
                  className="rounded-full w-[80px]"
                  src={user?.photoURL}
                  alt=""
                />
                <div className="">
                  <h2 className="text-lg font-semibold text-white">
                    {user?.displayName}
                  </h2>
                  <h2 className="text-gray-200">{user?.email}</h2>
                </div>
              </div>
              <li className=" w-full rounded-none mt-8 ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 rounded-none items-center ${
                      isActive
                        ? "bg-[#d4e9ff]  text-gray-900 font-medium border-l-4 border-[#102c4a] "
                        : "bg-gray-200 text-gray-900 "
                    }`
                  }
                  to={"/"}
                >
                  <BiGridAlt className="text-xl font-light" /> Home
                </NavLink>
              </li>
              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 rounded-none items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/listing"}
                >
                  <LuUsers className="text-xl font-light" /> New Listing
                </NavLink>
              </li>
              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 rounded-none items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/search"}
                >
                  <RiSearchLine className="text-xl font-light" /> Search
                </NavLink>
              </li>
              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 rounded-none items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/about"}
                >
                  <BiMessageSquareDetail className="text-xl font-light" /> About
                </NavLink>
              </li>
              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 rounded-none items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/favorites"}
                >
                  <FaRegHeart className="text-xl font-light" /> Favorites
                </NavLink>
              </li>

              <div className="py-4">
                <hr className="" />
              </div>

              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 rounded-none items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/helpCenter"}
                >
                  <BiMessageSquareError className="text-xl font-light" /> Help
                  Center
                </NavLink>
              </li>
              <li className=" w-full   ">
                <NavLink
                  className={({ isActive }) =>
                    ` p-4 w-full flex gap-4 rounded-none items-center ${
                      isActive
                        ? "bg-[#d4e9ff] text-gray-900 border-l-4 border-[#102c4a] "
                        : " text-gray-500 "
                    }`
                  }
                  to={"/helpCenter"}
                >
                  <FiSettings className="text-xl font-light" /> Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default Sidebar;
