import React from "react";
import Image from "next/image";
import { iconArrow, iconBell, iconMenu } from "@/constants/Images";
import DropDown from "../dropDown/DropDown";
import SearchBar from "../searchBar/SearchBar";
import Link from "next/link";
import { LAYOUT_PROPS } from "@/types/types";

const Header = ({
  heading,
  description,
  isSideBarOpen,
  setIsSideBarOpen,
}: LAYOUT_PROPS) => {
  return (
    <div className="h-[82px] pb-[10px] my-[15px] bg-primaryBlack sticky top-0 z-[99] flex items-center justify-between pe-[50px] ms-[10px]">
      <div className="flex ">
        {!isSideBarOpen ? (
          <button
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            className=" w-auto ms-2 me-5"
          >
            <Image src={iconMenu} alt="Arrow" className="h-14" />
          </button>
        ) : (
          <></>
        )}
        <div className="flex flex-col">
          <div className="text-[20px]">{heading}</div>
          <div className="text-[14px] text-customGrey">{description}</div>
        </div>
      </div>
      <div className="flex">
        <SearchBar searchText={""} setSearchText={() => {}} width={261} />
        <Link
          href={"/notifications"}
          className="bg-lightGreyShade ms-5 w-[50px] h-[50px] flex items-center rounded-[10px] justify-center"
        >
          <Image src={iconBell} className="h-6 w-6" alt="IconBell" />
        </Link>

        <div className="w-[184px]">
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
