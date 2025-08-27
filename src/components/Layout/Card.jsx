import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Card = ({ card, topGap, range, targetScale, progress }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  });

  const ImageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
const CardScale = useTransform(progress, range, [1.05, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen w-full sticky top-0 flex items-center justify-center "
    >
      <motion.div
        style={{ backgroundColor : card.color ,scale: CardScale, top: `calc(-5vh + ${topGap * 25}px)` }}
        className={` relative w-[70vw] h-[500px] card-box rounded-2xl flex mt-[20vh] backdrop-blur-3xl`}
      >
        <div className="left-section w-[50%] h-full p-4">
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
        <div className="right w-[50%] h-full p-4 flex items-center justify-center">
          <h1 className="font-clash text-[60px] text-white ">{card.title}</h1>
        </div>
      </motion.div>
    </div>
  );
};


export default Card;
