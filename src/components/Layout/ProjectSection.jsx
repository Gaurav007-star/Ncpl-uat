import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";
import Nestle from "../../assets/clients/Logos-10.jpg";
import Tata from "../../assets/clients/Logos-16.jpg";
import Cpwd from "../../assets/clients/Logos-01.jpg";
import Titan from "../../assets/clients/Logos-09.jpg";
import Prakalpa from "../../assets/clients/Logos-38.png";
import RightTight from "../../assets/clients/Logos-39.png";
import HindustanZinc from "../../assets/clients/Logos-13.jpg";
import Manjushree from "../../assets/clients/Logos-19.jpg";
import Interarch from "../../assets/clients/Logos-41.jpg";
import Technical from "../../assets/clients/Logos-40.jpg";
import Luminous from "../../assets/clients/Logos-42.jpg";
import Geeta from "../../assets/clients/Logos-43.jpg";
import Syndicate from "../../assets/clients/Logos-44.jpg";

// Projects grouped by categories
const projectCategories = {
  "Ongoing Projects": [
    {
      title: "Nestle India Pvt. Ltd",
      description: "Manufacturing facility development with modern standards.",
      tags: ["Industrial", "Efficiency", "Modern"],
      image: Nestle,
      size: "md:col-span-2 md:row-span-2" // big block
    },
    {
      title: "ITBP Campus - Raebareli (CPWD)",
      description: "Infrastructure project for ITBP campus facilities.",
      tags: ["Government", "Infrastructure", "Campus"],
      image: Cpwd,
      size: "md:col-span-2"
    },
    {
      title: "Tata Motors Ltd",
      description: "Automobile plant expansion project.",
      tags: ["Industrial", "Automobile", "Expansion"],
      image: Tata
    },
    {
      title: "TPEML",
      description:
        "Industrial project under Tata Passenger Electric Mobility Limited.",
      tags: ["Industrial", "Tata Group", "Electric"],
      image: Tata
    },
    {
      title: "Interarch Building Project",
      description: "Pre-engineered building solutions project.",
      tags: ["Infrastructure", "Industrial", "PEB"],
      image: Interarch
    },
    {
      title: "Technical Associate",
      description: "Construction and industrial works for Technical Associate.",
      tags: ["Industrial", "Construction"],
      image: Technical
    },
    {
      title: "Luminous Power Technologies Pvt. Ltd",
      description: "Manufacturing plant setup for Luminous Power.",
      tags: ["Industrial", "Power", "Manufacturing"],
      image: Luminous
    }
  ],
  // "Major Projects": [
  //   {
  //     title: "Titan Industries Ltd 2012",
  //     description: "Corporate facility setup for Titan in 2012.",
  //     tags: ["Corporate", "2012", "Industrial"],
  //     image: Titan
  //   },
  //   {
  //     title: "Tata Taco Ltd 2016",
  //     description: "Production unit built in 2016.",
  //     tags: ["Manufacturing", "2016", "Tata Group"],
  //     image: Tata,
  //     size: "md:row-span-2"
  //   },
  //   {
  //     title: "MM Forgings Ltd 2016",
  //     description: "Forging plant construction completed in 2016.",
  //     tags: ["Industrial", "Forging", "2016"],
  //     image: MMForgings
  //   },
  //   {
  //     title: "Parkson Packaging Ltd 2012 & 2016",
  //     description: "Packaging facility developments in 2012 & 2016.",
  //     tags: ["Packaging", "Industrial", "2012", "2016"],
  //     image: Parkson
  //   },
  //   {
  //     title: "TVS Srichakra Ltd 2012 & 2016",
  //     description: "Automotive tyre plant expansions in 2012 & 2016.",
  //     tags: ["Automobile", "Tyres", "2012", "2016"],
  //     image: TVS
  //   },
  //   {
  //     title: "Huhtamaki PPL India Ltd 2012",
  //     description: "Packaging industry project in 2012.",
  //     tags: ["Packaging", "2012", "Industrial"],
  //     image: Huhtamaki
  //   },
  //   {
  //     title: "Tata Motors Ltd 2014 - present",
  //     description: "Long-term automobile plant projects since 2014.",
  //     tags: ["Industrial", "Automobile", "Expansion"],
  //     image: Tata
  //   },
  //   {
  //     title: "Meghdoot Packaging 2018",
  //     description: "Packaging facility developed in 2018.",
  //     tags: ["Packaging", "Industrial", "2018"],
  //     image: Meghdoot
  //   },
  //   {
  //     title: "Century Pulp and Paper 2012",
  //     description: "Pulp and paper manufacturing unit setup in 2012.",
  //     tags: ["Paper", "Manufacturing", "2012"],
  //     image: Century
  //   },
  //   {
  //     title: "M/s IVAX Paper Chemical Pvt. Ltd 2021",
  //     description: "Chemical plant project completed in 2021.",
  //     tags: ["Chemical", "Paper", "2021"],
  //     image: IVAX
  //   },
  //   {
  //     title: "Tata Smart City Mobility Pvt. Ltd 2025",
  //     description: "Upcoming smart city mobility project in 2025.",
  //     tags: ["Mobility", "Smart City", "2025"],
  //     image: TataSmart
  //   }
  // ],
  "Govt Projects": [
    {
      title: "ITBP Campus - Raebareli (CPWD)",
      description: "Campus project under CPWD.",
      tags: ["Government", "CPWD", "Campus"],
      image: Cpwd
    },
    {
      title: "CRPF Campus - Amethi (CPWD)",
      description: "CRPF training and admin blocks.",
      tags: ["Government", "CPWD", "Defense"],
      image: Cpwd,
      size: "md:row-span-2"
    }
  ],
  "Other Projects": [
    {
      title: "Prakalp Seva Sansthan",
      description: "Community support project.",
      tags: ["Community", "Social", "Support"],
      image: Prakalpa
    },
    {
      title: "Right Tight Fastener Pvt. Ltd",
      description: "Factory and production units.",
      tags: ["Industrial", "Manufacturing"],
      image: RightTight
    },
    {
      title: "Geeta Industries Pvt. Ltd",
      description: "Industrial manufacturing project.",
      tags: ["Industrial", "Manufacturing"],
      image: Geeta
    },
    {
      title: "Manjushree Industries Ltd",
      description: "Packaging solutions facility.",
      tags: ["Industrial", "Packaging"],
      image: Manjushree
    },
    {
      title: "Manjushree Technopack",
      description: "Industrial packaging project.",
      tags: ["Industrial", "Packaging"],
      image: Manjushree
    },
    {
      title: "M/s Syndicate Auto Components",
      description: "Automobile component manufacturing plant.",
      tags: ["Automobile", "Components", "Industrial"],
      image: Syndicate
    },
    {
      title: "Hindustan Zinc",
      description: "Mining and zinc processing plant.",
      tags: ["Mining", "Industrial", "Zinc"],
      image: HindustanZinc
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
    <section className="px-[10vw] max-[450px]:px-5 pt-20 max-[450px]:pt-10 text-primary" id="project-scroll-section">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="uppercase text-sm tracking-widest text-primary font-plein font-semibold">
          Portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-light mt-2 text-primary font-clash">
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

      <div
        className="h-max w-full mb-10 max-[450px]:hidden"
        
      >
        {uniqueProjects.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              height={"300px"}
              width={"60vw"}
              imgScaleStatus={false}
            />
          );
        })}
      </div>

      <div className="top-section w-full h-max flex flex-col gap-8 my-10 px-5 min-[450px]:hidden">
        {uniqueProjects.map((item) => {
          return (
            <div className="card-section w-full h-max shadow-md">
              {/* LEFT-section */}
              <div className="left-section rounded-t-2xl h-auto w-full">
                <img
                  src={
                    item.image
                      ? item.image
                      : "https://images.unsplash.com/photo-1694522362256-6c907336af43?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                  className="w-full h-full  rounded-t-2xl object-cover"
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
    </section>
  );
}
