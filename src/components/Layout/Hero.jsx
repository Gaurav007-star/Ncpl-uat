import React from "react";
import { motion } from "framer-motion";
import construct01 from "../../assets/construct01.jpg";
import Button from "../ui/userCreate/Button";
import ArrowButton from "../ui/userCreate/ArrowButton";
import { SpinningText } from "../magicui/spinning-text";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="px-[10vw]">
        <motion.div
          className="relative mt-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-xl ">
            {/* Background Image */}
            <motion.img
              src={construct01}
              alt="workers on site"
              className="block h-[360px] md:h-[700px] w-full object-cover object-top"
            />

            <div className="absolute bottom-0 flex items-center justify-center w-[200px] h-[200px]">
              {/* Spinning circular text */}
              <SpinningText
                className="text-[20px] tracking-wider text-white z-[500]"
                duration={12}
                radius={8}
              >
                Safety First • Quality Always • Success Together •
              </SpinningText>

              {/* Arrow in the center */}
              <div className="absolute z-[500] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ArrowButton route="/about" title="About Us" />
              </div>
            </div>

            {/* Bottom Overlay Section */}
            <div className="absolute bottom-0 left-0 flex flex-col font-plein items-end w-full p-6 md:p-10 text-white  rounded-b-xl bg-gradient-to-t from-black/60 via-black/50 to-transparent">
              {/* Headline */}
              <section className="flex flex-col items-end text-3xl md:text-[120px] font-medium font-clash mb-15 h-max w-full pl-2 leading-[80%] ">
                <h1>We build,</h1>
                <h2 className="text-[160px] flex items-center  ">
                  You grow
                </h2>
              </section>

              {/* Description */}
              <p className="w-[70%] text-sm md:text-base text-gray-200 mb-2 text-right">
                Under the guidance of our expert team, we help you build strong
                foundations while you focus on growing your business. Together,
                we optimize resources, create opportunities, and scale with
                confidence.
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="px-4 py-1 rounded-full bg-white/20 text-sm backdrop-blur-sm">
                  Construction
                </span>
                <span className="px-4 py-1 rounded-full bg-white/20 text-sm backdrop-blur-sm">
                  Project Execution
                </span>
                <span className="px-4 py-1 rounded-full bg-white/20 text-sm backdrop-blur-sm">
                  Development
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
