import React, { useEffect } from "react";
import Navbar from "../Layout/Navbar";
import TopSection from "../Layout/TopSection";
import ServiceSection from "../Layout/ServiceSection";
import CtaSection from "../Layout/CtaSection";
import Footer from "../Layout/Footer";
import ServicesTopImage from "../../assets/services.jpg";


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
        description={`We specialize in Industrial Civil Construction and Turnkey Project Execution, along with many more solutions that ensure quality, safety, and innovation in every build.`}
        img={ServicesTopImage}
      />

      <ServiceSection/>
      <CtaSection/>
      <Footer/>
    </div>
  );
};

export default Service;
