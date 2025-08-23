import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FallCelling from "../../assets/projects/fall celling.jpg";
import ItbpDalmau from "../../assets/projects/ITBP Dalmau, Raebareli.jpg";
import Quarter01 from "../../assets/projects/Quarter Quard Building, CRPF Camp, Amethi.jpg";
import Quarter02 from "../../assets/projects/Quarter Quard Building, CRPF Camp, Amethi02.jpg";

// Projects grouped by categories
const projectCategories = {
  "Ongoing Projects": [
    {
      title: "Nestle India Pvt. Ltd",
      description: "Manufacturing facility development with modern standards.",
      tags: ["Industrial", "Efficiency", "Modern"],
      img: FallCelling,
      size: "md:col-span-2 md:row-span-2" // big block
    },
    {
      title: "ITBP Campus - Raebareli (CPWD)",
      description: "Infrastructure project for ITBP campus facilities.",
      tags: ["Government", "Infrastructure", "Campus"],
      img: ItbpDalmau,
      size: "md:col-span-2"
    },
    {
      title: "Tata Motors Ltd",
      description: "Automobile plant expansion project.",
      tags: ["Industrial", "Automobile", "Expansion"],
      img: Quarter01
    }
  ],
  "Major Projects": [
    {
      title: "Titan Industries Ltd 2012",
      description: "Corporate facility setup for Titan.",
      tags: ["Corporate", "2012", "Industrial"],
      img: Quarter02
    },
    {
      title: "Tata Taco Ltd 2016",
      description: "Production unit built in 2016.",
      tags: ["Manufacturing", "2016", "Tata Group"],
      img: ItbpDalmau,
      size: "md:row-span-2" // tall card
    }
  ],
  "Govt Projects": [
    {
      title: "ITBP Campus - Raebareli (CPWD)",
      description: "Campus project under CPWD.",
      tags: ["Government", "CPWD", "Campus"],
      img: ItbpDalmau
    },
    {
      title: "CRPF Campus - Amethi (CPWD)",
      description: "CRPF training and admin blocks.",
      tags: ["Government", "CPWD", "Defense"],
      img: Quarter02,
      size: "md:row-span-2"
    }
  ],
  "Other Projects": [
    {
      title: "Prakalp Seva Sansthan",
      description: "Community support project.",
      tags: ["Community", "Social", "Support"],
      img: Quarter01
    },
    {
      title: "Right Tight Fastener Pvt. Ltd",
      description: "Factory and production units.",
      tags: ["Industrial", "Manufacturing"],
      img: FallCelling
    }
  ]
};

const allProjects = Object.values(projectCategories).flat();

export default function ProjectSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  // pick category or all
  const projectsToShow =
    selectedCategory === "All Projects"
      ? allProjects
      : projectCategories[selectedCategory];

  // remove duplicates (by title)
  const uniqueProjects = Array.from(
    new Map(projectsToShow.map((p) => [p.title, p])).values()
  );

  return (
    <section className="px-[10vw] py-20 text-primary bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="uppercase text-sm tracking-widest text-secondary font-plein">
          Portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-primary font-clash">
          Our Recent Projects
        </h2>
        <p className="mt-4 text-secondary text-lg font-plein">
          Explore our latest construction projects and innovations.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {["All Projects", ...Object.keys(projectCategories)].map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 font-plein
              ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } cursor-pointer`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-2 grid-flow-dense">
        <AnimatePresence mode="wait">
          {uniqueProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.1,
                ease: "easeOut",
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.98 }}
              className={
                selectedCategory === "All Projects"
                  ? `relative group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm cursor-pointer
          ${project.size || "col-span-1 row-span-1"}
          ${
            project.title === "ITBP Campus - Raebareli (CPWD)"
              ? "md:col-span-4 md:row-start-4"
              : ""
          }
          ${
            project.title === "Nestle India Pvt. Ltd"
              ? "md:col-span-2 md:row-span-1 md:col-start-2 md:row-start-1"
              : ""
          }
        `
                  : `relative group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm cursor-pointer
          ${project.size || "col-span-1 row-span-1"}`
              }
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end transition-all duration-500 group-hover:from-black/80">
                <h3 className="text-lg font-bold text-white font-clash">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200 font-plein">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-white/20 text-white backdrop-blur-sm rounded-full font-plein"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
