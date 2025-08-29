import React from "react";
import Founder from "../../assets/founderImage.jpg"; // <-- Replace with your founder's image path
import { FaLinkedin } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router";

export default function NewspaperLayout() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen  text-neutral-900 font-plein">
      <div className="w-full h-max px-[10vw] my-20">
        {/* Header / Masthead */}
        <header className="pb-4 border-b border-neutral-300 text-primary">
          <h1 className="text-3xl md:text-4xl lg:text-[60px] font-medium leading-tight mt-2">
            Born and Raised in Uttar Pradesh: A Journey of Faith and Resilience
          </h1>
        </header>

        {/* Main grid */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 items-start">
          {/* Left: Article */}
          <article className="md:col-span-2">
            {/* Newspaper-style columns */}
            <div className="columns-2 gap-8 leading-relaxed text-[18px] text-justify">
              <p className="mb-4 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Born and raised in a small village in Uttar Pradesh, our
                founder’s story is rooted in simplicity, resilience, and
                unshakable faith. The grandson of a freedom fighter and son of a
                farmer, he grew up grounded in strong values and humble means, a
                childhood shaped more by character than comfort.
              </p>

              <p className="mb-4">
                From a young age, he was deeply socially active, curious, and
                driven. At just 10, he was already participating in local
                initiatives, questioning norms, and making his voice heard. He
                often laughs now as he tells one of his favorite stories: how he
                failed all five subjects in his 11th-grade exams. And how the
                only thing his granddad said to him was “good, now you should
                start your business”. But when the time came to prove himself,
                he poured in 18-hour study days, emerging not just as a student
                of books, but as a student of life.
              </p>

              <p className="mb-4">
                What sets him apart is his ability to fall in love with whatever
                he does, not because life was always ideal, but because he
                learned how to find beauty in it. With unwavering faith in God,
                he never second-guesses his choices. He moves forward, always
                forward.
              </p>

              <p className="mb-4">
                From a scrappy, street-smart kid to an academic who authored a
                book, and eventually a self-made entrepreneur, his evolution has
                been nothing short of extraordinary. Today, he leads NTNL
                Construction with humility and vision, employing more than 1000
                people, and giving back generously to the village, city, and
                society that shaped him.
              </p>

              <p className="mb-4">
                He never imagined achieving so much. But now that he’s gone
                beyond those early dreams, he no longer limits his vision.
                Today, he dares to dream beyond imagination, grounded in faith,
                and driven by purpose.
              </p>
            </div>
          </article>

          {/* Right: Founder Portrait only */}
          <aside className="md:col-span-1 font-plein">
            <figure className="sticky top-6">
              {/* Smaller Image */}
              <img
                src={Founder}
                alt="Founder Portrait"
                className="w-2/3 mx-auto h-auto object-cover rounded-2xl"
              />
              <figcaption className="text-[18px] italic mt-2 text-center text-neutral-700 flex items-center justify-center gap-2">
                JB Singh <a href="https://www.linkedin.com/company/ntnl-construction-pvt-ltd/" target="_blank"><FaLinkedin className="text-[24px]"/></a>
              </figcaption>
            </figure>
          </aside>
        </main>
      </div>
    </div>
  );
}
