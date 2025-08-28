import React, { useEffect } from "react";
import Navbar from "../Layout/Navbar";
import Hero from "../Layout/Hero";
import Milestone from "../Layout/Milestone";
import VisionMission from "../Layout/VisionMission";
import Footer from "../Layout/Footer";
import InfinitySlider from "../Layout/InfinitySlider";
import CtaSection from "../Layout/CtaSection";
import HomeService from "../../assets/homeService.jpg";

import { motion } from "motion/react";

import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate();

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
  // }, []);

  return (
    <div className="w-full h-max">
      <Navbar />
      <Hero />
      <InfinitySlider />
      <Milestone />
      <VisionMission />

      {/* service section */}
      <section className="relative h-max flex max-[1025px]:flex-col items-center justify-between gap-8 max-[1025px]:gap-6 px-[10vw] py-16 max-[1025px]:pt-0 max-[1025px]:pb-10  max-[450px]:px-5">
        {/* Left Content */}
        <div className="flex flex-col gap-4 max-[1025px]:w-full h-max">
          <h1 className="text-4xl md:text-[50px] font-light text-primary leading-tight">
            From Blueprint to Reality
          </h1>
          <p className="text-gray-600 max-w-lg">
            We provide high-quality construction solutions for residential,
            commercial, and industrial projects. Our team ensures durability,
            precision, and modern design tailored to your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="border bg-primary w-max rounded-md px-6 py-3 flex items-center gap-2 text-white cursor-pointer"
            onClick={()=>navigate("/service")}
          >
            Our Services →
          </motion.button>
        </div>

        {/* Middle Divider + Circle Arrow */}
        <div className="relative hidden min-[1026px]:flex items-center justify-center h-full">
          {/* Full vertical line */}
          <div className="w-[1px] bg-gray-200 h-[600px]"></div>

          {/* Circle with Arrow layered on top */}
          <div className="absolute top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
            <GoArrowUpRight className="w-7 h-7 text-black" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex min-[1600px]:flex-1 justify-center max-[1025px]:w-full">
          <img
            src={HomeService}
            alt="Construction site"
            className="rounded-lg object-cover w-full h-full min-[1025px]:h-[500px] max-[1025px]:h-[400px]"
          />
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
