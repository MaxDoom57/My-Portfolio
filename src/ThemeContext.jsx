// src/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// ThemeProvider component that wraps the entire app
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle the theme mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply the theme class to the HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
