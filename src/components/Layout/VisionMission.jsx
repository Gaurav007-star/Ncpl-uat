import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import OurStory from "../../assets/OurStory.jpg";
import Journey01 from "../../assets/journey01.jpg";
import arrowBullet from "../../assets/journeyBullet.svg";
import Button from "../ui/userCreate/Button";

const journeyPoints = [
  {
    id: 1,
    text: "Established in 2005, pioneer role in SIDCUL Industrial Estate Pantnagar."
  },
  {
    id: 2,
    text: "Diverse portfolio of challenging industrial civil construction projects."
  },
  {
    id: 3,
    text: "Always maintained utmost statutory, industrial and business standards."
  },
  {
    id: 4,
    text: "Embracing the latest technical know how."
  },
  {
    id: 5,
    text: "Wide array of machinery, equipment & highly qualified and experienced staff."
  }
];

export default function VisionMission() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax-like movement
  const yImage = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const fadeText = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-full pb-20 pt-10  text-black space-y-20 overflow-hidden"
    >
      {/* Row 1: Vision + Image */}
      <div className="flex items-center gap-12 px-[10vw]">
        <motion.div
          style={{ opacity: fadeText }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-[40%]"
        >
          <h2 className="text-[40px] font-clash font-extrabold text-primary">
            Our Vision
          </h2>
          <p className="text-lg leading-relaxed text-secondary">
            To be a part of India's journey in <br/>becoming a global manufacturing
            hub.
          </p>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop"
          alt="Vision"
          style={{ y: yImage }}
          className="w-[60%] h-80 object-cover rounded-2xl shadow-xl"
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Row 2: Image + Mission */}
      <div className="flex gap-12 items-center px-[10vw]">
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1663088543643-2a1ebfc830b6?q=80&w=1172&auto=format&fit=crop"
          alt="Mission"
          style={{ y: yImage }}
          className="w-[60%] h-80 object-cover rounded-2xl shadow-xl"
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <motion.div
          style={{ opacity: fadeText }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-[40%]"
        >
          <h2 className="text-[40px] font-clash font-extrabold text-primary">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-secondary">
            To be the industry benchmark for quality, safety, and timely
            delivery of large-scale projects.
          </p>
        </motion.div>
      </div>

      {/* JOURNEY */}
      <section className="w-full  px-[10vw]">
        <div className="w-full bg-primary shadow-[5px_5px_20px_#757687ab] p-15 rounded-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* LEft SIDE */}
            <div className="py-10 rounded-2xl flex justify-center md:justify-start">
              <div className="w-full h-max">
                <div className="overflow-hidden ">
                  <h2 className="text-white font-clash font-extrabold text-[80px] leading-[100%] tracking-wider">
                    Our Story
                  </h2>
                  {/* <div className="mt-3 w-[70%] h-1 bg-white"></div> */}
                </div>

                {/* SUB TOPICS */}
                <div className="mt-6 text-[18px] leading-6 pr-20 text-white font-plein space-y-3 min-[1600px]:space-y-7 min-[1600px]:text-[24px]">
                  {journeyPoints.map((item) => (
                    <div
                      key={item.id}
                      className={`w-full flex items-start gap-2 ${item.id == 1 ? "min-[1600px]:mt-10":""}`}
                    >
                      <img
                        src={arrowBullet}
                        alt="arrow"
                        className="w-[18px] h-[18px] mt-1"
                      />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="w-full h-full rounded-lg text-white flex flex-col justify-start items-end">
              {/* Framed photo */}
              <img
                src={Journey01}
                alt="Construction collage"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
