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
  Client15
];

const InfinitySlider = () => (
  <div className="w-full px-[10vw] pb-16">
    {/* Header */}
    <div className="mb-12 text-left">
      <h2 className="text-[80px] font-light text-primary">Esteemed Clients</h2>
      <p className="mt-2 text-gray-600 w-[50%] text-left">
        We&apos;re honored to have partnered with these reputable organizations
        on impactful architectural projects through the decades.
      </p>
    </div>

    {/* Grid of Clients */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {ClientImages.map((client, index) => (
        <div
          key={index}
          className="flex items-center justify-center rounded-2xl hover:shadow-md transition"
        >
          <img
            src={client}
            alt="clients"
            className="w-full h-auto object-contain"
          />
        </div>
      ))}
    </div>
  </div>
);
export default InfinitySlider;
