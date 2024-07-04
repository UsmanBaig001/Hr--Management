import React from "react";
import Image from "next/image";
import Switch from "../switch/Switch";
import { iconArrowDown } from "@/constants/Images";
import { SETTING_OPTIONS_DATA } from "@/constants/SettingOptions";

const SettingOptions = () => {
  return (
    <div className="border-[1px] mx-[30px] px-5 border-borderGrey rounded-[10px] ">
      <div className="border-b-[1px] py-5 flex justify-between items-center border-borderGrey ">
        <div className="flex flex-col">
          <div className="text-[16px] font-semibold ">Appearance</div>
          <div className="text-fadedGrey text-[16px] font-light ">
            Customize how your theme looks on your device
          </div>
        </div>
        <div className="bg-lightBlack flex py-[9px] px-[10px] rounded-[10px] ">
          <div className="me-[10px] font-light text-[14px] ">Light</div>
          <Image src={iconArrowDown} alt="Arrow Down" />
        </div>
      </div>
      <div className="border-b-[1px] py-5 flex justify-between items-center border-borderGrey ">
        <div className="flex flex-col">
          <div className="text-[16px] font-semibold ">Language</div>
          <div className="text-fadedGrey text-[16px] font-light ">
            Select your language
          </div>
        </div>
        <div className="bg-lightBlack flex py-[9px] px-[10px] rounded-[10px] ">
          <div className="me-[10px] font-light text-[14px] ">English</div>
          <Image src={iconArrowDown} alt="Arrow Down" />
        </div>
      </div>
      {SETTING_OPTIONS_DATA.map((item, i: number) => {
        return (
          <div
            className={` ${
              i === SETTING_OPTIONS_DATA.length - 1 ? "" : "border-b-[1px]"
            }  py-5 flex justify-between items-center border-borderGrey `}
          >
            <div className="flex flex-col">
              <div className="text-[16px] font-semibold ">{item.title}</div>
              <div className="text-fadedGrey text-[16px] font-light ">
                {item.description}
              </div>
            </div>
            <Switch />
          </div>
        );
      })}
    </div>
  );
};

export default SettingOptions;
