"use client";
import React, { useEffect, useState } from 'react';
import { InlineWidget } from "react-calendly";

const CalendlyForm = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="col-12"
      // data-aos="fade-left"
      // data-aos-delay="200"
      // data-aos-duration="1500"
    >
      {isClient && (
        <InlineWidget 
          url="https://calendly.com/hexlertech/hexler-tech-pvt-ltd" 
          styles={{ minWidth: '320px', height: '700px' }} 
        />
      )}
    </div>
  );
};

export default CalendlyForm;
