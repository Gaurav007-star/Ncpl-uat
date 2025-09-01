import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import OurStory from "../../assets/OurStory.jpg";
import Button from "../ui/userCreate/Button";
import VisionBackground from "../../assets/vision.avif";



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
      className="w-full pb-10 max-[450px]:pb-10 text-black space-y-16 overflow-hidden"
    >
      {/* Row 1: Vision + Image */}
      <div className="flex max-[1025px]:flex-col items-center gap-12 max-[1025px]:gap-5 px-[10vw] max-[450px]:px-5">
        <motion.div
          style={{ opacity: fadeText }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-[40%] max-[1025px]:w-full"
        >
          <h2 className="text-[50px] font-clash font-light text-primary">
            Our Vision
          </h2>
          <p className="text-[18px] leading-relaxed text-secondary font-plein">
            To be a part of India's journey in <br/>becoming a global manufacturing
            hub.
          </p>
        </motion.div>

        <motion.img
          src={VisionBackground}
          alt="Vision"
          style={{ y: yImage }}
          className="w-[60%] max-[1025px]:w-full h-80 object-cover rounded-2xl shadow-xl"
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Row 2: Image + Mission */}
      <div className="flex max-[1025px]:flex-col-reverse gap-12 max-[450px]:gap-10 items-center px-[10vw]  max-[450px]:px-5">
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1663088543643-2a1ebfc830b6?q=80&w=1172&auto=format&fit=crop"
          alt="Mission"
          style={{ y: yImage }}
          className="w-[60%] max-[1025px]:w-full h-80 object-cover rounded-2xl shadow-xl"
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
          className="w-[40%] max-[1025px]:w-full"
        >
          <h2 className="text-[50px] font-clash font-light text-primary">
            Our Mission
          </h2>
          <p className="text-[18px] leading-relaxed text-secondary font-plein">
            To be the industry benchmark for quality, safety, and timely
            delivery of large-scale projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
