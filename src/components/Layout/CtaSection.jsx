import {useNavigate} from "react-router";

export default function CtaSection() {

  const navigate = useNavigate();

  return (
    <section className="px-[10vw] mb-16 text-white">
      <div className="w-full px-10 py-20 rounded-2xl text-center space-y-6 bg-primary ">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Build Your Dream Project With Us
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          From design to construction, we deliver high-quality solutions that
          stand the test of time. Partner with us for your next big project.
        </p>

        {/* Button */}
        <div>
          <button className="bg-white text-primary font-semibold text-lg px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 cursor-pointer" onClick={()=>navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
