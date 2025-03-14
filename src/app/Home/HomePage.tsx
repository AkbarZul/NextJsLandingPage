"use client";

import React from "react";
import Image from "next/image";
import { HomeImage, NewRecipeImage, PopularImage } from "@/assets/png";
import Title from "@/components/Title";

const HomePage = () => {
  return (
    <div className="relative px-4 xl:px-[110px] mt-28">
      <div className="hidden xl:block absolute top-0 -mt-[300px] right-0 xl:w-[500px] w-full h-[1200px] bg-yellow-500 -z-10"></div>
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

      <Title title="Popular For You!" />
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="relative flex items-center pb-16">
          <div className="absolute -z-10 border border-yellow-500 rounded-xl w-[550px] h-[700px] translate-x-50 translate-y-10"></div>
          <Image
            src={PopularImage}
            width={700}
            height={700}
            alt="Popular dish"
            className="object-cover rounded-2xl"
          />
        </div>
        <div>
          <p className="text-[#3F3A3A] text-5xl font-semibold leading-snug">
            Healthy Bone Broth
            <br /> Ramen (Quick & Easy)
          </p>
          <p className="text-[#3F3A3A] text-2xl mt-8 leading-relaxed">
            Quick + Easy Chicken Bone Broth Ramen-
            <br /> Healthy chicken ramen in a hurry? That’s right!
          </p>
        </div>
      </div>

      <Title title="New Recipe" />
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between pb-16">
        <div className="relative flex items-center">
          <div className="absolute left-0 xl:-left-[300px] w-[514px] max-w-[514px] h-[720px] rounded-xl bg-yellow-500 -z-10"></div>

          {/* Gambar */}
          <Image
            src={NewRecipeImage}
            width={700}
            height={700}
            alt="New Recipe dish"
            className="object-cover rounded-2xl translate-y-15"
          />
        </div>
        <div>
          <p className="text-[#3F3A3A] text-5xl font-semibold leading-snug">
            Healthy Bone Broth
            <br /> Ramen (Quick & Easy)
          </p>
          <p className="text-[#3F3A3A] text-2xl mt-8 leading-relaxed">
            Quick + Easy Chicken Bone Broth Ramen-
            <br /> Healthy chicken ramen in a hurry? That’s right!
          </p>
        </div>
      </div>

      <Title title="Popular Recipe" />
    </div>
  );
};

export default HomePage;
