import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";

export default function Layout() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/swimming">Swimming</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        <button className="theme-switcher" onClick={toggleTheme} aria-label="Toggle theme">
          <img
            src={theme === "dark" ? moonIcon : sunIcon}
            alt={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="theme-switcher"
          />
        </button>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}