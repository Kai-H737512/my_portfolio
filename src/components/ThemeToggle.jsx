import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(!isDarkMode);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(!isDarkMode);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }
  
  return (
    <button onClick={toggleTheme} className={cn(
      "fixed max-sm:hidden top-5 right-5 z-50 p-2 rouunded-full transition-colors duration-300",
      "focus:outlin-hidden"
    )}>
      {isDarkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-300" /> 
      ) :( 
        <MoonIcon className="w-6 h-6 text-blue-900" />
      )}
    </button>
  );
};