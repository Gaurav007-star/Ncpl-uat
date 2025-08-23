import React, { useEffect } from "react";
import { Link } from "react-router"; // if you use react-router-dom, change this import
import Navbar from "../Layout/Navbar";
import TopSection from "../Layout/TopSection";
import InfinitySlider from "../Layout/InfinitySlider";
import CtaSection from "../Layout/CtaSection";
import Footer from "../Layout/Footer";
import ConstructionWorker from "../../assets/constructionWorker.jpg";
import ContactTopImage from "../../assets/Contacts.jpg";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="w-full h-max bg-white">
      <Navbar />

      <TopSection
        title={"Contact Us"}
        description={
          "We're here to connect and collaborate. Reach out to us for inquiries, project discussions, or partnership opportunities. Our team is ready to provide the support and guidance you need."
        }
        img={ContactTopImage}
      />

      <InfinitySlider />

      {/* ===== Top: Image + Form ===== */}
      <section className="w-full px-[10vw] pt-12 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden h-[600px]">
            <img
              src={ConstructionWorker}
              alt="NTNL office building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Contact Form (unchanged fields) */}
          <div className="w-full h-full bg-white border border-gray-200 rounded-2xl p-8 lg:p-10">
            <h2 className="font-clash text-3xl text-primary mb-2">
              Let’s Get In Touch
            </h2>
            <p className="font-plein text-secondary mb-6">
              You can reach us anytime
            </p>

            <form className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-1/2 border border-gray-300 bg-gray-50 rounded-lg p-3 font-plein text-secondary
                           focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-1/2 border border-gray-300 bg-gray-50 rounded-lg p-3 font-plein text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 bg-gray-50 rounded-lg p-3 font-plein text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border border-gray-300 bg-gray-50 rounded-lg p-3 font-plein text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <textarea
                placeholder="How can we help?"
                maxLength={120}
                className="w-full border border-gray-300 bg-gray-50 rounded-lg p-3 font-plein text-secondary h-28 resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-xl font-clash hover:opacity-90 transition cursor-pointer"
              >
                Submit
              </button>

              <p className="text-xs font-plein text-secondary text-center">
                By contacting us, you agree to our{" "}
                <Link to="/terms" className="underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>

        {/* BOTTOM sub section */}
        <div className="flex flex-col gap-10 text-center md:text-left my-10 py-10">
          <div>
            <h3 className="font-clash text-[40px] text-primary mb-2">
              We’d Love to Hear From You.
            </h3>
            <p className="font-plein text-secondary">
              Or simply reach out — by phone, email, or in person — and we’ll be
              happy to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="space-y-2">
              <p className="font-clash text-[30px] text-primary">
                Email Support
              </p>
              <p className="text-sm font-plein text-secondary">
                Our team can respond in real time.
              </p>
              <p className="text-sm text-primary">info@ntnlconstruction.com</p>
            </div>

            {/* Office */}
            <div className="space-y-2">
              <p className="font-clash text-[30px] text-primary">
                Visit Our Office
              </p>
              <p className="text-sm font-plein text-secondary">
                P 28, Awas Vikas, Rudrapur,
                <br />
                Udham Singh Nagar, Uttarakhand 263153
              </p>
            </div>

            {/* Call */}
            <div className="space-y-2">
              <p className="font-clash text-[30px] text-primary">
                Call Us Directly
              </p>
              <p className="text-sm font-plein text-secondary">
                Available during working hours.
              </p>
              <p className="text-sm text-primary">+91 6396722144</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
