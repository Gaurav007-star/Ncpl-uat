import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  { year: "2012", company: "Titan Industries Ltd" },
  { year: "2016", company: "Tata Taco Ltd" },
  { year: "2016", company: "MM Forgings Ltd" },
  { year: "2012 & 2016", company: "Parkson Packaging Ltd" },
  { year: "2012 & 2016", company: "TVS Srichakra Ltd" },
  { year: "2012", company: "Huhtamaki PPL India Ltd" },
  { year: "2012", company: "Century Pulp and Paper" },
  { year: "2014", company: "Tata Motors Ltd" },
  { year: "2018", company: "Meghdoot Packaging" },
  { year: "2021", company: "M/s IVAX Paper Chemical Pvt. Ltd" },
  { year: "2025", company: "Tata Smart City Mobility Pvt. Ltd" }
];

const themes = [
  { panel: "from-orange-400 to-orange-500", accent: "bg-orange-500" },
  { panel: "from-pink-500 to-pink-600", accent: "bg-pink-500" },
  { panel: "from-violet-500 to-violet-600", accent: "bg-violet-600" },
  { panel: "from-cyan-400 to-cyan-500", accent: "bg-cyan-500" },
  { panel: "from-lime-400 to-lime-500", accent: "bg-lime-500" },
  { panel: "from-amber-400 to-amber-500", accent: "bg-amber-500" }
];

// Hook to detect large screen (>= 1024px)
function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  React.useEffect(() => {
    const checkScreen = () => setIsLarge(window.innerWidth >= 1600);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isLarge;
}

function TimelineCard({ year, company, theme, index, scrollYProgress, stopAt }) {
  const isLarge = useIsLargeScreen();

  // Choose X transform range based on screen size
  const xRange = isLarge
    ? [index * 320, index * 170] // Large screen
    : [index * 320, index * 100]; // Small/medium screen

  const x = useTransform(scrollYProgress, [0, stopAt], xRange, { clamp: true });
  const scale = useTransform(scrollYProgress, [0, stopAt], [1, 0.95], {
    clamp: true
  });

  return (
    <motion.div
      style={{ x, scale }}
      whileHover={{
        zIndex:1000,
        cursor:"pointer",
      }}
      transition={{
        duration:.3,
        ease:"easeIn"
      }}
      className={`absolute rounded-3xl shadow-xl bg-gradient-to-b ${theme.panel} text-white w-[300px] h-[360px] p-6 flex flex-col justify-between`}
    >
      <div>
        <div className="uppercase text-xs tracking-[0.3em] opacity-90">Date</div>
        <div className="mt-1 text-3xl font-extrabold drop-shadow-sm">{year}</div>
      </div>

      {/* connector circle */}
      <span
        className={`absolute left-[-18px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full ring-4 ring-white/60 ${theme.accent} shadow-xl`}
      />

      <div className="pt-2">
        <div className="uppercase text-[11px] tracking-widest/3 opacity-90">
          Description
        </div>
        <div className="mt-1 text-base leading-snug font-medium">{company}</div>
      </div>
    </motion.div>
  );
}

function Timeline({ items = timelineData }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Adjust this to decide where animation should freeze
  const stopAt = 0.85; // 85% of scroll progress

  return (
    <div ref={containerRef} className="relative w-full h-[350vh]">
      <div className="sticky top-20 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-screen flex items-center px-[10vw]">
          {items.map((t, i) => (
            <TimelineCard
              key={`${t.year}-${i}`}
              year={t.year}
              company={t.company}
              theme={themes[i % themes.length]}
              index={i}
              scrollYProgress={scrollYProgress}
              stopAt={stopAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
