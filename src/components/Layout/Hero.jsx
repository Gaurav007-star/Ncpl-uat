import React from "react";
import { motion } from "framer-motion";
import construct01 from "../../assets/construct01.jpg";
import construct02 from "../../assets/construct03.jpg";
import Button from "../ui/userCreate/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* vertical divider like the mock */}
      <span className="pointer-events-none absolute inset-y-10 left-1/2 hidden md:block w-px bg-neutral-200/80" />

      <div className=" px-[10vw] pt-10 ">
        {/* top row */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          {/* Left: headline + button */}
          <motion.div
            className=""
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold font-clash text-primary leading-[1.05] tracking-wider"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              EXPERT <br />
              CONSTRUCTION <br />
              SERVICES FOR <br />
              EVERY PROJECT
            </motion.h1>

            <motion.button
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <Button btn_name="Services" route={"/service"}/>
            </motion.button>
          </motion.div>

          {/* Right: top image */}
          <motion.div
            className="md:pl-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
              <motion.img
                src={construct01}
                alt="high-rise construction with cranes"
                className="block h-64 md:h-80 w-full object-cover filter grayscale hover:grayscale-0 cursor-pointer duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* circle arrow badge over the seam */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex">
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-black/5"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* bottom image spanning both columns */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
            <motion.img
              src={construct02}
              alt="workers on site"
              className="block h-[360px] md:h-[460px] w-full object-cover object-top filter grayscale hover:grayscale-0 cursor-pointer duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
