"use client";
import React from "react";
import Image from "next/image";
import useSelectMenu from "./useSelectMenu";
import { iconArrowDown } from "@/constants/Images";
import { INPUT_DROPDOWN_PROPS } from "@/types/types";

const SelectMenu = ({
  label,
  options,
  onChange,
  height,
  margin,
  initialValue,
  width,
}: INPUT_DROPDOWN_PROPS) => {
  const { handleOpen, open, handleSelectChange } = useSelectMenu({
    label,
    options,
    onChange,
  });
  return (
    <div
      className={`relative w-[98%]  ${width} ${height} ${
        margin ? "mx-[10px] mt-2.5" : ""
      } rounded-[10px] bg-primaryBlack border-[1px] border-borderGrey`}
    >
      <select
        onClick={handleOpen}
        onChange={handleSelectChange}
        id="countries"
        className="appearance-none h-full gap-3 w-full pl-4 pr-10 focus:outline-none border-none text-customGrey bg-primaryBlack  rounded-lg"
      >
        <option className="custom-option">
          {!initialValue ? label : initialValue}
        </option>

        {options.map((options, i) => {
          return (
            <option className="custom-option" value={options.value} key={i}>
              {options.label}
            </option>
          );
        })}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <Image
          src={iconArrowDown}
          className={`${
            open ? "rotate-180" : "rotate-0"
          } ease-in-out duration-500 me-2`}
          alt="Arrow Down"
        />
      </div>
    </div>
  );
};

export default SelectMenu;
