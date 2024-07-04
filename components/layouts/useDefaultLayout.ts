"use client";
import { useState } from "react";

const useDefaultLayout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return { isSideBarOpen, setIsSideBarOpen };
};

export default useDefaultLayout;
