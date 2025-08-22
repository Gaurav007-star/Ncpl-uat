import React, { useEffect } from "react";
import Navbar from "../Layout/Navbar";
import TopSection from "../Layout/TopSection";
import ServiceSection from "../Layout/ServiceSection";
import CtaSection from "../Layout/CtaSection";
import Footer from "../Layout/Footer";

const Service = () => {

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  })

  return (
    <div className="w-full h-max">
      <Navbar />

      <TopSection
        title={"Services"}
        description={`We are a trusted construction agency, committed to delivering
          excellence, safety, and innovative solutions in every project we
          undertake.`}
      />

      <ServiceSection/>
      <CtaSection/>
      <Footer/>
    </div>
  );
};

export default Service;
