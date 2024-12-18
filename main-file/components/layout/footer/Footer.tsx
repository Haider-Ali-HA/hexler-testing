import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/footer-regular-left.png";
import Two from "@/public/images/shape/footer-solid-left.png";
import Three from "@/public/images/shape/footer-regular-right.png";
import Four from "@/public/images/shape/footer-solid-right.png";
import Five from "@/public/images/shape/footer-shadow-shape.png";
import Logo from "@/public/images/logo/logo.svg";


const Footer = () => {
  return (
    <footer className="footer-area secondary-bg">
      <div
        className="footer__shape-regular-left "
        data-aos="fade-left"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image src={One} alt="shape" priority />
      </div>
      <div
        className="footer__shape-solid-left "
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animation" src={Two} alt="shape" priority />
      </div>
      <div
        className="footer__shape-solid-right "
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animation" src={Three} alt="shape" priority />
      </div>
      <div
        className="footer__shape-regular-right "
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image src={Four} alt="shape" priority />
      </div>
      <div className="footer__shadow-shape">
        <Image src={Five} alt="shodow" priority />
      </div>
      <div className="container">
        <div className="footer__wrp pt-100 pb-100">
          <div
            className="footer__item item-big "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <Link href="/" className="logo mb-30">
              <Image src={Logo} alt="Image" priority />
            </Link>
            <p>
              We are a team of talented software developers, designers, and marketing experts who are passionate about helping businesses grow.
            </p>
            <div className="social-icon">
              <Link target="_blank" href="https://www.instagram.com/hexlertech/">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/company/hexler-tech/l">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link target="_blank" href="https://www.youtube.com/channel/UCoBpUgogxLVVF4YeAsOs0DQ">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
            <div className="social-icon-2 ">
              <Link style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="" href="https://www.trustpilot.com/review/hexlertech.com" target="_blank">
                <i className="fa-star-sharp fa-regular"></i>
                <p style={{ paddingLeft: '0.2rem' }}>&nbsp;Trustpilot  </p>
              </Link>
            </div>
          </div>
          <div
            className="footer__item item-sm"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">IT Service</h3>
            <ul>
              <li>
                {/* <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> IT
                  Management
                </Link> */}
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> Web Development
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i>Software Testing and QA
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i>DevOps Solutions
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i>Game Development
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-sm "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">Quick Link</h3>
            <ul>
              <li>
                <Link href="about-us">
                  <i className="fa-regular fa-angles-right me-1"></i> About
                  Hexler Tech
                </Link>
              </li>
              <li>
                <Link href="service">
                  <i className="fa-regular fa-angles-right me-1"></i> Our
                  Services
                </Link>
              </li>
              <li>
                {/* <Link href="pricing">
                  <i className="fa-regular fa-angles-right me-1"></i> Pricing
                  Plan
                </Link> */}
              </li>
              <li>
                <Link href="case">
                  <i className="fa-regular fa-angles-right me-1"></i> Our
                  Projects
                </Link>
              </li>
              <li>
                <Link href="team">
                  <i className="fa-regular fa-angles-right me-1"></i> Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-big "
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">Contact Us</h3>

            {/* <p className="mb-20">
              Glen Allen, VA 23060, USA <br />
              Islamabad, Pakistan
            </p> */}
            <ul className="footer-contact">
              <li>
                <i className="fa-regular fa-location-check"></i>
                <div className="info">
                  <p>Glen Allen, VA 23060, USA <br />
                    Islamabad, Pakistan</p>
                </div>
              </li>

              <li>
                <i className="fa-regular fa-clock"></i>
                <div className="info">
                  <h5>Opening Hours:</h5>
                  <p>Mon - Sat: 10.00 AM - 7.00 PM</p>
                </div>
              </li>

              <li>
                <i className="fa-duotone fa-phone"></i>
                <div className="info">
                  <h5>Phone Call:</h5>
                  <p>(302)-303-4286 <br />+92-344-9200674</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
            <p data-aos="fade-down" data-aos-delay="0" data-aos-duration="1500">
              &copy; All Copyright 2024 by <Link href="/">Hexler Tech</Link>
            </p>
            <ul
              className="d-flex align-items-center flex-wrap gap-4 "
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <li>
                <Link href="/">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
