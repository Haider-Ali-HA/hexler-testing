"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Shape from "@/public/images/shape/brand-shape.png";
import One from "@/public/images/brand/soft-swirl.png";
import Two from "@/public/images/brand/churn-station.png";
import Three from "@/public/images/brand/nstp.png";
import Four from "@/public/images/brand/nimbus-2.png";

const Brand = () => {
  return (
    <div className="brand-area" >
      <div className="container" style={{ padding: 0, margin: 0, maxWidth: '100%' }} >
        <div className="brand__wrp">
          <div className="brand__shape">
            {/* <Image src={Shape} alt="Image" priority /> */}
          </div>
          <div className="swiper brand__slider">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              freeMode={true}
              speed={600}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000, // Time before switching to the next slide
                disableOnInteraction: false, // Keep autoplay running after user interaction
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 5,
                },
                992: {
                  slidesPerView: 4,
                },
                576: {
                  slidesPerView: 3,
                },
              }}
              className="swiper-wrapper"
            >
              <SwiperSlide>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="brand__image image">
                    <Image src={One} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="brand__image image">
                    <Image src={Two} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="brand__image image">
                    <Image src={Three} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="brand__image image">
                    <Image src={Four} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="brand__image image">
                    <Image src={One} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="brand__image image">
                    <Image src={Two} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="brand__image image">
                    <Image src={Three} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="brand__image image">
                    <Image src={Four} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
