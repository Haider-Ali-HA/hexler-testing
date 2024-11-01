
"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/icon/section-title.png";
import Two from "@/public/images/case/it-management.jpg";
import Three from "@/public/images/case/plateform-integration.jpg";
import Four from "@/public/images/case/website-development.jpg";
import Five from "@/public/images/case/network-security.jpg";

const Case = () => {
  return (
    <section className="case-area pt-120 pb-120" id="case-section">
      <div className="container">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h5 data-aos="fade-left" data-aos-delay="0" data-aos-duration="1500">
              <Image className="me-1" src={One} alt="icon" priority />
              FROM OUR CASE STUDIES
            </h5>
            <h2 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1500">
              We Delivered Best Solution
            </h2>
          </div>
          <Link
            href="case"
            className="btn-one"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            View All Case <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
      <div className="case__slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          speed={800}
          loop={true}
          roundLengths={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".case__dot",
            clickable: true,
          }}
          breakpoints={{
            1440: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
          }}
          className="swiper-wrapper"
        >
          <SwiperSlide>
            <div className="case__item">
              <div className="image case__image">
                <Image src={Two} alt="Image" priority />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Solution</span>
                <h3>
                  <div style={{cursor:"pointer"}} className="text-white primary-hover">
                    IT Management
                  </div>
                </h3>
              </div>
              {/* <Link href="/service" className="case__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="case__item">
              <div className="image case__image">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Technology</span>
                <h3>
                  <div style={{cursor:"pointer"}} className="text-white primary-hover">
                    Platform Integration
                  </div>
                </h3>
              </div>
              {/* <Link href="/service" className="case__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="case__item">
              <div className="image case__image">
                <Image src={Four} alt="Image" priority />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Solution</span>
                <h3>
                  <div style={{cursor:"pointer"}} className="text-white primary-hover">
                    Web Development
                  </div>
                </h3>
              </div>
              {/* <Link href="/service" className="case__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="case__item">
              <div className="image case__image">
                <Image src={Five} alt="Image" priority />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Security</span>
                <h3>
                  <div style={{cursor:"pointer"}} className="text-white primary-hover">
                    Network Security
                  </div>
                </h3>
              </div>
              {/* <Link href="/service" className="case__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="mt-60 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <div className="dot case__dot"></div>
      </div>
    </section>
  );
};

export default Case;
