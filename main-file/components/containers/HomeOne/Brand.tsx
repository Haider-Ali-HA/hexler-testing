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
import Five from "@/public/images/brand/Paychex-White.svg";
import Six from "@/public/images/brand/State_Greenhouse-White__1_.svg";
import Seven from "@/public/images/brand/State_ICIMS-White.svg";
import Eight from "@/public/images/brand/State_UKG-white.svg";
import Nine from "@/public/images/brand/Workday-White.svg";
import Ten from "@/public/images/brand/State_SmartRecruiters-White.svg";
import Eleven from "@/public/images/brand/State_Tenstreet-White.svg";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { cmsClientsServices } from "@/services/cmsCientServices";
import Loader from "@/components/layout/Loader";

const Brand = () => {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async (): Promise<void> => {
    setLoading(true);
    try {
      const result = await cmsClientsServices.getActiveClients();

      if (result.success) {
        setClients(result.data);
        console.log('fetched clients', result.data);
      } else {
        throw new Error(result.message || 'Failed to fetch clients');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load clients';
      //@ts-ignore
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }} >
          <Loader />
        </div>
      ) : (
        <>
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
                    {/* <SwiperSlide>
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
              </SwiperSlide> */}
                    {/* 
                    <SwiperSlide>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="brand__image image">
                          <Image src={Five} alt="Image" priority />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="brand__image image">
                          <Image src={Six} alt="Image" priority />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="brand__image image">
                          <Image src={Seven} alt="Image" priority />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="brand__image image">
                          <Image src={Eight} alt="Image" priority />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="brand__image image">
                          <Image src={Nine} alt="Image" priority />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="brand__image image">
                          <Image src={Ten} alt="Image" priority />
                        </div>
                      </div>
                    </SwiperSlide> */}

                    {clients.map((client, index) => (
                      <SwiperSlide>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div className="brand__image image">
                            {/* @ts-ignore */}
                            <Image width={100} height={100} src={client.image} alt="Image" priority />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Brand;

