import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-blue-400" : "text-gray-300";

  return (
    <nav className="bg-gray-800 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <Link to="/" className="text-xl font-bold text-white">
          FlowAPI
        </Link>

        {/* Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <Link to="/" className={`${isActive("/")} hover:text-white transition`}>
            Home
          </Link>
          <Link to="/about" className={`${isActive("/about")} hover:text-white transition`}>
            About
          </Link>
          <Link to="/login" className={`${isActive("/login")} hover:text-white transition`}>
            Login
          </Link>
          <Link
            to="/register"
            className={`${isActive("/register")} hover:text-white transition`}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
