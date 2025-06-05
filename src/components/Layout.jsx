import { Link, Outlet } from "react-router-dom";
import "./Layout.css"; // Import the CSS styles

export default function Layout() {
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
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}