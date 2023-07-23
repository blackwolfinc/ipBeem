import Image from "next/image";
import React from "react";

// images
import Windstream from "@/img/partners/windstream.png";
import Comcast from "@/img/partners/comcast.png";
import Verizon from "@/img/partners/verizon.png";
import Rcn from "@/img/partners/rcn.png";
import Att from "@/img/partners/att.png";
import Telekom from "@/img/partners/telekom.png";

const PartnersData = [
  {
    name: "Windstream",
    logo: Windstream,
  },
  {
    name: "Comcast",
    logo: Comcast,
  },
  {
    name: "Verizon",
    logo: Verizon,
  },
  {
    name: "RCN",
    logo: Rcn,
  },
  {
    name: "AT&T",
    logo: Att,
  },
  {
    name: "Telekom",
    logo: Telekom,
  },
];

const Partners = () => {
  return (
    <div className="partners-aos grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {PartnersData.map((item, index) => {
        const isOdd = Math.ceil((index + 1) / 2) % 2 === 1; // if 1 col start 2, else col start 1
        const modulus = Math.ceil((index + 1) % 2) === 1; // if 1, with col start
        return (
          <div
            className={`${
              modulus && isOdd ? "lg:col-start-2" : ""
            } group lg:col-span-2`}
            key={index}
            data-aos="fade-left"
            data-aos-delay={index * 200}
            data-aos-anchor=".partners-aos"
          >
            <div className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-4 opacity-70 transition-all duration-300 hover:opacity-100 lg:h-28 lg:px-10 lg:py-6 ">
              <Image
                src={item.logo}
                alt={item.name}
                width={200}
                height={200}
                className="h-full min-w-full object-contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Partners;
