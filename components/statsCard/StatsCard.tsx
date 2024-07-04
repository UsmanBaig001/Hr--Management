import React from "react";
import Image from "next/image";
import { STATS_CARD_TYPES } from "@/types/types";

const StatsCard = ({
  icon,
  src,
  amount,
  heading,
  date,
  percent,
  BgColor,
  textColor,
  iconAlt,
  srcAlt,
}: STATS_CARD_TYPES) => {
  return (
    <div className="ms-[10px] mt-[20px] w-[510px] h-[154px] rounded-[10px] border-borderGrey border-[1px]">
      <div className="flex mt-4 ps-[26px] items-center mb-[10px]">
        <div className="bg-orangeShade w-[65px] h-[40px] flex rounded-[5px] items-center justify-center ">
          <Image src={icon} alt={iconAlt} />
        </div>
        <div className="ms-[16px]">{heading}</div>
      </div>
      <div className="flex ps-[26px] justify-between items-center mb-[10px]">
        <div className="text-[30px] font-semibold">{amount}</div>
        <div
          style={{ backgroundColor: BgColor, color: textColor }}
          className={`me-[60px] w-[54px]  h-[26px] text-[11px] items-center flex justify-center rounded-[5px]`}
        >
          <Image src={src} alt={srcAlt} className="w-[18px] h-[18px]" />
          {percent}%
        </div>
      </div>
      <div className="flex font-light text-[12px] ps-[26px] border-t-[1px] border-borderGrey py-[5px]">
        Update: {date}
      </div>
    </div>
  );
};

export default StatsCard;
