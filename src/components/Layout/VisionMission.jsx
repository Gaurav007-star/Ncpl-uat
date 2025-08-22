import { motion } from "framer-motion";
import mission from "../../assets/construct05.jpg";

export default function VisionMission() {
  return (
    <section className="w-full py-20 px-[10vw] bg-white text-black space-y-20">
      
      {/* Row 1: Vision + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To be a part of India's journey in becoming a global manufacturing hub.
          </p>
        </motion.div>

        <motion.img
          src={mission}
          alt="Vision"
          className="w-full h-80 object-cover rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Row 2: Image + Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.img
          src={mission}
          alt="Mission"
          className="w-full h-80 object-cover rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To be the industry benchmark for quality, safety, and timely
            delivery of large-scale projects.
          </p>
        </motion.div>
      </div>

      {/* Row 3: Our Journey + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed text-gray-700">
            <li>Established in 2005, pioneer role in SIDCUL Industrial Estate Pantnagar.</li>
            <li>Diverse portfolio of challenging industrial civil construction projects.</li>
            <li>Always maintained utmost statutory, industrial and business standards.</li>
            <li>Embracing the latest technical know how.</li>
            <li>Wide array of machinery, equipment & highly qualified and experienced staff.</li>
          </ul>
        </motion.div>

        <motion.img
          src={mission}
          alt="Journey"
          className="w-full h-80 object-cover rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
