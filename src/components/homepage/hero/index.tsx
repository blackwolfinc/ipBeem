"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import { IoStar, IoChatboxEllipsesSharp } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

// images
import Hero1 from "@/img/hero-1.jpeg";
import Hero2 from "@/img/hero-2.jpeg";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex max-h-screen min-h-screen w-full flex-col justify-center lg:aspect-[4/3] lg:min-h-0">
        <div className="relative z-0">
          <div className="mx-auto flex max-w-[660px] flex-col items-center justify-center pt-10 lg:pt-0">
            <div
              className="relative z-0 order-3 mb-10 overflow-hidden rounded-lg px-8 py-3 lg:order-none lg:mb-4"
              data-aos="zoom-in"
            >
              <div className="absolute left-0 top-0 -z-10 h-full w-full bg-white/40 backdrop-blur-sm"></div>
              <span className="flex items-center gap-2 text-sm uppercase text-white">
                <IoStar />
                Rated #1 on Proxy Nation
              </span>
            </div>
            <h1
              className="order-1 mb-8 text-center text-4xl font-bold text-white lg:order-none lg:text-7xl"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              Proxies delivered
              <br />
              by humans.
            </h1>
            <p
              className="order-4 mb-14 px-12 text-center font-semibold text-white lg:order-none lg:mb-12 lg:px-0 lg:text-xl"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Residental proxies that allow access to anything, anywhere on the
              web.
            </p>
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="order-5 lg:order-none"
            >
              <button className="mb-10 flex items-center gap-2 rounded-lg bg-black px-24 py-5 text-sm uppercase text-white transition-all duration-300 hover:scale-105">
                <span>See Out Solutions</span>
                <div className="rounded-full bg-white text-black">
                  <BiChevronRight />
                </div>
              </button>
            </div>
            <div
              className="order-6 grid grid-cols-2 gap-2 px-4 text-xs uppercase text-white lg:order-none lg:px-0 lg:text-base"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="flex items-center gap-1">
                <FaCheck />
                <span>100% Residential</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCheck />
                <span>Supports Sneakers</span>
              </div>
            </div>
            <div
              className="static left-10 top-10 -z-10 order-2 mb-10 aspect-square w-60 lg:absolute lg:mb-0"
              data-aos="fade-right"
            >
              <div className="h-full w-full overflow-hidden rounded-full">
                <Image
                  src={Hero1}
                  alt="Hero 1"
                  width={800}
                  height={800}
                  className="min-h-full min-w-full object-cover"
                />
              </div>
              <div className="absolute -right-4 bottom-4 hidden aspect-square w-20 items-center justify-center rounded-full bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:flex">
                <IoChatboxEllipsesSharp className="text-blue h-1/2 w-1/2 text-blue-600" />
              </div>
            </div>
            <div
              className="absolute bottom-4 right-10 -z-10 hidden aspect-square w-60 lg:block"
              data-aos="fade-left"
            >
              <div className="h-full w-full overflow-hidden rounded-full">
                <Image
                  src={Hero2}
                  alt="Hero 1"
                  width={800}
                  height={800}
                  className="min-h-full min-w-full object-cover"
                />
              </div>
              <div className="absolute -left-2 -top-2 flex aspect-square w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#9343E9] to-[#4C32ED] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <IoStar className="text-blue h-1/2 w-1/2 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
