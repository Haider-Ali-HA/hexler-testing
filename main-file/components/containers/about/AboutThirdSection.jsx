import Image from 'next/image'
import React from 'react'


const AboutSecondSection = () => {
    return (
        <section className="service-area pt-20 pb-64 " id="second-section" >
            <div className="container">
                <div className="row g-5">

                   
                    <div className="col-lg-5">
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Image width={400} height={400} className='bg-image' src={"/images/Group.svg"} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-7 ">
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:"100%"}} className="section-header ">
                            <h2
                                className="about-second-section-header pt-2 "
                            >
                                We transform ideas into reality with our expertise in design and development.
                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSecondSection
