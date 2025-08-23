import React, { useEffect } from "react";
import ProjectSection from "../Layout/ProjectSection";
import TopSection from "../Layout/TopSection";
import CtaSection from "../Layout/CtaSection";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import ProjectTopImage from "../../assets/projects.jpg";


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
      <ProjectSection />s
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Project;
