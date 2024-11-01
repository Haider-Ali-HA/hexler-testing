"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/service-bg-shape.png";
import Two from "@/public/images/icon/section-title.png";
import Three from "@/public/images/shape/service-item-shape.png";
import Four from "@/public/images/icon/service-icon1.png";
import Five from "@/public/images/icon/service-icon2.png";
import Six from "@/public/images/icon/service-icon3.png";

const Service = () => {
  const [isOverviewOpen, setOverviewOpen] =useState(1);

  return (
    <section className="service-area pt-100 pb-120" id="service-section">
      <div className="service__shape " data-aos="fade-right">
        <Image className="sway_Y__animation" src={One} alt="shape" priority />
      </div>
      <div className="container">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h5
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1500"
            >
              <Image className="me-1" src={Two} alt="icon" priority />
              What We OFFER
            </h5>
            <h2
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Excellent It Services
            </h2>
          </div>
          <Link
            href="service"
            className="btn-one "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            View All Services <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
        <div className="row g-4">

          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 0 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(0)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Four} alt="icon" priority />
              </div>
              <h4>
                <Link href="service/web-development">Web Development</Link>
              </h4>
              <p>
                Elevate your online presence with Hexler Tech’s expert web development services. From sleek designs to powerful functionalities, we create websites that engage users.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 1 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(1)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Five} alt="icon" priority />
              </div>
              <h4>
                <Link href="service/app-development">Mobile App Development</Link>
              </h4>
              <p>
                Unlock your potential with Hexler Tech’s app development. We deliver intuitive, high-performance apps for seamless user experiences and greater engagement.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 2 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(2)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Six} alt="icon" priority />
              </div>
              <h4>
                <Link href="service/game-development">Game Development</Link>
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eatae alias similique, magnam velit repellat architecto eum error ex quod mollitia deserunt consectetur?
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 3 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(3)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Six} alt="icon" priority />
              </div>
              <h4>
                <Link href="service/ui-ux-design">UI/UX Design</Link>
              </h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe impedit unde magnam quam eos quasi beatae provident molestias ad, pariatur, nihil iusto sunt earum et?
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 4 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(4)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Six} alt="icon" priority />
              </div>
              <h4>
                <Link href="service/devops">DevOps Solutions</Link>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae odit omnis nihil. Animi in dolor tenetur! Obcaecati iusto delectus soluta dignissimos vero
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 5 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(5)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Six} alt="icon" priority />
              </div>
              <h4>
                <Link href="service/software-testing">Sofware Testing and QA</Link>
              </h4>
              <p>
                Unlock your data’s potential with Hexler Tech’s advanced analysis services. From trend identification to workflow enhancement, we empower businesses to drive innovation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Service;
