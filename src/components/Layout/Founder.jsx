import { motion } from "framer-motion";
import Ceo from "../../assets/ceo.png";
import { useLocation } from "react-router";

export default function Founder() {
  const currentRoute = useLocation();

  const isAboutPage = currentRoute.pathname === "/about" ? true : false;

  return (
    <section className="w-full py-20 px-[10vw]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 ">
        {/* Left Side: Text Content */}
        <div className="flex-1 w-[50%] max-[1025px]:w-full">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-clash text-primary text-3xl md:text-4xl font-extrabold leading-snug mb-6"
          >
            THE INSPIRING JOURNEY OF OUR FOUNDER: A TIMELINE OF SUCCESS
          </motion.h2>

          {/* Subheading */}
          {isAboutPage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="font-plein text-secondary text-base md:text-lg leading-relaxed space-y-6 mb-10"
            >
              <p>
                Born and raised in a small village in Uttar Pradesh, our
                founder’s story is rooted in simplicity, resilience, and
                unshakable faith. The grandson of a freedom fighter and son of a
                farmer, he grew up grounded in strong values and humble means —
                a childhood shaped more by character than comfort.
              </p>

              <p>
                From a young age, he was deeply socially active, curious, and
                driven. At just 10, he was already participating in local
                initiatives, questioning norms, and making his voice heard.
              </p>

              <p>
                He often laughs now as he tells one of his favorite stories: how
                he failed all five subjects in his 11th-grade exams — and how
                the only thing his granddad said to him was, “Good, now you
                should start your business.”
              </p>

              <p>
                But when the time came to prove himself, he poured in 18-hour
                study days, emerging not just as a student of books, but as a
                student of life. What sets him apart is his ability to fall in
                love with whatever he does — not because life was always ideal,
                but because he learned how to find beauty in it.
              </p>

              <p>
                With unwavering faith in God, he never second-guesses his
                choices. He moves forward, always forward. From a scrappy,
                street-smart kid to an academic who authored a book, and
                eventually a self-made entrepreneur, his evolution has been
                nothing short of extraordinary.
              </p>

              <p>
                Today, he leads NTNL Construction with humility and vision,
                employing more than 1000 people, and giving back generously to
                the village, city, and society that shaped him. He never
                imagined achieving so much. But now that he’s gone beyond those
                early dreams, he no longer limits his vision.
              </p>

              <p>
                Today, he dares to dream beyond imagination — grounded in faith,
                and driven by purpose.
              </p>
            </motion.div>
          )}

          {/* Timeline Section */}

          {!isAboutPage && (
            <>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="font-plein text-secondary text-base md:text-lg leading-relaxed mb-10"
              >
                Our founder's journey is a testament to perseverance and
                innovation. From humble beginnings to industry leader, discover
                the milestones that shaped our vision.
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-clash text-primary font-bold text-lg mb-2">
                    EARLY DAYS
                  </h4>
                  <p className="font-plein text-secondary text-sm leading-relaxed">
                    Starting with a small team, the foundation of our company
                    was laid.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-clash text-primary font-bold text-lg mb-2">
                    TURNING POINT
                  </h4>
                  <p className="font-plein text-secondary text-sm leading-relaxed">
                    A major project won, propelling us into the spotlight of the
                    construction industry.
                  </p>
                </motion.div>
              </div>
            </>
          )}
        </div>

        {/* Right Side: Founder Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 w-[50%] max-[1025px]:w-full"
        >
          <img
            src={Ceo}
            alt="Founder"
            className=" w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
