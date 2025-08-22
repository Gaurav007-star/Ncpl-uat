import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import journey01 from "../../assets/journey01.jpg";
import journey02 from "../../assets/journey02.jpg";
import arrowBullet from "../../assets/arrow_13476014.svg";

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
      className="w-full pb-20 pt-10 px-[10vw] text-black space-y-20 overflow-hidden"
    >
      {/* Row 1: Vision + Image */}
      <div className="flex items-center gap-12">
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
            To be a part of India's journey in becoming a global manufacturing
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
      <div className="flex gap-12 items-center">
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
      <section className="w-full bg-white">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* LEFT: Blue panel */}
            <div className="bg-[#1E58A8] w-full h-max rounded-lg text-white p-6 md:p-12 flex flex-col justify-start items-end">
              <h1 className="text-4xl sm:text-5xl md:text-[70px] font-extrabold font-clash tracking-wider text-center md:text-left">
                JOURNEY
              </h1>

              {/* Framed photo */}
              <div className="mt-6 border border-white/40 shadow-sm rounded-lg w-full h-max ">
                <img
                  src={journey01}
                  alt="Construction collage"
                  className="w-full h-[450px] object-cover rounded-md"
                />
              </div>
            </div>

            {/* RIGHT: Image on top + body copy */}
            <div className="bg-white px-6 flex justify-center md:justify-start">
              <div className="w-full h-max">
                <div className="border border-gray-300 bg-white rounded-lg overflow-hidden">
                  <img
                    src={journey02}
                    alt="Desk planning"
                    className="w-full h-[300px] object-cover"
                  />
                </div>

                <div className="mt-6 text-[18px] leading-6 text-secondary font-plein space-y-3">
                  {journeyPoints.map((item) => (
                    <div
                      key={item.id}
                      className="w-full flex items-start gap-2"
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
          </div>
        </div>
      </section>
    </section>
  );
}
