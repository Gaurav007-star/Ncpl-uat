import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Card = ({ card, topGap, range, targetScale, progress,width,height }) => {
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
      className="h-screen w-full sticky top-0 flex items-center justify-center "
    >
      <motion.div
        style={{width,height, scale: CardScale, top: `calc(-5vh + ${topGap * 25}px)` }}
        className={` relative mt-[15vh] card-box rounded-2xl flex  backdrop-blur-3xl bg-[#8cc0eb39]`}
      >
        <div className="left-section w-[45%] h-full p-4">
          <div className="image-wrapper overflow-hidden w-full h-full rounded-2xl">
            <motion.div
              style={{ scale: ImageScale }}
              className="image w-full h-full rounded-2xl "
            >
              <img
                src={card.image}
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
        <div
          style={{ backgroundColor: card.color }}
          className="right w-[55%] h-full p-4 flex flex-col items-start justify-center rounded-r-2xl"
        >
          <h1 className="font-clash text-[40px] text-white w-full ">
            {card.title}
          </h1>
          <p className="font-plein text-[20px] text-white ">
            {card.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
