import { SwiperSlide, Swiper } from "swiper/react";
import shop1 from "../../../assets/shop1.svg";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import Button from "../../Button/Button";
const Marketplace = () => {
  return (
    <section className="rounded-s-[20px]   px-5 py-6 gap-y-6 flex flex-col bg-white">
      <h2 className=" mb-3 text-[#06082C] text-xl font-semibold">
        Мои подписки
      </h2>
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        centeredSlides={true}
        spaceBetween={"16px"}
        className="w-full flex"
      >
        <SwiperSlide className="swiper-slide-mobile flex gap-x-4">
          <div className="flex flex-col  gap-y-2">
            <img
              className="rounded-[20px] max-w-none w-full h-[auto]"
              src={shop1}
              alt="Picture of product"
            />
            <div className="flex gap-x-2">
              <div className="w-2 h-2 bg-[#344C56] rounded-[50%]"></div>
              <div className="w-2 h-2 bg-[#901238] rounded-[50%]"></div>
              <div className="w-2 h-2 bg-[#675d5d] rounded-[50%]"></div>
            </div>
            <p className="text-[#06082C] text-xl font-semibold ">
              Спортивные кроссовки “WRESTRUS”
            </p>
            <p className="text-[#7B7EA5] text-sm font-medium">5 000 ₽ </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-mobile flex gap-x-4">
          <div className="flex w-full flex-col gap-y-2">
            <img
              className="  rounded-[20px] max-w-none  w-full h-[auto]"
              src={shop1}
              alt="Picture of product"
            />
            <div className="flex gap-x-2">
              <div className="w-2 h-2 bg-[#344C56] rounded-[50%]"></div>
              <div className="w-2 h-2 bg-[#086424] rounded-[50%]"></div>
            </div>
            <p className="text-[#06082C] text-xl font-semibold ">
              Термобелье верх мужское “WRESTRUS”
            </p>
            <p className="text-[#7B7EA5] text-sm font-medium">12 000 ₽ </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <Button
        className="text-[#06082C] bg-[#F1F3F7] px-6 w-auto mt-8"
        value="Смотреть все"
      />
    </section>
  );
};

export default Marketplace;
