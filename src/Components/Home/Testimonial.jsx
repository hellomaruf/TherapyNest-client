import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/Images/testimonial.png";
import img1 from "../../assets/Images/testimonial1.png";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MdLocationPin } from "react-icons/md";
import { Pagination, Autoplay } from "swiper/modules";

function Testimonial() {
  const { data: testimonial } = useQuery({
    queryKey: ["testimonial"],
    queryFn: async () => {
      const { data } = await axios("testimonial.json");
      return data;
    },
  });
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        direction={"horizontal"}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonial?.map((data, index) => (
          <SwiperSlide className="p-6 space-y-6" key={index}>
            <div className=" bg-base-100  grid grid-cols-8 border border-gray-300 rounded-xl">
              <div className="rounded-xl p-3 col-span-3">
                <img
                  className="rounded-2xl w-full h-full "
                  src={img}
                  alt="Movie"
                />
              </div>

              <div className=" col-span-5 py-5 px-2 space-y-1 md:space-y-2">
                <h2 className=" text-gray-600 text-sm md:text-base flex items-center gap-1">
                  <MdLocationPin />
                  {data?.location}
                </h2>
                <h2 className="card-title text-base">
                  Healing {" "}
                  <span className="text-[#156bca]">by Cort</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base">{data?.description}</p>
              </div>
            </div>
            <div className=" bg-base-100 grid grid-cols-8 border border-gray-300 rounded-xl">
              <div className="rounded-xl p-3 col-span-3">
                <img
                  className="rounded-2xl w-full h-full  "
                  src={img1}
                  alt="Movie"
                />
              </div>
              <div className=" col-span-5 py-5 px-4 space-y-1 md:space-y-2">
                <h2 className=" text-gray-600 text-sm md:text-base flex items-center gap-1">
                  <MdLocationPin />
                  {data?.location}
                </h2>
                <h2 className="card-title text-base">
                   Bodywork{" "}
                  <span className="text-[#156bca]">by Cort</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base">{data?.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
