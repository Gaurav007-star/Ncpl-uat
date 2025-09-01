import React, { useEffect } from "react";
import Navbar from "../Layout/Navbar";
import Founder from "../Layout/Founder";
import Footer from "../Layout/Footer";
import TopSection from "../Layout/TopSection";
import AboutTopImage from "../../assets/About us.jpg";
import companyProfile from "../../assets/companyProfile.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="w-full h-max">
      <Navbar />

      {/* top-section */}
      <TopSection
        title={"About Us"}
        description={` A Journey of Faith, Resilience, and Purpose.`}
        img={AboutTopImage}
      />

      {/* Company profile */}
      <div className="w-full px-[10vw] pt-10 max-[450px]:pt-5 font-plein text-neutral-900">
        {/* Headline */}
        <header className="mt-6 pb-4 border-b w-full border-neutral-300">
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-medium leading-tight text-left text-primary">
            Company Profile
          </h1>
        </header>

        {/* Story Content */}
        <main className="mt-6">
          {/* Newspaper style = columns */}
          <div className="columns-1 gap-10 text-justify font-plein leading-relaxed text-[18px] md:text-[18px]">
            <p className="mb-4 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              Established in 2005, at the dawn of the industrial renaissance in
              the Tarai region of Rudrapur, Udham Singh Nagar, Uttarakhand,
              National Construction has been at the forefront of providing
              comprehensive civil construction services. Since our inception, we
              have successfully executed a wide range of challenging and diverse
              industrial civil construction projects, consistently upholding
              statutory, industrial, and business standards. We take pride in
              having played a pioneering role in the development of the
              Integrated Industrial Estate of Pantnagar, contributing
              significantly to its growth and infrastructure.
            </p>

            <p className="mb-4">
              With a clear vision of the future, we continuously strive for
              excellence by embracing the latest technical advancements and
              improving our services through conscious, sustained efforts. In
              2019, building on over 15 years of experience, National
              Construction Pvt. Ltd. was founded, marking the next phase of our
              journey. With deeper capabilities, a broader vision, and the
              strong leadership of our Managing Director, National is equipped
              in every aspect to take on more ambitious projects.
            </p>

            <p className="mb-4">
              Today, National Construction stands empowered with a robust fleet
              of machinery, advanced technologies, and a team of qualified,
              experienced professionals committed to excellence. We make it our
              mission to deliver the highest quality work, on time and within
              budget, while maintaining a steadfast commitment to integrity,
              safety, and innovation.
            </p>
          </div>
        </main>

        {/* Top Image */}
        <figure className="w-full mt-5">
          <img
            src={companyProfile}
            alt="Company Profile"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </figure>
      </div>

      {/* Founder */}
      <Founder />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
