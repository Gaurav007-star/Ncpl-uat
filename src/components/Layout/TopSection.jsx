import React from "react";
import { SpinningText } from "@/components/magicui/spinning-text";

const TopSection = ({ title, description, img }) => {
  return (
    <div className="top-section w-full h-[600px] max-[1025px]:h-max min-[1600px]:h-[700px] flex max-[1025px]:flex-col gap-2 my-10 px-[10vw]">
      {/* left-section */}
      <div className="left-section relative w-[50%] max-[1025px]:w-full h-full bg-primary text-white flex flex-col justify-center max-[1025px]:rounded-t-2xl min-[1025px]:rounded-l-2xl pl-15 overflow-hidden max-[1025px]:h-[400px]">
        {/* Heading with half underline */}
        <div className="relative mb-10 ">
          <h1 className="font-clash text-[80px] font-extrabold leading-none">
            {title}
          </h1>
          <div className="absolute bottom-[-10px] left-0 w-70 h-[2px] bg-white rounded-full"></div>
        </div>

        {/* Small description with modern offset */}
        <p className="text-lg max-w-[80%] leading-relaxed opacity-90">
          {description}
        </p>

        {/* rotating text repositioned */}
        <SpinningText
          className="text-[20px] tracking-wider absolute bottom-10 left-10"
          duration={12}
          radius={8}
        >
          Safety First • Quality Always • Success Together •
        </SpinningText>
      </div>

      {/* right-section */}
      <div className="right-section w-[50%] max-[1025px]:w-full max-[1025px]:h-[400px] max-[1025px]:rounded-b-2xl h-full min-[1025px]:rounded-r-2xl">
        <img
          src={
            img
              ? img
              : "https://images.unsplash.com/photo-1694522362256-6c907336af43?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          className="w-full h-full  min-[1025px]:rounded-r-2xl max-[1025px]:rounded-b-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default TopSection;
