"use client";

import React from "react";
import Image from "next/image";
import { HomeImage } from "@/assets/png";

const HomePage = () => {
  return (
    <div className="relative px-4 xl:px-[110px] mt-28">
      <div className="hidden xl:block absolute top-0 right-0 xl:w-[500px] w-full h-[1500px] bg-yellow-500 -z-10"></div>
      {/* Bagian atas */}
      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
        <div>
          <p className="text-[#2E266F] xl:text-7xl font-semibold">
            Discover Recipe
            <br />& Delicious Food
          </p>
        </div>
        <div className="relative">
          <Image
            src={HomeImage}
            width={700}
            height={700}
            alt="home-image"
            className="object-cover"
          />
        </div>
      </div>

      {/* Bagian bawah */}
      <div className="mt-16">
        <p className="text-black text-xl font-semibold">Popular For You</p>
      </div>
    </div>
  );
};

export default HomePage;
