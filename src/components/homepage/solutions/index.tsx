import React from "react";
import SolutionsItem from "./solutions-item";
import SolutionsItemSecondary from "./solutions-item-secondary";

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
  return (
    <div className="mx-auto max-w-screen-xl">
      <h3 className="mb-14 text-center text-6xl font-bold text-white lg:text-7xl">
        Solutions
      </h3>
      <div className="grid grid-cols-1 gap-8 px-3 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
        {SolutionsData.map((item, index) => {
          return (
            <SolutionsItem
              key={index}
              title={item.title}
              description={item.description}
            />
          );
        })}
        <SolutionsItemSecondary />
      </div>
    </div>
  );
};

export default Solutions;
