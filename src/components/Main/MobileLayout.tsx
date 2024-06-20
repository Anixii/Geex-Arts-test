import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import { mobilePosts, mobileSlider } from "../utils/constans";
import Banner from "./Banner/Banner";
import NewsList from "./News/NewsList";
import SubscriedSwiper from "./Subscried/SubscriedSwiper";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import Competitives from "./Competitives/Competitives";
import Marketplace from "./MarketPlace/Marketplace";

export const MobileLayout = () => {
  return (
    <main>
      <div className="flex flex-col gap-y-6">
        <div className="pl-4">
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            centeredSlides={true}
            spaceBetween={"16px"}
            className="w-full flex"
          >
            {mobileSlider.map((item, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide-mobile flex gap-x-4"
              >
                <div
                  className="rounded-[20px] flex flex-col justify-between p-3 bg-no-repeat bg-center bg-cover h-[287px]"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="flex gap-x-2">
                    {item.categories.map((items, i) => (
                      <div
                        key={i}
                        className="w-auto text-[#F1F3F7] rounded-full font-medium text-sm backdrop-blur-md backdrop-brightness-75 py-2 px-[14px]"
                      >
                        {items}
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-white text-xl line-clamp-2 font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-[#F1F3F7] text-xs line-clamp-1 font-normal">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Container>
          <div className="rounded-[20px] px-5 py-6 gap-y-6 flex flex-col bg-white">
            {mobilePosts.map((item, i) => (
              <div key={i}>
                <img
                  className="w-full h-auto max-w-none"
                  src={item.icon}
                  alt={"Posts icon"}
                />
                <h2 className="mt-4 mb-3 text-[#06082C] text-xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-[#9395B8] font-normal text-xs">
                  {item.subtitle}
                </p>
              </div>
            ))}
            <Button
              className="text-[#06082C] bg-[#F1F3F7] px-6 w-auto mt-8"
              value="Смотреть все"
            />
          </div>
          <NewsList />
          <Banner />
        </Container>
        <div className="pl-4 h-auto w-full">
          <div className="rounded-s-[20px]   px-5 py-6 gap-y-6 flex flex-col bg-white">
            <h2 className=" mb-3 text-[#06082C] text-xl font-semibold">
              Мои подписки
            </h2>
            <SubscriedSwiper />
          </div>
        </div>
        <Container>
          <Competitives />
        </Container>
        <Container>
          <Marketplace />
        </Container>
      </div>
    </main>
  );
};
