import React from "react";
import arrowBullet from "../../assets/journeyBullet.svg";
import Journey01 from "../../assets/journey01.jpg";




const journeyPoints = [
  {
    id: 1,
    text: "Established in 2005, pioneer role in SIDCUL Industrial Estate Pantnagar."
  },
  {
    id: 2,
    text: "Diverse portfolio of challenging industrial civil construction projects."
  },
  {
    id: 3,
    text: "Always maintained utmost statutory, industrial and business standards."
  },
  {
    id: 4,
    text: "Embracing the latest technical know how."
  },
  {
    id: 5,
    text: "Wide array of machinery, equipment & highly qualified and experienced staff."
  }
];

const Journey = () => {
  return (
    <section className="w-full px-[10vw] mb-20 max-[450px]:px-5">
      <div className="w-full bg-primary  shadow-[5px_5px_20px_#757687ab] p-15 max-[450px]:p-5 rounded-2xl mx-auto">
        <div className="grid grid-cols-1 min-[1025px]:grid-cols-2">
          {/* LEft SIDE */}
          <div className="py-10 rounded-2xl flex justify-center md:justify-start">
            <div className="w-full h-max">
              <div className="overflow-hidden ">
                <h2 className="text-white font-clash font-light text-[80px] max-[450px]:text-[50px] leading-[100%] tracking-wider">
                  Our Story
                </h2>
              </div>

              {/* SUB TOPICS */}
              <div className="mt-6 text-[18px] leading-6 pr-20 max-[1025px]:pr-0 text-white font-plein space-y-3 min-[1600px]:space-y-7 min-[1600px]:text-[24px]">
                {journeyPoints.map((item) => (
                  <div
                    key={item.id}
                    className={`w-full flex items-start font-clash gap-2 ${
                      item.id == 1 ? "min-[1600px]:mt-10" : ""
                    }`}
                  >
                    <img
                      src={arrowBullet}
                      alt="arrow"
                      className="w-[18px] h-[18px] mt-1"
                    />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="w-full h-full rounded-lg text-white flex flex-col justify-start items-end">
            {/* Framed photo */}
            <img
              src={Journey01}
              alt="Construction collage"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
