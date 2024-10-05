"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import CalendlyForm from "@/components/layout/CalendlyForm";
import Four from "@/public/images/icon/section-title.png";


const Testimonial = () => {
  return (
    <section
      className="testimonial-area bg-image pt-120 pb-110"
      style={{
        // backgroundImage: "url(/images/bg/testimonial-bg.png)",
      }}
      id="testimonial-section"
    >
      <div className="container">
        <div className="row mb-3">
        <div className="section-header">
            <h5
              // data-aos="fade-left"
              // data-aos-delay="0"
              // data-aos-duration="1500"
            >
              <Image className="me-1" src={Four} alt="icon" priority />
              Let&apos;s Collaborate
            </h5>
            <h2
              className="text-white "
              // data-aos="fade-left"
              // data-aos-delay="200"
              // data-aos-duration="1500"
            >
              Set Your Meeting Time
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {/* <MiniContactForm /> */}
          <CalendlyForm />
          {/* 
          <div className="col-lg-5 ps-2 ps-lg-5">
            <div className="section-header mb-40">
              <h5
                className=""
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <Image className="me-1" src={Title} alt="icon" priority />
                CLIENTS REVIEW
              </h5>
              <h2
                className=""
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                What They Say About Our
              </h2>
              <p
                className="testimonial-p"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                Discover how our solutions have positively impacted our clients. Their success stories reflect our commitment to excellence and innovation. Join the many who have transformed their businesses with our trusted support.
              </p>
            </div>
            <div
              className="swiper testimonial__slider "
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-duration="1500"
            >
              <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                freeMode={true}
                speed={300}
                loop={true}
                roundLengths={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                className="swiper-wrapper"
                navigation={{
                  nextEl: ".testimonial__arry-next",
                  prevEl: ".testimonial__arry-prev",
                }}
              >
                <SwiperSlide>
                  <div>
                    <div className="testimonial__item">
                      <svg
                        className="coma"
                        width="50"
                        height="37"
                        viewBox="0 0 50 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                          fill="#3c72fc"
                        />
                      </svg>
                      <div className="d-flex align-items-center gap-3">
                        <Image src={One} alt="Image" priority />
                        <div className="testi-info">
                          <h4 style={{color:"#0F0D1D"}}>Suborna Tarchera</h4>
                          <p style={{color:"#0F0D1D"}}>Web Developer</p>
                          <div className="star mt-1">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star disable"></i>
                          </div>
                        </div>
                      </div>
                      <p style={{color:"#0F0D1D"}} className="mt-30">
                        “ Consectetur adipiscing elit. Integer nunc viverra
                        laoreet est the is porta pretium metus aliquam eget
                        maecenas porta is nunc viverra Aenean pulvinar maximus
                        leo ”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="testimonial__item">
                      <svg
                        className="coma"
                        width="50"
                        height="37"
                        viewBox="0 0 50 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                          fill="#3c72fc"
                        />
                      </svg>
                      <div className="d-flex align-items-center gap-3">
                        <Image src={Two} alt="Image" priority />
                        <div className="testi-info">
                          <h4 style={{color:"#0F0D1D"}}>Alex Rony</h4>
                          <p style={{color:"#0F0D1D"}}>Web Designer</p>
                          <div className="star mt-1">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star disable"></i>
                          </div>
                        </div>
                      </div>
                      <p style={{color:"#0F0D1D"}} className="mt-30">
                        “ Consectetur adipiscing elit. Integer nunc viverra
                        laoreet est the is porta pretium metus aliquam eget
                        maecenas porta is nunc viverra Aenean pulvinar maximus
                        leo ”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div
              className="testimonial__arry-btn mt-40 "
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <button className="arry-prev testimonial__arry-prev">
                <i className="fa-light fa-chevron-left"></i>
              </button>
              <button className="arry-next testimonial__arry-next active">
                <i className="fa-light fa-chevron-right"></i>
              </button>
            </div>
          </div>
           */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
