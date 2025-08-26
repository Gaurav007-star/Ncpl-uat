import React, { useEffect } from "react";
import ProjectSection from "../Layout/ProjectSection";
import TopSection from "../Layout/TopSection";
import CtaSection from "../Layout/CtaSection";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import ProjectTopImage from "../../assets/Projects.jpg";
import TimelineImage from "../../assets//timelineImage.jpg";

const Project = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

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
      <div className="timeline-section h-max flex flex-col px-[10vw] mb-30">
        <h1 className="w-full h-max font-clash font-extrabold text-[80px] text-center text-primary mb-4">
          Major Projects Timeline
        </h1>
        <img src={TimelineImage} alt="" />
      </div>
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Project;
