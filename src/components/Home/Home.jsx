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
import Button from "../ui/userCreate/Button";

const Home = () => {
  return (
    <div className="w-full h-max">
      <Navbar />
      <Hero />
      <Milestone />
      <InfinitySlider />
      <VisionMission />
      <ServiceSection />
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8 px-[10vw] mt-10">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-clash text-primary">
            Expert Construction Services
          </h1>
          <p className="text-lg text-gray-600 font-Plein max-w-lg">
            We provide high-quality construction solutions for residential,
            commercial, and industrial projects. Our team ensures durability,
            precision, and modern design tailored to your needs.
          </p>
          <Button btn_name={"Services"} route={"/service"}/>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Construction site"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px] md:h-[500px]"
          />
        </div>
      </section>
      {/* <ProjectSection /> */}
      {/* <Founder /> */}
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
