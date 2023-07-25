import React from "react";
import Hero from "./hero";
import Solutions from "./solutions";
import AboutUs from "./about-us";
import Partners from "./partners";

export const Body = () => {
  return (
    <div>
      <div className="relative z-0 mb-40">
        <Hero />
        {/* background image */}
        <div className="absolute right-0 top-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="546"
            height="186"
            viewBox="0 0 546 186"
            fill="none"
          >
            <path
              d="M1062.21 -345.083C1062.21 -52.0963 824.692 185.417 531.705 185.417C238.718 185.417 1.20526 -52.0963 1.20526 -345.083C1.20526 -638.07 -32.7819 -376.583 260.205 -376.583C553.192 -376.583 1062.21 -638.07 1062.21 -345.083Z"
              fill="white"
              fillOpacity="0.08"
            />
          </svg>
        </div>
        <div className="absolute left-0 top-0 -z-10 translate-y-1/2 lg:bottom-0 lg:top-auto lg:translate-y-0">
          {/* mobile */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="396"
            height="430"
            viewBox="0 0 396 430"
            fill="none"
            className="lg:hidden"
          >
            <path
              d="M395.901 89.9359C395.901 277.748 243.649 430 55.8367 430C-131.976 430 -284.227 277.748 -284.227 89.9359C-284.227 -97.8763 -306.014 69.7436 -118.202 69.7436C69.6104 69.7436 395.901 -97.8763 395.901 89.9359Z"
              fill="white"
              fillOpacity="0.08"
            />
          </svg>
          {/* desktop */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="749"
            height="670"
            viewBox="0 0 749 670"
            fill="none"
            className="-z-10 hidden lg:block"
          >
            <path
              d="M748.205 139.5C748.205 432.487 510.692 670 217.705 670C-75.2819 670 -312.795 432.487 -312.795 139.5C-312.795 -153.487 -346.782 108 -53.7948 108C239.192 108 748.205 -153.487 748.205 139.5Z"
              fill="white"
              fillOpacity="0.08"
            />
          </svg>
        </div>
        <div className="absolute bottom-10 right-0 -z-10 h-[600px] w-[400px] bg-[url('../img/cable-bg.png')] opacity-50 mix-blend-soft-light"></div>
      </div>
      <div id="solutions" className="mb-40 pt-10">
        <Solutions />
      </div>
      <div id="about-us" className="mx-auto mb-60 max-w-screen-xl pt-10">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="mb-10 px-4 lg:mb-0 lg:w-1/2 lg:pl-12">
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
