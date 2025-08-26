import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function ArrowButton({
  route = "/",
  title = "Home",
  className = ""
}) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <section className={`flex justify-center items-center ${className}`}>
      <motion.button
        type="button"
        aria-label={title}
        onClick={() => navigate(route)}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        whileTap={{ scale: 0.96 }}
        className="relative inline-flex items-center justify-center w-12 h-12 rounded-full text-white shadow-md focus:outline-none cursor-pointer"
      >
        {/* Icon (animated on hover) */}
        <motion.div
          animate={hover ? { rotate: 16, scale: 1.06 } : { rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <GoArrowUpRight size={20} />
        </motion.div>

        {/* Tooltip (positioned above the button, fades & slides up) */}
        <motion.div
          className="absolute left-1/2 bottom-full -translate-x-1/2 mb-3 z-50 pointer-events-none"
          initial={{ opacity: 0, y: 0 }}
          animate={hover ? { opacity: 1, y: 20 } : { opacity: 0, y: 0 }}
          transition={{ duration: 0.18, ease: "easeOut", delay: hover ? 0.06 : 0 }}
        >
          <div className="text-white text-xs font-medium px-3 py-1 rounded-md w-max text-nowrap">
            {title}
          </div>
        </motion.div>
      </motion.button>
    </section>
  );
}
