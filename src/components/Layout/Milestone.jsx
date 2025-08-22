import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/userCreate/Button";

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
  return (
    <div className="px-[10vw] py-16 overflow-hidden">
      {/* Top small heading */}
      <motion.h1
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full text-[20px] font-clash text-primary text-center mb-10"
      >
        Achievements
      </motion.h1>

      {/* Top Section: Two Columns */}
      <div className="grid md:grid-cols-2 gap-15 mb-15 items-start">
        {/* Left Column */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="font-clash text-primary font-bold leading-tight text-[60px]">
            Our Impressive <br /> Milestones and Achievements
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
              <Button btn_name={"About Us"} />
            </motion.button>

            {/* Learn More Button */}
            <motion.button
              variants={fadeRight}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md bg-primary text-white font-plein cursor-pointer"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img
          src="https://images.pexels.com/photos/7937714/pexels-photo-7937714.jpeg?_gl=1*1qgy2yr*_ga*MjM4MzU3MjQyLjE3NTQ1NjU2Mzk.*_ga_8JE65Q40S6*czE3NTU3NjQ1NzIkbzUkZzEkdDE3NTU3NjQ2NjYkajQwJGwwJGgw"
          alt="Milestone"
          className="rounded-2xl shadow-md w-full h-[600px] object-cover grayscale hover:grayscale-0 duration-500 cursor-pointer"
        />
      </motion.div>
    </div>
  );
};

export default Milestone;
