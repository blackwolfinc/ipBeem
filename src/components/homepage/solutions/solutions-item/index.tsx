import React from "react";

interface ISolutionsItemProps {
  title: string;
  description: string;
}

const SolutionsItem = (props: ISolutionsItemProps) => {
  const { title, description } = props;

  return (
    <div className="relative h-full min-h-[210px]">
      <div className="flex h-full flex-col overflow-hidden rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="hidden bg-gradient-to-r from-[#E698FA] to-[#D68FC7] p-6 text-white lg:block">
          <h6 className="text-xl font-bold">{title}</h6>
        </div>
        <div className="flex-1 bg-white p-6 text-xl">
          <p>
            <span className="lg:hidden">{title} - </span> {description}
          </p>
        </div>
      </div>
      <div className="absolute -top-4 right-10">
        <div className="absolute left-0.5 aspect-[2/5] h-8 rounded-lg bg-black/60"></div>
        <div className="absolute right-0.5 aspect-[2/5] h-8 rounded-lg bg-black/60"></div>
      </div>
    </div>
  );
};

export default SolutionsItem;
