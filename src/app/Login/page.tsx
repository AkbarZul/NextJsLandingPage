"use client";

import React from "react";
import Image from "next/image";
import { LoginImage, Logo } from "@/assets/png";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 min-h-screen">
      <div className="relative flex items-center">
        {/* Background Kuning */}
        <div className="hidden xl:block absolute inset-0 w-[900px] bg-yellow-500 -z-10"></div>

        {/* Gambar Login dengan Logo */}
        <div className="relative">
          <Image
            src={LoginImage}
            width={900}
            alt="Login background image"
            className="object-cover"
          />
          <Image
            src={Logo}
            alt="Application Logo"
            width={150}
            height={150}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>

      {/* Bagian Kanan (Form Login) */}
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-[#EFC81A] text-3xl font-bold mb-8">Welcome</p>
        <p className="text-[#8692A6] text-lg">
          Log in into your existing account
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
