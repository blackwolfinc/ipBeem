"use client";

import React, { useEffect } from "react";
import Aos from "aos";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <h3
        className="mb-12 text-center text-3xl font-bold text-white lg:text-start lg:text-7xl"
        data-aos="fade-up"
      >
        About Us
      </h3>
      <div className="about-us-aos flex flex-col gap-6 text-center text-lg text-white lg:text-start lg:text-2xl">
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor=".about-us-aos"
        >
          We are a networking company operating in the industry for the past 15
          years,partnering & working alongside major domestic carriers.
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-anchor=".about-us-aos"
        >
          We procure, purchase, lease & acquire(by other means) IP resources
          that clients call “residential”.
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-anchor=".about-us-aos"
        >
          These IPs are regarded as some ofthe best in the industry, allowing
          clients to complete a myriad of automated & scripted tasksonline.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
