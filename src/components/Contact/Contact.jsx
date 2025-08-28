import React, { useEffect } from "react";
import { Link } from "react-router"; // if you use react-router-dom, change this import
import Navbar from "../Layout/Navbar";
import TopSection from "../Layout/TopSection";
import InfinitySlider from "../Layout/InfinitySlider";
import CtaSection from "../Layout/CtaSection";
import Footer from "../Layout/Footer";
import ConstructionWorker from "../../assets/constructionWorker.jpg";
import ContactTopImage from "../../assets/Contacts.jpg";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem
} from "@/components/ui/kibo-ui/marquee";

import Client01 from "../../assets/clients/Logos-01.jpg";
import Client02 from "../../assets/clients/Logos-02.jpg";
import Client03 from "../../assets/clients/Logos-03.jpg";
import Client04 from "../../assets/clients/Logos-04.jpg";
import Client05 from "../../assets/clients/Logos-05.jpg";
import Client06 from "../../assets/clients/Logos-06.jpg";
import Client07 from "../../assets/clients/Logos-07.jpg";
import Client08 from "../../assets/clients/Logos-08.jpg";
import Client09 from "../../assets/clients/Logos-09.jpg";
import Client10 from "../../assets/clients/Logos-10.jpg";
import Client11 from "../../assets/clients/Logos-11.jpg";
import Client12 from "../../assets/clients/Logos-12.jpg";
import Client13 from "../../assets/clients/Logos-13.jpg";
import Client14 from "../../assets/clients/Logos-14.jpg";
import Client15 from "../../assets/clients/Logos-15.jpg";
import Client16 from "../../assets/clients/Logos-16.jpg";
import Client17 from "../../assets/clients/Logos-17.jpg";
import Client18 from "../../assets/clients/Logos-18.jpg";
import Client19 from "../../assets/clients/Logos-19.jpg";
import Client20 from "../../assets/clients/Logos-20.jpg";
import Client21 from "../../assets/clients/Logos-21.jpg";
import Client22 from "../../assets/clients/Logos-22.jpg";
import Client23 from "../../assets/clients/Logos-23.jpg";
import Client24 from "../../assets/clients/Logos-24.jpg";
import Client25 from "../../assets/clients/Logos-25.jpg";
import Client26 from "../../assets/clients/Logos-26.jpg";
import Client27 from "../../assets/clients/Logos-27.jpg";
import Client28 from "../../assets/clients/Logos-28.jpg";
import Client29 from "../../assets/clients/Logos-29.jpg";
import Client30 from "../../assets/clients/Logos-30.jpg";
import Client31 from "../../assets/clients/Logos-31.jpg";
import Client32 from "../../assets/clients/Logos-32.jpg";
import Client33 from "../../assets/clients/Logos-33.jpg";
import Client34 from "../../assets/clients/Logos-34.jpg";
import Client35 from "../../assets/clients/Logos-35.jpg";
import Client36 from "../../assets/clients/Logos-36.jpg";
import Client37 from "../../assets/clients/Logos-37.jpg";

const ClientImages = [
  Client01,
  Client02,
  Client03,
  Client04,
  Client05,
  Client06,
  Client07,
  Client08,
  Client09,
  Client10,
  Client11,
  Client12,
  Client13,
  Client14,
  Client15,
  Client16,
  Client17,
  Client18,
  Client19,
  Client20,
  Client21,
  Client22,
  Client23,
  Client24,
  Client25,
  Client26,
  Client27,
  Client28,
  Client29,
  Client30,
  Client31,
  Client32,
  Client33,
  Client34,
  Client35,
  Client36,
  Client37
];

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

      <Marquee>
        <MarqueeContent>
          {ClientImages.map((item, index) => (
            <MarqueeItem className="h-50 w-50" key={index}>
              <img
                alt={`Placeholder ${index}`}
                className="overflow-hidden rounded-full"
                src={item}
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>

      {/* ===== Top: Image + Form ===== */}
      <section className="w-full px-[10vw] max-[450px]:px-5 pt-10 pb-6">
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
