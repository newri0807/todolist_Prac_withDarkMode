import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };
  const setTheme = (theme) => {
    window.document.documentElement.className = theme;
    localStorage.setItem("mode", theme);
  };

  const modeCheck = localStorage.getItem("mode");
  useEffect(() => {
    modeCheck === null ? setTheme(`light`) : setTheme(`${modeCheck}`);
    modeCheck === "light" ? setDarkMode(false) : setDarkMode(true);
  }, [modeCheck]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, setTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}
