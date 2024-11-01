"use client"
import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceItems from "@/components/containers/service/ServiceItems";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('service-items');
      if (element) {
        const offset = 100; // Adjust for fixed header
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        // Smooth scroll with timeout
        setTimeout(() => {
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }, 100); // Delay to ensure the component is rendered
      }
    };

    // Check if we're on the service page
    if (window.location.pathname === '/service') {
      handleScroll();
    }
  }, []);

  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title="IT Services" />
      <ServiceItems />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default Page;
