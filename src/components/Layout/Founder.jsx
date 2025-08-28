import { motion } from "framer-motion";
import Founder from "../../assets/founderImage.jpg"; // replace with your artwork

export default function NewspaperEditorial() {
  return (
    <section className="w-full h-max px-[10vw] py-20">
      <div className="founder-section w-full h-screen flex items-center font-plein">
        <div className="left w-[40%] h-full flex flex-col gap-4 text-[20px] pr-4 ">
          <div className="top w-full h-max ">
            Born and raised in a small village in Uttar Pradesh, our founder’s
            story is rooted in simplicity, resilience, and unshakable faith. The
            grandson of a freedom fighter and son of a farmer, he grew up
            grounded in strong values and humble means, a childhood shaped more
            by character than comfort
          </div>
          <div className="bottom w-full h-max">
            From a young age, he was deeply socially active, curious, and
            driven. At just 10, he was already participating in local
            initiatives, questioning norms, and making his voice heard. He often
            laughs now as he tells one of his favorite stories: how he failed
            all five subjects in his 11th-grade exams. And how the only thing
            his granddad said to him was “good, now you should start your
            business”. But when the time came to prove himself, he poured in
            18-hour study days, emerging not just as a student of books, but as
            a student of life.
          </div>
        </div>

        <div className="left w-[30%] h-full flex flex-col gap-4 text-[20px] pr-4 ">
          <div className="top w-full h-max ">
            What sets him apart is his ability to fall in love with whatever he
            does, not because life was always ideal, but because he learned how
            to find beauty in it. With unwavering faith in God, he never
            second-guesses his choices. He moves forward, always forward.
          </div>
          <div className="bottom w-full h-max">
            From a scrappy, street-smart kid to an academic who authored a book,
            and eventually a self-made entrepreneur, his evolution has been
            nothing short of extraordinary. Today, he leads NTNL Construction
            with humility and vision, employing more than 1000 people, and
            giving back generously to the village, city, and society that shaped
            him.
          </div>
        </div>

        <div className="right w-[30%] h-full flex flex-col font-plein text-[20px] ">
          <div className="image-section w-full h-[400px]">
            <img
              src={Founder}
              alt="founder"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="box w-full h-max">
            He never imagined achieving so much. But now that he’s gone beyond
            those early dreams, he no longer limits his vision. Today, he dares
            to dream beyond imagination, grounded in faith, and driven by
            purpose.
          </div>
        </div>
      </div>
    </section>
  );
}
