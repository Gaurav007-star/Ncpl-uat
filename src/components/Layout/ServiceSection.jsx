import React from "react";
import { motion } from "framer-motion";

// Services Data (all with images now)
// const services = [
//   {
//     title: "Industrial Civil Construction",
//     description:
//       "Designing and building infrastructure such as roads, bridges, buildings, and water systems with durability and precision.",
//     image: IndustrialCivil
//   },
//   {
//     title: "Turnkey Project Execution",
//     description:
//       "End-to-end solutions, from design to delivery, ensuring seamless, timely, and high-quality results.",
//     image: Turnkey
//   },
//   {
//     title: "Road Infrastructure",
//     description:
//       "Delivering robust road infrastructure from planning to construction for safe, sustainable, and efficient networks.",
//     image: RoadInfra
//   },
//   {
//     title: "Site Development & Infrastructure",
//     description:
//       "Preparing land with utilities, drainage, and access to ensure efficient and safe construction readiness.",
//     image: SiteDevelopment
//   },
//   {
//     title: "Pre-Engineered Buildings (PEB)",
//     description:
//       "Fast, durable, and cost-effective steel structures ideal for warehouses, factories, and more.",
//     image: preEngineer
//   },
//   {
//     title: "External Development & Finishing",
//     description:
//       "Crafting landscapes, facades, and green spaces that enhance both functionality and aesthetics.",
//     image: ExternalDevelopment
//   },
//   {
//     title: "Renovation & Expansion Projects",
//     description:
//       "Transforming existing structures with smart renovations and strategic expansions for better utility and longevity.",
//     image: Renovation
//   },
//   {
//     title: "Project Management & Consulting",
//     description:
//       "Managing projects from planning to onsite coordination with cost control and seamless execution.",
//     image: ProjectManagement
//   }
// ];

// Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ServiceSection() {
  return (
    <section className="px-[10vw] bg-white mt-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="uppercase text-sm font-semibold tracking-wider text-primary font-plein">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-light mt-2 leading-snug text-primary font-clash">
          What We Offer
        </h2>
        <p className="text-gray-600 text-lg font-plein">
          From large-scale infrastructure to precision construction, we deliver
          excellence across every aspect of civil and industrial projects.
        </p>
      </motion.div>
    </section>
  );
}
