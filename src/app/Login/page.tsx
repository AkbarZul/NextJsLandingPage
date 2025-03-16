"use client";

import React, { useState, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { LoginImage, Logo } from "@/assets/png";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import TextField from "@/components/ReactHookFormField/TextField";
import schema, { FormValues } from "./schema";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { control } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 min-h-screen xl:justify-items-center">
      <div className="relative flex items-center w-full">
        {/* Background Kuning */}
        <div className="hidden xl:block absolute inset-0 w-full bg-yellow-500 -z-10"></div>

        {/* Gambar Login dengan Logo */}
        <div className="relative w-full">
          <Image
            src={LoginImage}
            width={900}
            alt="Login background image"
            className="object-cover w-full"
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

      {/* Form Login */}
      <div className="flex flex-col justify-center items-center max-w-xl w-full">
        <p className="text-[#EFC81A] text-3xl font-bold mb-8">Welcome</p>
        <p className="text-[#8692A6] text-lg">
          Log in into your existing account
        </p>

        <TextField
          control={control}
          name="email"
          className="my-8 w-full"
          placeholder="E-mail"
        />
        <TextField
          control={control}
          name="password"
          className="mt-2 w-full"
          placeholder="Password"
        />

        <div className="flex w-full">
          <Checkbox
            label="I agree to terms & conditions"
            checked={checked}
            onChange={handleChecked}
            className="my-8"
          />
        </div>

        <Button
          type="submit"
          variant="default"
          theme="primary"
          width="full"
          className="hover:cursor-pointer h-16 rounded-lg"
          size="lg"
          disabled={!checked}
        >
          Login
        </Button>
        <div className="flex w-full justify-end">
          <p className="text-[#999999] text-xs font-bold mt-4">
            Forgot Password ?
          </p>
        </div>

        <p className="text-[#999999] text-sm font-semibold mt-8">
          Don’t have an account? <span className="text-[#EFC81A]">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
