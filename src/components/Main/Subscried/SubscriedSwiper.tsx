import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { reccomendation } from "../../utils/constans"; 
const SubscriedSwiper = () => {
  return (
    <>
      <Swiper loop={true} className="w-full">
        {reccomendation.map((item, index) => (
          <SwiperSlide className="swiper-slide flex gap-x-4" key={index}>
            <div className="flex flex-col items-center gap-y-2">
              <img className="h-24 w-24 max-w-none rounded-[50%] border-4 border-[#06082C] " src={item.icon} alt="Picture of person" />
              <p className="text-[#06082C] text-xs font-semibold text-center">
                {item.name} <br /> {item.lastname}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SubscriedSwiper;
