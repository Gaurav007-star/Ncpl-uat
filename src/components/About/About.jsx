import React, { useEffect } from "react";
import Navbar from "../Layout/Navbar";
import Founder from "../Layout/Founder";
import Footer from "../Layout/Footer";
import TopSection from "../Layout/TopSection";
import CtaSection from "../Layout/CtaSection";
import AboutTopImage from "../../assets/About us.jpg";

const About = () => {

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[]);

  return (
    <div className="w-full h-max">
      <Navbar />

      {/* top-section */}
      <TopSection
        title={"About Us"}
        description={`We are a trusted construction agency, committed to delivering
          excellence, safety, and innovative solutions in every project we
          undertake.`}
        img={AboutTopImage}
      />

      {/* Bottom-section */}
      <div className="w-full bg-[#f9f9f6] py-20 px-[10vw]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {/* Left Small Section Title */}
          <div className="col-span-1 flex items-start">
            <h3 className="tracking-wide text-primary font-clash text-[20px] relative">
              -- Company Profile --
            </h3>
          </div>

          {/* Right Large Text Section */}
          <div className="col-span-3">
            <h2 className="text-[35px] font-bold leading-[150%] tracking-wider text-primary font-clash mb-8">
              Established in 2005, at the dawn of the industrial renaissance in
              the Tarai region of Rudrapur, Udham Singh Nagar, Uttarakhand,
              National Construction has been at the forefront of providing
              comprehensive civil construction services.
            </h2>

            <div className="space-y-4 text-[18px] min-[1600px]:text-[22px] text-secondary font-plein leading-relaxed">
              <p>
                Since our inception, we have successfully executed a wide range
                of challenging and diverse industrial civil construction
                projects, consistently upholding statutory, industrial, and
                business standards.
              </p>

              <p>
                We take pride in having played a pioneering role in the
                development of the Integrated Industrial Estate of Pantnagar,
                contributing significantly to its growth and infrastructure.
              </p>

              <p>
                With a clear vision of the future, we continuously strive for
                excellence by embracing the latest technical advancements and
                improving our services through conscious, sustained efforts.
              </p>

              <p>
                In 2019, building on over 15 years of experience, National
                Construction Pvt. Ltd. was founded, marking the next phase of
                our journey. With deeper capabilities, a broader vision, and the
                strong leadership of our Managing Director, National is equipped in
                every aspect to take on more ambitious projects.
              </p>

              <p>
                Today, National Construction stands empowered with a robust fleet of
                machinery, advanced technologies, and a team of qualified,
                experienced professionals committed to excellence.
              </p>

              <p>
                We make it our mission to deliver the highest quality work, on
                time and within budget, while maintaining a steadfast commitment
                to integrity, safety, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder */}
      <Founder />

      {/* Cta section */}
      <CtaSection />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
