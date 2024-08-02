import { useEffect } from "react";
import img from "../../assets/Images/headerImg.png";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
function TherapistSearch() {
  return (
    <div className="p-8 pt-28">
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
      <div className=" mt-6">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TherapistSearch;
