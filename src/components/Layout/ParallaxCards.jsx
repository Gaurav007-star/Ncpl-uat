import Card from "./Card";
import Image from "../../assets/construct01.jpg";
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

const services = [
  {
    title: "Industrial Civil Construction",
    description:
      "Designing and building infrastructure such as roads, bridges, buildings, and water systems with durability and precision.",
    image: IndustrialCivil,
    color: "#004aad" // Base
  },
  {
    title: "Turnkey Project Execution",
    description:
      "End-to-end solutions, from design to delivery, ensuring seamless, timely, and high-quality results.",
    image: Turnkey,
    color: "#195bc0" // Slightly lighter
  },
  {
    title: "Road Infrastructure",
    description:
      "Delivering robust road infrastructure from planning to construction for safe, sustainable, and efficient networks.",
    image: RoadInfra,
    color: "#2f6fd6"
  },
  {
    title: "Site Development & Infrastructure",
    description:
      "Preparing land with utilities, drainage, and access to ensure efficient and safe construction readiness.",
    image: SiteDevelopment,
    color: "#4a82e0"
  },
  {
    title: "Pre-Engineered Buildings (PEB)",
    description:
      "Fast, durable, and cost-effective steel structures ideal for warehouses, factories, and more.",
    image: preEngineer,
    color: "#6c9cf0"
  },
  // {
  //   title: "External Development & Finishing",
  //   description:
  //     "Crafting landscapes, facades, and green spaces that enhance both functionality and aesthetics.",
  //   image: ExternalDevelopment,
  //   color: "#8cb1f5"
  // },
  // {
  //   title: "Renovation & Expansion Projects",
  //   description:
  //     "Transforming existing structures with smart renovations and strategic expansions for better utility and longevity.",
  //   image: Renovation,
  //   color: "#aac6fa"
  // },
  // {
  //   title: "Project Management & Consulting",
  //   description:
  //     "Managing projects from planning to onsite coordination with cost control and seamless execution.",
  //   image: ProjectManagement,
  //   color: "#c7dbff" // Lightest
  // }
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
      className="h-max w-full mb-30"
    >
      {services.map((card, index) => {
        const targetScale = 1 - (services.length - index) * 0.05;
        return (
          <Card
            key={index}
            card={card}
            topGap={index}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
            width={"60vw"}
            height={"400px"}
          />
        );
      })}
    </div>
  );
}
