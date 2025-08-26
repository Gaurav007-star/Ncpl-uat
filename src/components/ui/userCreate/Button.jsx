import React from "react";
import { useNavigate } from "react-router";

const Button = ({ btn_name, route, outlineColor = "primary" }) => {
  const navigate = useNavigate();

  const CustomCss = `relative inline-block px-6 py-1 gap-2 leading-10 
          cursor-pointer overflow-hidden 
          border-2 border-${outlineColor} rounded-md 
          text-${outlineColor} 
          z-[1] transition-colors duration-500 
          group-hover:text-white hover:outline-none
  `;

  return (
    <div className="inline-block group">
      <button
        className={CustomCss}
        onClick={() => navigate(route)}
      >
        {btn_name} <span aria-hidden>→</span>
        <span
          className="
            absolute w-[200px] h-[150px] rounded-full bg-primary -z-10
            top-full left-full transition-all duration-700
            group-hover:top-[-30px] group-hover:left-[-30px]
            active:bg-[#3a0ca3] active:transition-none
          "
        />
      </button>
    </div>
  );
};

export default Button;
