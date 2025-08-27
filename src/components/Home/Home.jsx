import React, { useEffect } from "react";
import Navbar from "../Layout/Navbar";
import Hero from "../Layout/Hero";
import Service from "../Layout/ServiceSection";
import Projects from "../Layout/ProjectSection";
import Milestone from "../Layout/Milestone";
import VisionMission from "../Layout/VisionMission";
import Founder from "../Layout/Founder";
import Footer from "../Layout/Footer";
import InfinitySlider from "../Layout/InfinitySlider";
import CtaSection from "../Layout/CtaSection";
import ServiceSection from "../Layout/ServiceSection";
import ProjectSection from "../Layout/ProjectSection";
import Button from "../ui/userCreate/Button";

const Home = () => {

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[]);
  
  return (
    <div className="w-full h-max">
      <Navbar />
      <Hero />
      <Milestone />
      <InfinitySlider />
      <VisionMission />
      <ServiceSection />

      {/* service section */}
<section className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-[10vw] py-16">
  {/* Left Content */}
  <div className="space-y-6">
    <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
      EXPERT <br /> CONSTRUCTION <br /> SERVICES FOR <br /> EVERY PROJECT
    </h1>
    <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-900 transition">
      All Projects
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           strokeWidth="2" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>

  {/* Right Image */}
  <div className="flex justify-center relative">
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      alt="Construction site"
      className="rounded-lg object-cover w-full h-[400px] md:h-[500px]"
    />
  </div>

  {/* Vertical Divider + Circle Arrow */}
  <div className="hidden md:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 items-center">
    {/* Divider line */}
    <div className="w-px bg-gray-300 h-[80%]"></div>
    {/* Circle with Arrow */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             strokeWidth="2.5" stroke="currentColor"
             strokeLinecap="round" strokeLinejoin="round"
             className="w-7 h-7 text-black">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </div>
  </div>
</section>





      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
