import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
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
  Client15,
  Client16,
  Client10,
  Client21,
  Client08,
  Client09,
  Client27,
  Client19,
  Client01,
  Client02,
  Client03,
  Client05,
  Client11,
  Client12,
  Client24,
  Client34,
  Client04,
  Client06,
  Client07,
  Client13,
  Client14,
  Client17,
  Client18,
  Client20,
  Client22,
  Client23,
  Client25,
  Client26,
  Client28,
  Client29,
  Client30,
  Client31,
  Client32,
  Client33,
  Client35,
  Client36,
  Client37
];

const InfinitySlider = () => (
  <div className="w-full max-[450px]:px-5  max-[1025px]:pb-0 my-20 max-[450px]:mt-10">
    {/* Header */}
    <div className="mb-12 w-full flex flex-col items-center justify-center">
      <h2 className="text-[50px] max-[450px]:text-[40px] font-light text-primary">
        Esteemed Clients
      </h2>
      <p className="mt-2 text-gray-600 w-[70%] max-[450px]:w-full text-center">
        We&apos;re honored to have partnered with these reputable organizations
        on impactful architectural projects through the decades.
      </p>
    </div>

    {/* Grid of Clients */}
    {/* <div className="w-full flex flex-wrap justify-center gap-6">
      {ClientImages.map((client, index) => (
        <div
          key={index}
          className="flex  items-center justify-center rounded-2xl transition"
        >
          <img
            src={client}
            alt={`client-${index + 1}`}
            className="w-full h-[130px] max-[450px]:h-[100px] object-contain"
          />
        </div>
      ))}
    </div> */}

    <div className="marquee-section w-full h-max py-4 flex flex-col gap-5 mt-10">
      <Marquee speed={50} dragSpeed={2}> 
        <MarqueeContent>
          {ClientImages.slice(0, 9).map((item, index) => (
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

      <Marquee speed={50} dragSpeed={2} direction="right">
        <MarqueeContent direction="right">
          {ClientImages.slice(9, 17).map((item, index) => (
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

      <Marquee speed={50} dragSpeed={2}>
        <MarqueeContent>
          {ClientImages.slice(17).map((item, index) => (
            <MarqueeItem className="h-50 w-50 overflow-hidden" key={index}>
              <img
                alt={`Placeholder ${index}`}
                className="overflow-hidden rounded-full"
                src={item}
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  </div>
);

export default InfinitySlider;
