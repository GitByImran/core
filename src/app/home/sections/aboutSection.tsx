"use client";

import { useRouter } from "next/navigation";
import React from "react";

const AboutSection = () => {
  const router = useRouter();
  return (
    <div className="container py-20 space-y-20">
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="text-5xl font-bold capitalize text-center">
          About Our Company
        </h2>
        <p className="text-base font-semibold text-secondary-foreground/50 max-w-2xl text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ipsum
          corrupti sequi beatae laboriosam adipisci consequuntur, labore omnis
          suscipit quia!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="h-full w-full rounded-2xl overflow-hidden">
          <img
            src="/about-img.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-8 place-content-center text-center sm:text-start">
          <h2 className="text-5xl font-bold capitalize text-purple-600 text-center sm:text-start">
            Discover Our Story
          </h2>
          <p className="text-base font-semibold text-secondary-foreground/50 text-center sm:text-start">
            At the heart of our company lies a passion for innovation and a
            commitment to excellence. We believe in empowering our clients
            through data-driven insights and cutting-edge technology, helping
            them navigate the complexities of the digital landscape and achieve
            their business goals.
          </p>
          <button
            onClick={() =>
              router.replace("https://www.youtube.com/watch?v=YykjpeuMNEk")
            }
            className="bg-purple-600 text-white text-base capitalize px-4 py-2 rounded-lg"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
