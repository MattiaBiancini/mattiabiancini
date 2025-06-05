import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

// Simple SVG icons
const SunIcon = () => (
  <svg width="24" height="24" fill="none" stroke="orange" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95-7.07l-1.41 1.41m-9.19 9.19l-1.41 1.41m13.44 0l-1.41-1.41m-9.19-9.19L4.05 4.93"/></svg>
);
const MoonIcon = () => (
  <svg width="24" height="24" fill="none" stroke="gold" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
);

export default function Layout() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/swimming">Swimming</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        <button className="theme-switcher" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}