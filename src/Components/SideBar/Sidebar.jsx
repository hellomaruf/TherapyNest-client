import { Disclosure, DisclosureButton } from "@headlessui/react";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import { PiBell } from "react-icons/pi";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div>
      <Disclosure as="nav">
        <div className="h-20 bg-white  ">
          <div className="md:ml-[250px] flex items-center h-full justify-between ease-out delay-150 px-4 duration-200">
            <div className="">hello</div>
            <div className="flex items-center gap-4">
              <div className="border-r pr-4">
                <button className="h-10 w-10 flex items-center justify-center border border-[#e7e7e7] rounded-full">
                  <PiBell className="text-xl" />
                </button>
              </div>
              <button className="flex items-center gap-2 text-[#f15e4a]">
                <div className="">
                  <h2>Log Out</h2>
                </div>{" "}
                <div className="h-10 w-10 bg-[#ffecea] flex items-center justify-center rounded-full">
                  <IoLogOutOutline className=" text-xl" />
                </div>
              </button>
              <DisclosureButton onClick={handleShowSidebar} className="">
                <HiOutlineMenuAlt3
                  aria-hidden="true"
                  className="block md:hidden text-xl"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>
        <div
          className={`p-6  h-screen bg-white z-10 fixed top-0 w-60 ${
            showSidebar ? "left-0" : "-left-96"
          }  md:left-0 peer:transition ease-out delay-150 duration-200`}
        ></div>
      </Disclosure>
    </div>
  );
}

export default Sidebar;
