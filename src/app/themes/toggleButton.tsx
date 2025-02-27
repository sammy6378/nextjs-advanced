'use client'

import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import Button from "@mui/material/Button";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} className="bg-primary text-white dark:bg-white dark:text-black">
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
};

export default ThemeToggle;
