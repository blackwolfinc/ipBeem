"use client";

import React, { useEffect } from "react";
import SolutionsItem from "./solutions-item";
import SolutionsItemSecondary from "./solutions-item-secondary";
import Aos from "aos";

const SolutionsData = [
  {
    title: "Residential VPN Rental (IPv4) ",
    description:
      "Need a VPN that actually provides security? You need this service.",
  },
  {
    title: "Residential Proxy Rental (IPv6)",
    description:
      "We have the fastest, most efficiently ran IPv6 proxy network. We literally invented it.",
  },
  {
    title: "Residential Proxy Rental (IPv4)",
    description:
      "Access sites from a residential network, complete control over how the website sees and perceives you",
  },
  {
    title: "Baremetal Server Rental",
    description:
      "Need pure hardware? Look no further.Let's customize something for you that works.",
  },
  {
    title: "VPSes",
    description:
      "Partnered with the world’s most interconnected network,our unmetered VPEses are the best for your needs.",
  },
];

const Solutions = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl">
      <h3
        className="mb-14 text-center text-6xl font-bold text-white lg:text-7xl"
        data-aos="fade-up"
      >
        Solutions
      </h3>
      <div
        id="solution-container"
        className="grid grid-cols-1 gap-8 px-3 md:grid-cols-2 lg:grid-cols-3 lg:px-12"
      >
        {SolutionsData.map((item, index) => {
          return (
            <div
              key={index}
              className="h-full"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              data-aos-anchor="#solution-container"
            >
              <SolutionsItem
                title={item.title}
                description={item.description}
              />
            </div>
          );
        })}
        <div
          className="h-full"
          data-aos="zoom-in"
          data-aos-delay={5 * 200}
          data-aos-anchor="#solution-container"
        >
          <SolutionsItemSecondary />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
