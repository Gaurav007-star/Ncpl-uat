import React from "react";

const Button = ({btn_name}) => {
  return (
    <div className="inline-block group">
      <button
        className="
          relative inline-block px-6 py-1 gap-2 leading-10 
          cursor-pointer overflow-hidden 
          border-2 border-primary rounded-md 
          text-primary 
          z-[1] transition-colors duration-500 
          group-hover:text-white
        "
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
