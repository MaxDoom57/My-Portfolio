// src/Components/Themebtn.jsx
import React from "react";
import { useTheme } from "../ThemeContext"; // Make sure the path is correct

const Themebtn = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      className="absolute w-8 h-8 mt-3 text-white rounded-full right-16 bg-neutral-600 dark:bg-white dark:text-black"
      onClick={toggleTheme}
    >
      <i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
    </button>
  );
};

export default Themebtn;
