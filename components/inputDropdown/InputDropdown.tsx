"use client";
import Image from "next/image";
import { iconArrowDown } from "@/constants/Images";
import useInputDropdown from "./useInputDropdown";
import { INPUT_DROPDOWN_PROPS } from "@/types/types";

const InputDropdown = ({ label, options, onChange }: INPUT_DROPDOWN_PROPS) => {
  const { toggleDropdown, isOpen, handleOptionSelect } = useInputDropdown({
    label,
    options,
    onChange,
  });

  return (
    <div className="relative w-full p-[10px] rounded-[10px]">
      <button
        className="flex p-4 items-center min-h-14 pe-[5px] justify-between rounded-[10px] h-[50px] w-full border-borderGrey border-[1px] focus:outline-none"
        onClick={toggleDropdown}
      >
        <div className="flex">
          <div className="flex flex-col items-start ms-[5px]">
            <div className=" text-customGrey text-[16px]">{label}</div>
          </div>
        </div>
        <Image
          src={iconArrowDown}
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } ease-in-out duration-500 me-2`}
          alt="Arrow Down"
        />
      </button>
      {isOpen && (
        <div className="absolute right-[10px] mt-2 w-[96%] z-20  border-borderGrey border-[1px] rounded shadow-lg">
          <ul className="bg-primaryBlack">
            {options.map((option, index) => {
              return (
                <li
                  key={index}
                  className="px-4 py-2 bg-primaryBlack hover:bg-customOrange"
                  onClick={() => handleOptionSelect(option.value)}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputDropdown;
