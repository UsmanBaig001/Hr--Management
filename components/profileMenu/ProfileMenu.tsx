import {
  iconCalender,
  iconCalenderFilled,
  iconFile,
  iconFileFilled,
  iconNotepad,
  iconNotepadFilled,
  iconUser,
  iconUserFilled,
} from "@/constants/Images";
import Image from "next/image";
import React from "react";

const ProfileMenu = ({
  menuOption,
  handleMenuClick,
}: {
  menuOption: number;
  handleMenuClick: (num: number) => void;
}) => {
  return (
    <div className="border-[1px] rounded-[10px] max-h-56 min-w-[242px] border-borderGrey">
      <button
        onClick={() => handleMenuClick(0)}
        className={`flex ${
          menuOption === 0 ? "bg-customOrange" : ""
        } rounded-t-[10px] px-5 py-4 w-full`}
      >
        <Image src={menuOption === 0 ? iconUserFilled : iconUser} alt="" />
        <div className="ms-[10px]">Profile</div>
      </button>
      <button
        onClick={() => handleMenuClick(1)}
        className={`flex ${
          menuOption === 1 ? "bg-customOrange" : ""
        }  w-full px-5 py-4`}
      >
        <Image
          src={menuOption === 1 ? iconCalenderFilled : iconCalender}
          alt=""
        />
        <div className="ms-[10px]">Attendance</div>
      </button>
      <button
        onClick={() => handleMenuClick(2)}
        className={`flex ${
          menuOption === 2 ? "bg-customOrange" : ""
        } w-full  px-5 py-4`}
      >
        <Image src={menuOption === 2 ? iconFileFilled : iconFile} alt="" />
        <div className="ms-[10px]">Projects</div>
      </button>
      <button
        onClick={() => handleMenuClick(3)}
        className={`flex ${
          menuOption === 3 ? "bg-customOrange" : ""
        }  rounded-b-[10px]  w-full  px-5 py-4`}
      >
        <Image
          src={menuOption === 3 ? iconNotepadFilled : iconNotepad}
          alt=""
        />
        <div className="ms-[10px]">Leaves</div>
      </button>
    </div>
  );
};

export default ProfileMenu;
