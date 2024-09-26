  import React from 'react'
  import { InlineWidget } from "react-calendly";

  const CalendlyForm = () => {
    return (
      <div
              className="col-lg-7 "
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="talk-us__item">
                <div className="section-header mb-30">
                  <h5 className="text-white">
                    <svg
                      width="28"
                      height="12"
                      viewBox="0 0 28 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.75"
                        y="0.75"
                        width="18.5"
                        height="10.5"
                        rx="5.25"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <rect x="8" width="20" height="12" rx="6" fill="white" />
                    </svg>
                    &nbsp;Let&apos;s Collaborate
                  </h5>
                  <h2 className="text-white">Set Your Meeting Time</h2>
                </div>
                {/* @ts-ignore */}
                <InlineWidget url="https://calendly.com/mmehdialij2801" />
              </div>
            </div>
    )
  }

  export default CalendlyForm
