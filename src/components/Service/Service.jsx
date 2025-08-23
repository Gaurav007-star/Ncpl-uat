import React, { useEffect } from "react";
import Navbar from "../Layout/Navbar";
import TopSection from "../Layout/TopSection";
import ServiceSection from "../Layout/ServiceSection";
import CtaSection from "../Layout/CtaSection";
import Footer from "../Layout/Footer";
import ServicesTopImage from "../../assets/services.jpg";
import TimelineImage from "../../assets//timelineImage.jpg";

const Service = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  return (
    <div className="w-full h-max">
      <Navbar />

      <TopSection
        title={"Services"}
        description={`We specialize in Industrial Civil Construction and Turnkey Project Execution, along with many more solutions that ensure quality, safety, and innovation in every build.`}
        img={ServicesTopImage}
      />

      <ServiceSection />

      {/* Time line */}
      <div className="timeline-section h-max flex flex-col px-[10vw] mb-20">
        <h1 className="w-full h-max font-clash font-extrabold text-[80px] text-center text-primary mb-4">Major Projects</h1>
        <img src={TimelineImage} alt="" />
      </div>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default Service;
