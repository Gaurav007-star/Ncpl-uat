import React from "react";
import { motion } from "framer-motion";
import construct01 from "../../assets/construct01.jpg";
import Button from "../ui/userCreate/Button";
import ArrowButton from "../ui/userCreate/ArrowButton";
import { SpinningText } from "../magicui/spinning-text";
import HomeBackground from "../../assets/homeBackgroud.jpg";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { useNavigate } from "react-router";

export default function Hero() {


  const navigate = useNavigate();


  return (
    <section className="relative overflow-hidden">
      <div className="px-[10vw] max-[450px]:px-5">
        <motion.div
          className="relative mt-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-xl ">
            <div className="overlay absolute w-full h-full bg-black/30 top-0 left-0">

            </div>
            {/* Background Image */}
            <motion.img
              src={HomeBackground}
              alt="workers on site"
              className="block h-[360px] md:h-[700px] w-full object-cover object-top"
            />

            <div className="absolute bottom-0 flex items-center justify-center w-[200px] max-[450px]:w-[120px] h-[200px] max-[450px]:h-[120px]">
              {/* Spinning circular text */}
              <SpinningText
                className="text-[16px] max-[450px]:text-[10px] tracking-wider text-white z-[500]"
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
              <section className="flex flex-col items-end min-[1025px]:text-[150px] max-[1025px]:text-[80px] max-[450px]:text-[40px] font-medium font-clash mb-15 max-[450px]:mb-10 h-max w-full pl-2 leading-[80%] ">
                <h1>We build,</h1>
                <h2 className="text-[200px]  max-[1025px]:text-[120px] max-[450px]:text-[60px] flex items-center  ">You grow</h2>

              </section>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="border-2 rounded-md px-6 max-[450px]:px-3 py-3 flex items-center gap-2 mb-15 max-[450px]:mb-5 mr-5 max-[450px]:mr-0 font-clash font-semibold text-[22px] max-[450px]:text-[16px] text-white cursor-pointer "
                  onClick={()=>navigate("/service")}
                >
                  Our Services
                </motion.button>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
