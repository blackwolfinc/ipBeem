import React from "react";
import Hero from "./hero";
import Solutions from "./solutions";
import AboutUs from "./about-us";
import Partners from "./partners";

export const Body = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div id="solutions" className="mb-28 pt-10">
        <Solutions />
      </div>
      <div id="about-us" className="mx-auto mb-40 max-w-screen-xl pt-10">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="mb-10 px-4 lg:mb-0 lg:w-1/2">
            <AboutUs />
          </div>
          <div className="relative w-full lg:w-1/2">
            <div className="-right-[20%] top-0 flex h-full items-center px-4 lg:absolute lg:px-0">
              <Partners />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
