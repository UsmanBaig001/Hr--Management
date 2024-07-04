"use client";
import Image from "next/image";
import useDropDown from "./useDropDown";
import { iconArrowDown, profilePhoto } from "@/constants/Images";
import { signOut } from "next-auth/react";

const DropDown = () => {
  const { toggleDropdown, isOpen } = useDropDown();

  return (
    <div className="relative">
      <button
        className="flex items-center pe-[5px] justify-between h-[50px] ms-5 w-[184px] rounded border-borderGrey border-[1px] focus:outline-none"
        onClick={toggleDropdown}
      >
        <div className="flex ms-[5px]">
          <Image src={profilePhoto} alt="Profile pic" />
          <div className="flex flex-col items-start ms-[5px]">
            <div className="text-[16px] font-semibold ">Lucifer</div>
            <div className="text-[12px] text-customGrey ">Hr Manager</div>
          </div>
        </div>
        <Image
          src={iconArrowDown}
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } ease-in-out duration-500 `}
          alt="Arrow Down"
        />
      </button>
      {isOpen && (
        <div className="absolute right-[-20px] mt-2 w-[184px] border-borderGrey border-[1px] bg-customDark rounded shadow-lg">
          <ul className="bg-primaryBlack">
            <li className="px-4 py-2 hover:bg-customOrange">About</li>
            <li className="px-4 py-2 hover:bg-customOrange">Profile Info</li>
            <div className="border-borderGrey border-[1px]"></div>
            <li className="px-4 py-3 hover:bg-customOrange">
              <button onClick={() => signOut()}>Sign out</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
