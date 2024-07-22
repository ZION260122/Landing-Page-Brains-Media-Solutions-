import { FaSun, FaMoon } from "react-icons/fa";
import "./Theme.css";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  },[]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="togglebutton">
      {theme === 'dark' ? <FaSun size={"1.5rem"} /> : <FaMoon size={"1.5rem"} />}
    </button>
  );
};

export default ThemeToggle;
