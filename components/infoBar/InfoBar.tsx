import React from "react";
import Image from "next/image";
import {
  iconBriefcase,
  iconBriefcaseOrange,
  iconDocument,
  iconDocumentOrange,
  iconLock,
  iconLockOrange,
  iconUser,
  iconUserOrange,
} from "@/constants/Images";
import { INFO_BAR_PROPS } from "@/types/types";

const InfoBar = ({ option, handleClick }: INFO_BAR_PROPS) => {
  return (
    <div className="border-b-[3px] flex flex-wrap ms-[10px] border-borderGrey mb-5">
      <button
        onClick={() => handleClick(0)}
        className={`mb-[-3px] pb-2 ease-in-out duration-300 font-semibold ${
          option === 0
            ? "text-customOrange border-customOrange"
            : "text-white border-borderGrey"
        } text-customOrange text-[16px] flex border-b-[3px] px-[10px]`}
      >
        <Image
          className="me-[10px]"
          src={option === 0 ? iconUserOrange : iconUser}
          height={24}
          width={24}
          alt=""
        />
        Personal Information
      </button>
      <button
        onClick={() => handleClick(1)}
        className={`mb-[-3px] pb-2 ease-in-out duration-300 font-semibold ${
          option === 1
            ? "text-customOrange border-customOrange"
            : "text-white border-borderGrey"
        } text-customOrange text-[16px] flex border-b-[3px] px-[10px]`}
      >
        <Image
          className="me-[10px]"
          src={option === 1 ? iconBriefcaseOrange : iconBriefcase}
          height={24}
          width={24}
          alt=""
        />
        Professional Information
      </button>
      <button
        onClick={() => handleClick(2)}
        className={`mb-[-3px] pb-2 ease-in-out duration-300 font-semibold ${
          option === 2
            ? "text-customOrange border-customOrange"
            : "text-white border-borderGrey"
        } text-customOrange text-[16px] flex border-b-[3px] px-[10px]`}
      >
        <Image
          className="me-[10px]"
          src={option === 2 ? iconDocumentOrange : iconDocument}
          height={24}
          width={24}
          alt=""
        />
        Documents
      </button>

      <button
        onClick={() => handleClick(3)}
        className={`mb-[-3px] pb-2 ease-in-out duration-300 font-semibold ${
          option === 3
            ? "text-customOrange border-customOrange"
            : "text-white border-borderGrey"
        } text-customOrange text-[16px] flex border-b-[3px] px-[10px]`}
      >
        <Image
          className="me-[10px]"
          src={option === 3 ? iconLockOrange : iconLock}
          height={24}
          width={24}
          alt=""
        />
        Account Access
      </button>
    </div>
  );
};

export default InfoBar;
