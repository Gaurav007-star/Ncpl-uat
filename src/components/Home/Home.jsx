import React from "react";
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

const Home = () => {
  return (
    <div className="w-full h-max">
      <Navbar />
      <Hero />
      <Milestone />
      <InfinitySlider />
      <VisionMission />
      <ServiceSection />
      <ProjectSection />
      <Founder />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
