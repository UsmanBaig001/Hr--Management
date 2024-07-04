"use client";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import useDefaultLayout from "./useDefaultLayout";

export default function DefaultLayout({
  children,
  heading,
  description,
}: {
  children: React.ReactNode;
  heading: string;
  description: string;
}) {
  const { isSideBarOpen, setIsSideBarOpen } = useDefaultLayout();

  return (
    <div className="flex min-h-screen dark:bg-primaryBlack bg-greyShade text-white">
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <div className="flex flex-col  w-full">
        <Header
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          heading={heading}
          description={description}
        />
        <main>
          <div className={`min-h-100vh ${isSideBarOpen ? "" : "ms-5"} mb-5`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
