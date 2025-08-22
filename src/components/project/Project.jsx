import React, { useEffect } from "react";
import ProjectSection from "../Layout/ProjectSection";
import TopSection from "../Layout/TopSection";
import CtaSection from "../Layout/CtaSection";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

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
        description={`We are a trusted construction agency, committed to delivering
          excellence, safety, and innovative solutions in every project we
          undertake.`}
      />
      <ProjectSection />s
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Project;
