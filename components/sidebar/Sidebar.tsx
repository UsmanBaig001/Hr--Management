"use client";
import React from "react";
import Image from "next/image";
import { iconLogo, iconMenu } from "@/constants/Images";
import Link from "next/link";
import { SIDE_BAR_LINKS } from "@/constants/SideBarLinks";
import { usePathname } from "next/navigation";
import ModeSwitcher from "../modeSwitcher/ModeSwitcher";
const Sidebar = ({
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();
  return (
    <div
      className={`fixed xl:relative min-h-screen flex z-[100] bg-primaryBlack`}
    >
      <div
        className={`bg-greyShade flex duration-300 ease-in-out transition-all flex-col justify-between  ${
          isSideBarOpen
            ? "translate-x-0 w-[280px] m-5 px-[30px] pt-[37px]"
            : "-translate-x-80 w-0"
        } rounded-[20px]`}
      >
        <div className={`flex flex-col `}>
          <div className="flex justify-between">
            <Image src={iconLogo} alt="Logo" />
            <button
              className="flex xl:hidden"
              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            >
              <Image src={iconMenu} className={`mt-2 h-8`} alt="Menu" />
            </button>
          </div>
          <div className="mt-[35px] flex flex-col">
            {SIDE_BAR_LINKS.map((link, i: number) => {
              const isActive =
                i === 0 ? pathname === link.path : pathname.includes(link.path);
              return (
                <Link href={`${link.path}`} key={i}>
                  <div
                    className={`${
                      isActive
                        ? "border-l-[3px] border-customOrange text-customOrange bg-orangeShade"
                        : ""
                    } h-[50px] my-[5px] flex`}
                  >
                    <Image
                      src={link.icon}
                      alt={link.alt}
                      className="my-auto ms-4 me-4"
                    />
                    <div className="my-auto">{link.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <ModeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
