import React from "react";
import logo from "../../assets/ncpl-logo.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ComingSoon = () => {
  return (
    <div className="w-full h-screen flex max-[1300px]:flex-col">
      <div className="left w-[60%] max-[1300px]:w-full h-full max-[1300px]:h-[50%] flex flex-col justify-center p-10">
        <img
          src={logo}
          alt="logo"
          className="w-[300px] h-[200px] max-[450px]:w-[150px] max-[450px]:h-[100px]"
        />
        <h1 className="text-primary text-[100px] max-[1025px]:text-[60px] tracking-wider font-clash font-bold">
          Coming Soon...
        </h1>
        <p className="text-primary text-[30px] tracking-wider font-plein font-light max-[450px]:text-[20px]">
          Mail us : info@ntnlconstruction.com
        </p>
      </div>
      <div className="right w-[40%] max-[1300px]:w-full h-full p-10 max-[1300px]:px-20 max-[450px]:p-5">
        <DotLottieReact
          src="https://lottie.host/1118f8a3-34c6-4997-8e3d-666ab595f16c/nDcXTxjvUc.lottie"
          loop
          autoplay
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ComingSoon;
