import { useQuery } from "@tanstack/react-query";
import img from "../../assets/Images/headerImg.png";
import "swiper/css";
import "swiper/css/navigation";
import { MdLocationPin } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
function TherapistSearch() {
  const { data: therapistData } = useQuery({
    queryKey: ["therapist"],
    queryFn: async () => {
      const { data } = await axios.get("therapist.json");
      return data;
    },
  });
  console.log(therapistData);

  return (
    <div className="p-8 pt-28">
      {/* Search section */}
      <div className="bg-white rounded-xl p-8  grid grid-cols-2 justify-between gap-6 items-center">
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
      {/* Slider section */}
      <div className=" mt-6 bg-white p-8  rounded-xl">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {therapistData?.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-base-100 border border-gray-300 relative">
                <figure className="px-4 pt-4">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl"
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
                    <button className="btn w-full  absolute bottom-0 left-0 bg-[#156BCA] text-white rounded-t-none">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TherapistSearch;
