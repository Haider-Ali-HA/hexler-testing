import Image from "next/image";
import Shape from "@/public/images/shape/counnter-bg-shape.png";
import One from "@/public/images/icon/counter-icon5.svg";
import Two from "@/public/images/icon/counter-icon7.svg";
import Three from "@/public/images/icon/counter-icon9.svg";

const counters=[{
    icon: One,
    count: "20+",
    label: "Qualified experts",
    description: "Agile Empowered Developers, Project Managers, Business Analysts, UX/UI Designers, and more!"
  }, {
    icon: Two,
    count: "5+",
    label: "Years of experience",
    description: "Empowering Your Vision with 15+ Years of IT Excellence."
  }, {
    icon: Three,
    count: "3",
    label: "Development centers",
    description: "Double the Expertise, Double the Solutions: Two Development Centers, One Goal."
  }]

const CounterSection2 = () => {
  return (
    <section className="counter-area">
      <div className="container">
        <div  className="counter__wrp gradient-bg">
          <div
            className="counter__shape"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <Image  src={Shape} alt="shape" priority layout="fill" objectFit="cover" />
          </div>
          {counters.map((item, index) => (
            <div
              className="counter__item"
              key={index}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={index * 200}
              data-aos-duration="1000"
            >
              <Image  width={110} src={item.icon} alt="icon" priority />
              <div style={{paddingTop:'3rem',marginTop:'-1rem'}} className="content">
                <h3>
                  <span style={{lineHeight:'10px'}} className="count">{item.count}</span><br />
                  {item.label}
                </h3>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection2;
