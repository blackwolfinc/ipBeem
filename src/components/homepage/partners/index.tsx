import Image from "next/image";
import React from "react";

// images
import Microsoft from "@/img/microsoft.png";
import Amazon from "@/img/amazon.webp";
import Google from "@/img/google.png";

const PartnersData = [
  {
    name: "Microsoft",
    logo: Microsoft,
  },
  {
    name: "Amazon",
    logo: Amazon,
  },
  {
    name: "Google",
    logo: Google,
  },
  {
    name: "Microsoft",
    logo: Microsoft,
  },
  {
    name: "Amazon",
    logo: Amazon,
  },
  {
    name: "Google",
    logo: Google,
  },
];

const Partners = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {PartnersData.map((item, index) => {
        const isOdd = Math.ceil((index + 1) / 2) % 2 === 1; // if 1 col start 2, else col start 1
        const modulus = Math.ceil((index + 1) % 2) === 1; // if 1, with col start
        return (
          <div
            key={index}
            className={`${
              modulus && isOdd ? "lg:col-start-2" : ""
            } group flex items-center justify-center rounded-lg bg-white p-4 opacity-70 transition-all duration-300 hover:opacity-100 lg:col-span-2 lg:px-10 lg:py-6`}
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={200}
              height={200}
              className="min-h-full min-w-full object-contain object-center"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Partners;
