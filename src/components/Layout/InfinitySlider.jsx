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

const InfinitySlider = () => (
  <div className="flex py-5 items-center justify-center">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {[Client01, Client02, Client03, Client04, Client05].map(
          (item, index) => (
            <MarqueeItem className="h-32 w-auto" key={index}>
              <img
                alt={`Placeholder ${index}`}
                className="overflow-hidden rounded-full"
                src={item}
              />
            </MarqueeItem>
          )
        )}
      </MarqueeContent>
    </Marquee>
  </div>
);
export default InfinitySlider;
