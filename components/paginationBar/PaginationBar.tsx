import React from "react";
import { iconArrow, iconArrowDown } from "@/constants/Images";
import Image from "next/image";

const PaginationBar = ({ length }: { length: number }) => {
  return (
    <div className="mt-[14px] hidden md:flex items center justify-between items-center">
      <div className="flex items-center">
        <div className="me-5">Showing</div>
        <div className=" flex items-center border-[1px] font-light rounded-[10px] border-borderGrey p-3">
          {length}
          <Image className="ms-4" src={iconArrowDown} alt="iconArrowDown" />
        </div>
      </div>
      <div className="text-[14px] font-light">
        Showing 1 to {length} out of {length} records
      </div>
      <div className="flex items-center">
        <button>
          <Image
            className="me-[10px]"
            src={iconArrow}
            height={24}
            width={24}
            alt="iconArrowLeft"
          />
        </button>
        <div className="flex">
          <button
            className={`px-3 border-[1px] py-[7px] text-customOrange border-customOrange rounded-lg mx-[5px]`}
          >
            1
          </button>
          {length >= 10 && (
            <button className={`px-3 py-[7px] mx-[5px]`}>2</button>
          )}
          {length >= 20 && (
            <button className={`px-3 py-[7px] mx-[5px]`}>3</button>
          )}
          {length >= 30 && (
            <button className={`px-3 py-[7px] mx-[5px]`}>4</button>
          )}
        </div>
        <button>
          <Image
            className="ms-[10px] rotate-180"
            src={iconArrow}
            height={24}
            width={24}
            alt="iconArrowRight"
          />
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;
