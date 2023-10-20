"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

const DarkModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const handleDarkMode = (currentTheme: string | any) => {
    if (currentTheme === "light") {
      setTheme("dark");
    } else if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("system");
    }
  };

  return (
    <Switch
      checked={theme === "dark" ? true : false}
      onCheckedChange={() => handleDarkMode(theme)}
    />
  );
};

export default DarkModeToggle;
