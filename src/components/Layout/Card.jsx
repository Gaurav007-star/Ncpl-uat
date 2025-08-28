import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ServiceSection from "./ServiceSection";

const Card = ({
  card,
  topGap,
  range,
  targetScale,
  progress,
  width,
  height
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  });

  const ImageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const CardScale =
    targetScale && useTransform(progress, range, [1.05, targetScale]);

  return (
    <div
      ref={container}
      className="h-[500px] w-full sticky top-0 flex flex-col items-center justify-center max-[450px]:hidden"
    >
      <motion.div
        style={{
          width,
          height,
          scale: CardScale,
          top: `calc(-5vh + ${topGap * 25}px)`
        }}
        className={` relative card-box rounded-2xl flex max-[450px]:flex-col`}
      >

        {/* LEFT SECTION */}
        <div className="left-section w-[45%] max-[450px]:w-full h-full">
          <div className="image-wrapper overflow-hidden w-full h-full rounded-l-2xl max-[450px]:rounded-l-none max-[450px]:rounded-t-2xl">
            <motion.div
              style={{ scale: ImageScale }}
              className="image w-full h-full rounded-l-2xl  max-[450px]:rounded-t-2xl"
            >
              <img
                src={card.image}
                className="w-full h-full object-cover rounded-l-2xl max-[450px]:rounded-t-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          style={{ backgroundColor: card.color }}
          className="right w-[55%] max-[450px]:w-full h-full p-4 flex flex-col items-start justify-center rounded-r-2xl max-[450px]:rounded-r-none max-[450px]:rounded-b-2xl space-y-5 bg-primary"
        >
          <h1 className="font-clash text-[50px] max-[450px]:text-[20px] text-white w-full leading-12">
            {card.title}
          </h1>
          <p className="font-plein text-[20px] text-white w-[80%]">
            {card.description}
          </p>

          {/* PILL section */}
          <div className="flex flex-wrap gap-3 py-3 rounded-xl">
            {card.tags?.map((pill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-200 text-primary rounded-full text-sm font-plein font-medium"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
