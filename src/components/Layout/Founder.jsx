import { motion } from "framer-motion";
import Ceo from "../../assets/ceo.png";

export default function Founder() {
  return (
    <section className="w-full py-20 px-[10vw]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 ">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 w-[50%] max-[1025px]:w-full">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-clash text-primary text-3xl md:text-4xl font-extrabold leading-snug mb-6"
          >
            THE INSPIRING JOURNEY OF OUR FOUNDER: A TIMELINE OF SUCCESS
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="font-plein text-secondary text-base md:text-lg leading-relaxed mb-10"
          >
            Our founder's journey is a testament to perseverance and innovation.
            From humble beginnings to industry leader, discover the milestones
            that shaped our vision.
          </motion.p>

          {/* Timeline Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-clash text-primary font-bold text-lg mb-2">EARLY DAYS</h4>
              <p className="font-plein text-secondary text-sm leading-relaxed">
                Starting with a small team, the foundation of our company was laid.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-clash text-primary font-bold text-lg mb-2">TURNING POINT</h4>
              <p className="font-plein text-secondary text-sm leading-relaxed">
                A major project won, propelling us into the spotlight of the construction industry.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Founder Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 w-[50%] max-[1025px]:w-full"
        >
          <img
            src={Ceo}
            alt="Founder"
            className=" w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
