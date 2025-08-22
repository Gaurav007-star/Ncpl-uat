import React from "react";
import { motion } from "framer-motion";
import IndustrialCivil from "../../assets/services/Industrial Civil Construction.jpg";
import Turnkey from "../../assets/services/Turnkey Project Execution.jpg";
import RoadInfra from "../../assets/services/Road Infrastructure.jpg";
import SiteDevelopment from "../../assets/services/Site Development & Infrastructure.jpg";
import preEngineer from "../../assets/services/Pre-Engineered Buildings (PEB).jpg";
import ExternalDevelopment from "../../assets/services/External Development & Finishing.jpg";
import Renovation from "../../assets/services/Renovation & Expansion Projects.jpg";
import ProjectManagement from "../../assets/services/Project Management & Consulting.jpg";

// Services Data (all with images now)
const services = [
  {
    title: "Industrial Civil Construction",
    description:
      "Designing and building infrastructure such as roads, bridges, buildings, and water systems with durability and precision.",
    image: IndustrialCivil
  },
  {
    title: "Turnkey Project Execution",
    description:
      "End-to-end solutions, from design to delivery, ensuring seamless, timely, and high-quality results.",
    image: Turnkey
  },
  {
    title: "Road Infrastructure",
    description:
      "Delivering robust road infrastructure from planning to construction for safe, sustainable, and efficient networks.",
    image: RoadInfra
  },
  {
    title: "Site Development & Infrastructure",
    description:
      "Preparing land with utilities, drainage, and access to ensure efficient and safe construction readiness.",
    image: SiteDevelopment
  },
  {
    title: "Pre-Engineered Buildings (PEB)",
    description:
      "Fast, durable, and cost-effective steel structures ideal for warehouses, factories, and more.",
    image: preEngineer
  },
  {
    title: "External Development & Finishing",
    description:
      "Crafting landscapes, facades, and green spaces that enhance both functionality and aesthetics.",
    image: ExternalDevelopment
  },
  {
    title: "Renovation & Expansion Projects",
    description:
      "Transforming existing structures with smart renovations and strategic expansions for better utility and longevity.",
    image: Renovation
  },
  {
    title: "Project Management & Consulting",
    description:
      "Managing projects from planning to onsite coordination with cost control and seamless execution.",
    image: ProjectManagement
  }
];

// Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Service() {
  return (
    <section className="px-[10vw] py-20 bg-white ">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="uppercase text-sm font-semibold tracking-wider text-primary font-clash">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-snug text-primary font-clash">
          What We Offer
        </h2>
        <p className="text-gray-600 text-lg font-plein">
          From large-scale infrastructure to precision construction, we deliver
          excellence across every aspect of civil and industrial projects.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-8 mt-16"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-white flex flex-col w-[400px] h-[500px] cursor-pointer"
          >
            <div className="relative w-full h-full overflow-hidden">
              {/* Image with zoom effect */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Overlay always visible but with subtle hover fade */}
              <motion.div
                className="absolute inset-0 bg-[#000000a8] flex items-end"
                whileHover={{backdropFilter:blur("2px") }}
                transition={{ duration: 0.4 }}
              >
                <div className="p-6 text-white">
                  <h3 className="text-[22px] font-bold mb-1 font-clash">
                    {service.title}
                  </h3>
                  <p className="text-[18px] text-gray-200 font-plein">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
