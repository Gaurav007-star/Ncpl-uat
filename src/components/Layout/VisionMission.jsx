import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mission from "../../assets/construct05.jpg";

export default function VisionMission() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax-like movement
  const yImage = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const fadeText = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-[10vw] bg-white text-black space-y-20 overflow-hidden"
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
            To be a part of India's journey in becoming a global manufacturing hub.
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

      {/* Row 3: Our Journey + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          style={{ opacity: fadeText }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-[40px] font-clash font-extrabold text-primary mb-4">
            Our Journey
          </h2>
          <ul className="space-y-3 text-lg leading-relaxed text-secondary">
            <li>Established in 2005, pioneer role in SIDCUL Industrial Estate Pantnagar.</li>
            <li>Diverse portfolio of challenging industrial civil construction projects.</li>
            <li>Maintained utmost statutory, industrial and business standards.</li>
            <li>Embracing the latest technical know how.</li>
            <li>Wide array of machinery, equipment & highly qualified and experienced staff.</li>
          </ul>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Journey"
          style={{ y: yImage }}
          className="w-full h-80 object-cover rounded-2xl shadow-xl"
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
