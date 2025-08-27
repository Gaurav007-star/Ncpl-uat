import React, { useEffect, useRef } from "react";
import ProjectSection from "../Layout/ProjectSection";
import TopSection from "../Layout/TopSection";
import CtaSection from "../Layout/CtaSection";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import ProjectTopImage from "../../assets/Projects.jpg";
import TimelineImage from "../../assets//timelineImage.jpg";
import Timeline from "../Layout/Timeline";
import Card from "../Layout/Card";
import { useScroll } from "motion/react";
import FallCelling from "../../assets/projects/fall celling.jpg";
import ItbpDalmau from "../../assets/projects/ITBP Dalmau, Raebareli.jpg";
import Quarter01 from "../../assets/projects/Quarter Quard Building, CRPF Camp, Amethi.jpg";
import Quarter02 from "../../assets/projects/Quarter Quard Building, CRPF Camp, Amethi02.jpg";

const projectCategories = {
  "Ongoing Projects": [
    {
      title: "Nestle India Pvt. Ltd",
      description: "Manufacturing facility development with modern standards.",
      tags: ["Industrial", "Efficiency", "Modern"],
      image: FallCelling,
      size: "md:col-span-2 md:row-span-2" // big block
    },
    {
      title: "ITBP Campus - Raebareli (CPWD)",
      description: "Infrastructure project for ITBP campus facilities.",
      tags: ["Government", "Infrastructure", "Campus"],
      image: ItbpDalmau,
      size: "md:col-span-2"
    },
    {
      title: "Tata Motors Ltd",
      description: "Automobile plant expansion project.",
      tags: ["Industrial", "Automobile", "Expansion"],
      image: Quarter01
    },
    {
      title: "Titan Industries Ltd 2012",
      description: "Corporate facility setup for Titan.",
      tags: ["Corporate", "2012", "Industrial"],
      image: Quarter02
    },
    {
      title: "Tata Taco Ltd 2016",
      description: "Production unit built in 2016.",
      tags: ["Manufacturing", "2016", "Tata Group"],
      image: ItbpDalmau,
      size: "md:row-span-2" // tall card
    }
  ],
  "Govt Projects": [
    {
      title: "ITBP Campus - Raebareli (CPWD)",
      description: "Campus project under CPWD.",
      tags: ["Government", "CPWD", "Campus"],
      image: ItbpDalmau
    },
    {
      title: "CRPF Campus - Amethi (CPWD)",
      description: "CRPF training and admin blocks.",
      tags: ["Government", "CPWD", "Defense"],
      image: Quarter02,
      size: "md:row-span-2"
    }
  ],
  "Other Projects": [
    {
      title: "Prakalp Seva Sansthan",
      description: "Community support project.",
      tags: ["Community", "Social", "Support"],
      image: Quarter01
    },
    {
      title: "Right Tight Fastener Pvt. Ltd",
      description: "Factory and production units.",
      tags: ["Industrial", "Manufacturing"],
      image: FallCelling
    }
  ]
};
const allProjects = Object.values(projectCategories).flat();
const Project = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const rootContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: rootContainer,
    offset: ["start start", "end end"]
  });

  return (
    <div className="w-full h-max">
      <Navbar />
      <TopSection
        title={"Projects"}
        description={`From Road Infrastructure to PEB showcase our expertise. Each one reflects our quality, precision, and many more successful ventures delivered with excellence.`}
        img={ProjectTopImage}
      />
      <ProjectSection />
      {/* Time line */}
      {/* <div className="timeline-section h-max flex flex-col px-[10vw] mb-30">
        <h1 className="w-full h-max font-clash font-extrabold text-[80px] text-center text-primary mb-4">
          Major Projects Timeline
        </h1>
        <img src={TimelineImage} alt="" />
      </div> */}

      <Timeline />

      <div ref={rootContainer} className="h-max w-full mb-30">
        {allProjects.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              height={"300px"}
              width={"60vw"}
              // topGap={index}
              // range={[index * 0.25, 1]}
              // targetScale={targetScale}
              // progress={scrollYProgress}
            />
          );
        })}
      </div>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default Project;
