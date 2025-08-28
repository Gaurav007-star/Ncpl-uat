import Card from "./Card";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import IndustrialCivil from "../../assets/services/Industrial Civil Construction.jpg";
import Turnkey from "../../assets/services/Turnkey Project Execution.jpg";
import RoadInfra from "../../assets/services/Road Infrastructure.jpg";
import SiteDevelopment from "../../assets/services/Site Development & Infrastructure.jpg";
import preEngineer from "../../assets/services/Pre-Engineered Buildings (PEB).jpg";
import ExternalDevelopment from "../../assets/services/External Development & Finishing.jpg";
import Renovation from "../../assets/services/Renovation & Expansion Projects.jpg";
import ProjectManagement from "../../assets/services/Project Management & Consulting.jpg";
import ServiceSection from "./ServiceSection";

const services = [
  {
    title: "Industrial Civil Construction",
    description:
      "Designing and building infrastructure such as roads, bridges, buildings, and water systems with durability and precision.",
    image: IndustrialCivil
    // color: "#004aad"
  },
  {
    title: "Turnkey Project Execution",
    description:
      "End-to-end solutions, from design to delivery, ensuring seamless, timely, and high-quality results.",
    image: Turnkey
    // color: "#195bc0" // Slightly lighter
  },
  {
    title: "Road Infrastructure",
    description:
      "Delivering robust road infrastructure from planning to construction for safe, sustainable, and efficient networks.",
    image: RoadInfra
    // color: "#2f6fd6"
  },
  {
    title: "Site Development & Infrastructure",
    description:
      "Preparing land with utilities, drainage, and access to ensure efficient and safe construction readiness.",
    image: SiteDevelopment
    // color: "#4a82e0"
  },
  {
    title: "Pre-Engineered Buildings (PEB)",
    description:
      "Fast, durable, and cost-effective steel structures ideal for warehouses, factories, and more.",
    image: preEngineer
    // color: "#6c9cf0"
  },
  {
    title: "External Development & Finishing",
    description:
      "Crafting landscapes, facades, and green spaces that enhance both functionality and aesthetics.",
    image: ExternalDevelopment
    // color: "#8cb1f5"
  },
  {
    title: "Renovation & Expansion Projects",
    description:
      "Transforming existing structures with smart renovations and strategic expansions for better utility and longevity.",
    image: Renovation
    // color: "#aac6fa"
  },
  {
    title: "Project Management & Consulting",
    description:
      "Managing projects from planning to onsite coordination with cost control and seamless execution.",
    image: ProjectManagement
    // color: "#c7dbff" // Lightest
  }
];

export default function ParallaxCards() {
  const rootContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: rootContainer,
    offset: ["start start", "end end"]
  });

  return (
    <div
      ref={rootContainer}
      id="parallax-card-section"
      className="mt-[20vh] max-[450px]:mt-10 w-full mb-20"
    >
      <ServiceSection />
      {services.map((card, index) => {
        return <Card key={index} card={card} width={"70vw"} height={"350px"} />;
      })}

      <div className="top-section w-full h-max flex flex-col gap-6 my-10 px-[10vw] max-[450px]:px-5 min-[450px]:hidden">
        {services.map((item) => {
          return (
            <div className="card-section w-full h-max shadow-md">
              {/* LEFT-section */}
              <div className="left-section w-[50%] max-[1025px]:w-full max-[1025px]:h-[400px] max-[450px]:h-[300px] max-[1025px]:rounded-t-2xl h-full">
                <img
                  src={
                    item.image
                      ? item.image
                      : "https://images.unsplash.com/photo-1694522362256-6c907336af43?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                  className="w-full h-full  max-[1025px]:rounded-t-2xl object-cover"
                />
              </div>

              {/* RIGHT-SECTION */}
              <div className="right-section w-full flex flex-col rounded-b-2xl bg-primary text-white p-4">
                {/* Heading with half underline */}
                <div className="relative mb-6 ">
                  <h1 className="font-clash text-[25px] font-semibold leading-relaxed">
                    {item.title}
                  </h1>
                  <div className="absolute bottom-[-10px] left-0 w-40 max-[450px]:w-[70%] h-[2px] bg-white rounded-full"></div>
                </div>

                {/* Small description with modern offset */}
                <p className="text-[20px] w-full leading-relaxed opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
