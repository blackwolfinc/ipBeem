import React from "react";
import { BiChevronRight } from "react-icons/bi";

const SolutionsItemSecondary = () => {
  return (
    <div className="group relative min-h-[210px] cursor-pointer">
      <div className="flex h-full items-center justify-center overflow-hidden rounded-xl bg-[#121726] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="flex h-fit items-center gap-2 p-6 transition-all duration-300 group-hover:scale-105">
          <span className="uppercase text-white">See Out Solutions</span>
          <div className="flex aspect-square h-full items-center justify-center rounded-full bg-white text-black">
            <BiChevronRight />
          </div>
        </div>
      </div>
      <div className="absolute -top-4 right-10">
        <div className="absolute left-0.5 aspect-[2/5] h-8 rounded-lg bg-white/60"></div>
        <div className="absolute right-0.5 aspect-[2/5] h-8 rounded-lg bg-white/60"></div>
      </div>
    </div>
  );
};

export default SolutionsItemSecondary;
