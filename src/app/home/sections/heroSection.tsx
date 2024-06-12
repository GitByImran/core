import React from "react";

const HeroSection = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:py-0 py-10 space-y-4">
      <div className="flex flex-col items-center md:items-start place-content-center gap-8 order-2 md:order-1">
        <h2 className="text-5xl md:text-7xl md:text-start text-center font-extrabold text-purple-600">
          We are developers
        </h2>
        <p className="text-xl max-w-3xl md:text-start text-center font-light text-accent-foreground">
          We provide data to enrich your online business. Our services help you
          to achieve more and grow faster.
        </p>
        <button className="bg-purple-600 text-white text-base capitalize px-4 py-2 rounded-lg">
          Explore More
        </button>
      </div>
      <div className="w-full h-full order-1 md:order-2">
        <img src="/hero-bg.png" alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default HeroSection;
