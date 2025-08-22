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

const ClientImages = [
  Client01,
  Client02,
  Client03,
  Client04,
  Client05
  // Client06,
  // Client07,
  // Client08,
  // Client09,
  // Client10,
  // Client11,
  // Client12
];

const InfinitySlider = () => (
  <div className="flex py-5 items-center justify-center">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {ClientImages.map((item, index) => (
          <MarqueeItem className="h-auto w-auto" key={index}>
            <img
              alt={`Placeholder ${index}`}
              className="overflow-hidden object-contain rounded-full"
              src={item}
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);
export default InfinitySlider;
