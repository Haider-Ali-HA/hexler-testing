import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/shape/service-two-item-shape.png";
import Two from "@/public/images/service/mobile-app-development.jpg";
import Three from "@/public/images/service/software-testing.jpg";
import Four from "@/public/images/service/website-service.jpg";
import Five from "@/public/images/service/service-image4.jpg";
import Six from "@/public/images/service/devOps.jpg";
import Seven from "@/public/images/service/ui-ux-image.jpg";
import Eight from "@/public/images/service/game-development.jpg";
import Nine from "@/public/images/icon/service-two-icon2.png";
import Ten from "@/public/images/icon/service-two-icon3.png";
import Eleven from "@/public/images/icon/service-two-icon4.png";
import Twelve from "@/public/images/icon/service-two-icon5.png";
import Thirteen from "@/public/images/icon/service-two-icon6.png";

const ServiceItems = () => {
  return (
    <section  id="service-items" className="service-inner-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image ">
                <Image className="" src={Four} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Ten} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  {/* <Link href="/service/web-development" className="primary-hover"> */}
                  <div style={{ cursor: 'pointer' }} className="primary-hover">
                    Web Development
                  </div>
                </h4>
                <p>
                  Create responsive and engaging websites tailored to your business needs, ensuring seamless user experiences across all devices.
                </p>
                {/* <Link className="read-more-btn" href="/service/web-development">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Two} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Ten} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  {/* <Link href="/service/app-development" className="primary-hover"> */}
                  <div style={{ cursor: 'pointer' }} className="primary-hover">
                    Mobile App Development
                  </div>
                </h4>
                <p>
                  Design and develop intuitive mobile applications that enhance user engagement and streamline functionality for both iOS and Android platforms.
                </p>
                {/* <Link className="read-more-btn" href="/service/app-development">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Seven} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Twelve} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  {/* <Link href="/service/ui-ux-design" className="primary-hover"> */}
                  <div style={{ cursor: 'pointer' }} className="primary-hover">
                    UI/UX Design
                  </div>
                </h4>
                <p>
                  Craft visually stunning and user-friendly interfaces that elevate user satisfaction and improve overall interaction with your digital products.
                </p>
                {/* <Link className="read-more-btn" href="/service/ui-ux-design">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Nine} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  {/* <Link href="/service/software-testing" className="primary-hover"> */}
                  <div style={{ cursor: 'pointer' }} className="primary-hover">
                    Software Testing and QA
                  </div>
                </h4>
                <p>
                  Ensure the highest quality standards by rigorously testing software applications for functionality, performance, and security.
                </p>
                {/* <Link className="read-more-btn" href="/service/software-testing">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link> */}
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Six} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Nine} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  {/* <Link href="/service/devops" className="primary-hover"> */}
                  <div style={{ cursor: 'pointer' }} className="primary-hover">
                    DevOps Solutions
                  </div>
                </h4>
                <p>
                  Streamline your development and operational processes with integrated DevOps practices that enhance collaboration and accelerate delivery.
                </p>
                {/* <Link className="read-more-btn" href="/service/devops">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link> */}
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Eight} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Eleven} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  {/* <Link href="/service/game-development" className="primary-hover"> */}
                  <div style={{ cursor: 'pointer' }} className="primary-hover">
                    Game Development
                  </div>
                </h4>
                <p>
                  Bring imaginative concepts to life with immersive game development, delivering captivating experiences across multiple platforms.
                </p>
                {/* <Link className="read-more-btn" href="/service/game-development">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link> */}
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
