import { useQuery } from "@tanstack/react-query";
import img from "../../assets/Images/headerImg.png";
import "swiper/css";
import "swiper/css/navigation";
import { MdLocationPin } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Testimonial from "./Testimonial";
import PopularCities from "./PopularCities";
function TherapistSearch() {
  // Get data from static json*************
  const { data: therapistData } = useQuery({
    queryKey: ["therapist"],
    queryFn: async () => {
      const { data } = await axios.get("therapist.json");
      return data;
    },
  });

  return (
    <div className="">
      {/* Search section */}
      <div className="md:px-8 pt-28">
        <div className="bg-white  rounded-xl p-4 md:p-8  grid grid-cols-1 lg:grid-cols-2 justify-between gap-6 items-center">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Im Looking for Massage Therapist Near...
            </h2>
            <p>
              In using this site, I agree to be bound by the
              <span className="text-[#156bca]">
                Terms of <br /> Service
              </span>{" "}
              and <span className="text-[#156bca]">Privacy Policy</span>
            </p>
            <div className="bg-gray-100 rounded-lg max-w-lg relative">
              <input
                type="text"
                className="bg-gray-100 rounded-lg p-4 outline-none w-72"
                placeholder="ZIP code or city name"
              />
              <button className="bg-[#156bca] text-white py-2 px-6 font-semibold absolute right-2 top-2 rounded-lg">
                Go
              </button>
            </div>
          </div>
          <div className="">
            <img className="" src={img} alt="" />
          </div>
        </div>
      </div>
      {/* Slider section */}
      <div className=" mt-8 md:mx-8 ">
        <h3 className="text-xl font-semibold pb-4 pl-6">Featured Therapist</h3>

        <div className=" bg-white p-8  rounded-xl h-full">
          <Swiper
            slidesPerView={4}
            breakpoints={{
              1: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1180: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {therapistData?.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="card bg-base-100 border border-gray-300 h-full relative">
                  <figure className="px-4 pt-4">
                    <img
                      src={data?.image}
                      alt="Shoes"
                      className="rounded-xl w-full"
                    />
                  </figure>
                  <div className=" p-4 mb-12">
                    <h2 className="text-base font-semibold ">{data?.name}</h2>
                    <div className="my-2">
                      <h2 className=" text-gray-600 flex items-center gap-1">
                        <IoMdCar />
                        {data?.available}
                      </h2>
                      <h2 className=" text-gray-600 flex items-center gap-1">
                        <MdLocationPin />
                        {data?.location}
                      </h2>
                    </div>

                    <div className="">
                      <button className="btn w-full underline font-medium  absolute bottom-0 left-0 text-gray-900 hover:bg-[#156BCA] bg-[#d4e9ff] hover:text-white rounded-t-none transition duration-200">
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Features testimonial and popular cities section */}

      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6 md:mx-8">
        <div className="">
          <h3 className="text-xl font-semibold pb-4 md:pl-0 pl-6">Featured Testimonial</h3>
          <div className="  col-span-1  bg-white rounded-xl">
            <Testimonial />
          </div>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold pb-4 md:pl-0 pl-6">Popular Cities</h3>

          <div className=" bg-white col-span-1 rounded-xl">
            <PopularCities />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TherapistSearch;
