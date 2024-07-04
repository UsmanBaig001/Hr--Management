"use client";
import { iconMoon, iconSun } from "@/constants/Images";
import useColorMode from "@/hooks/useColorMode";
import Image from "next/image";
import { useState } from "react";
const ModeSwitcher = () => {
  const [isActive, setIsActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className={` flex mb-[30px] mx-auto relative`}>
      <button
        className={`w-[220px] h-[50px] bg-lightGreyShade  rounded-[10px] flex items-center`}
        onClick={() => {
          if (typeof setColorMode === "function") {
            setColorMode(colorMode === "light" ? "dark" : "light");
            setIsActive(!isActive);
          }
        }}
      >
        <div className="z-50 w-[220px] flex justify-between">
          <div className="flex ms-[18px] items-center">
            <Image src={iconSun} height={24} width={24} alt="iconSun" />
            <div className="text-[16px] ms-[10px]">Light</div>
          </div>
          <div className="flex me-[18px] items-center">
            <Image src={iconMoon} height={24} width={24} alt="iconMoon" />
            <div className="text-[16px] ms-[10px]">Dark</div>
          </div>
        </div>
        <div
          className={`${
            isActive ? "translate-x-[110px]" : "translate-x-[0px]"
          } bg-customOrange absolute w-[110px] h-[50px] rounded-[10px] shadow-md transform duration-300`}
        ></div>
      </button>
    </div>
  );
};

export default ModeSwitcher;
