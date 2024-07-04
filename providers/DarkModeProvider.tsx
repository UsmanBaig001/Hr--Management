"use client";

import React, { useEffect } from "react";
import useColorMode from "@/hooks/useColorMode";

const DarkModeProvider = () => {
  const [colorMode] = useColorMode();

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", colorMode === "dark");
    }
  }, [colorMode]);

  return null;
};

export default DarkModeProvider;
