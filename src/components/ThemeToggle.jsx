import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed max-sm:hidden top-5 right-5 z-50 
        p-3 rounded-full transition-all duration-300 
        ${isDarkMode 
          ? "bg-slate-800 hover:bg-slate-700" 
          : "bg-white hover:bg-gray-100"
        }
        shadow-lg hover:shadow-xl transform hover:scale-110
        focus:outline-none
      `}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun 
          className="h-5 w-5 text-yellow-300" 
          strokeWidth={isHovered ? 2.5 : 2}
        />
      ) : (
        <Moon 
          className="h-5 w-5 text-blue-700" 
          strokeWidth={isHovered ? 2.5 : 2}
        />
      )}
    </button>
  );
};

export default ThemeToggle;