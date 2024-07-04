"use client";
import { iconSearch } from "@/constants/Images";
import { SEARCH_BAR_PROPS } from "@/types/types";
import Image from "next/image";
import React from "react";

const SearchBar = ({ width, searchText, setSearchText }: SEARCH_BAR_PROPS) => {
  return (
    <div
      className={`lg:flex hidden   w-[${width}px] border-lightGreyShade border-[1px] rounded-[10px] px-[16px] py-[13px]`}
    >
      <Image src={iconSearch} alt="iconSearch" />
      <input
        value={searchText}
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
        className="bg-transparent ms-[10px] focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
