import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/userCreate/Button";
import MilestoneBanner from "../../assets/MilestoneBanner.jpg";
import { useNavigate } from "react-router";

// Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const Milestone = () => {
  const navigate = useNavigate();

  return (
    <div className="px-[10vw] py-16 overflow-hidden">
      {/* Top Section: Two Columns */}
      <div className="grid md:grid-cols-2 gap-15 mb-15 items-start">
        {/* Left Column */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="font-clash text-primary font-semibold leading-[100%] text-[80px]">
            Milestones and Achievements
          </h2>
        </motion.div>

        {/* Right Column */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="font-plein text-base text-secondary mb-8 text-[22px]">
            We take pride in our track record of excellence. With numerous
            completed projects and a growing list of satisfied clients, our
            commitment to quality is evident.
          </p>

          {/* Stats */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-8"
          >
            <motion.div variants={fadeRight} className="flex flex-col">
              <h3 className="font-clash text-5xl text-primary mb-2 text-[40px]">
                100+
              </h3>
              <p className="font-plein text-secondary text-[18px]">
                Projects completed with utmost precision and care.
              </p>
            </motion.div>

            <motion.div variants={fadeRight} className="flex flex-col">
              <h3 className="font-clash text-5xl text-primary mb-2 text-[40px]">
                20+
              </h3>
              <p className="font-plein text-secondary text-[18px]">
                Years of experience we provide
              </p>
            </motion.div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {/* About us button */}
            <motion.button
              variants={fadeRight}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
              <Button btn_name={"About Us"} route={"/about"} />
            </motion.button>

            {/* Learn More Button */}
            <motion.button
              variants={fadeRight}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md bg-primary text-white font-plein cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Milestone;
