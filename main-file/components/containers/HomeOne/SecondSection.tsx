import React from 'react'

const SecondSection = () => {
    return (
        <section className="service-area pt-190 pb-120 " id="second-section" >
            <div className="container">
                <div className="row g-5">

                    <div className="col-lg-5 ">
                        <div className="section-header mb-40">
                            <h2
                                className="second-section-header pt-2 "
                            >
                                We don't hide,we stand tall in front of challenges, guiding you through the Digital World.
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="row g-4">
                            <div className="col-lg-6 ">
                                <Card
                                    title="Valued Customers"
                                    description="Our motto is to deliver ethical and professional services to our valued clients. We transform ideas into reality."
                                />
                                <div className="">
                                    <Card
                                        title="Modern Solutions"
                                        description="Our motto is to deliver ethical and professional services to our valued clients. We transform ideas into reality."
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className=" ">
                                    <Card
                                        title="Modern Solutions"
                                        description="Our motto is to deliver ethical and professional services to our valued clients. We transform ideas into reality."
                                    />
                                </div>
                                <div className="">
                                    <Card
                                        title="Modern Solutions"
                                        description="Our motto is to deliver ethical and professional services to our valued clients. We transform ideas into reality."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default SecondSection


const Card = ({ title, description }: { title: String, description: String }) => {
    return (
        <div className="section-header mb-40 second-section-card pt-2">
            <h2>
                {title}
            </h2>
            <p
                className="testimonial-p"
            >
                {description}
            </p>
        </div>
    )
}
