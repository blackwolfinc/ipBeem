import React from "react";
import Hero from "./hero";
import Solutions from "./solutions";

export const Body = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div id="solutions" className="mb-40">
        <Solutions />
      </div>
    </div>
  );
};
