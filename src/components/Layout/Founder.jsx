import { motion } from "framer-motion";
import FounderImage from "../../assets/founderImage.jpg";

export default function Founder() {
  return (
    <section className="w-full py-20 px-[10vw] space-y-2">
      {/* Top Section: Half Story + Image */}
      <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8">
        {/* Left Side: First Half of Story */}
        <div className="flex flex-col items-start h-max w-full lg:w-[75%]">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-clash w-[90%] text-primary text-3xl md:text-4xl font-extrabold leading-snug mb-5"
          >
            THE INSPIRING JOURNEY OF OUR FOUNDER: A TIMELINE OF SUCCESS
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="font-plein text-secondary text-[18px] leading-10"
          >
            <p>
              Born and raised in a small village in Uttar Pradesh, our founder’s
              story is rooted in simplicity, resilience, and unshakable faith.
              The grandson of a freedom fighter and son of a farmer, he grew up
              grounded in strong values and humble means, a childhood shaped
              more by character than comfort. From a young age, he was deeply
              socially active, curious, and driven. At just 10, he was already
              participating in local initiatives, questioning norms, and making
              his voice heard. He often laughs now as he tells one of his
              favorite stories: how he failed all five subjects in his
              11th-grade exams. And how the only thing his granddad said to him
              was “good, now you should start your business”. But when the time
              came to prove himself, he poured in 18-hour study days, emerging
              not just as a student of books, but as a student of life. What
              sets him apart is his ability to fall in love with whatever he
              does, not because life was always ideal, but because he learned
              how to find beauty in it. With unwavering faith in God, he never
              second-guesses his choices. He moves forward, always forward.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Founder Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex w-full lg:w-[25%] h-max"
        >
          <img
            src={FounderImage}
            alt="Founder"
            className="h-[400px] w-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Bottom Section: Remaining Story Full Width */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="font-plein flex flex-col items-start justify-center text-[18px] text-secondary text-left leading-10"
        >
          <p>
            From a scrappy, street-smart kid to an academic who authored a book,
            and eventually a self-made entrepreneur, his evolution has been
            nothing short of extraordinary. Today, he leads NTNL Construction
            with humility and vision, employing more than 1000 people, and
            giving back generously to the village, city, and society that shaped
            him. He never imagined achieving so much. But now that he’s gone beyond
            those early dreams, he no longer limits his vision. Today, he dares
            to dream beyond imagination, grounded in faith, and driven by
            purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
