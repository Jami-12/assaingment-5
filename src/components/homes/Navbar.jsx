import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import Container from "../global/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const location = useLocation();
  useEffect(() => {
    const current = links.find((link) => link.path === location.pathname);
    if (current) {
      setActive(current.name);
    }
  }, [location]);

  // Apply dark mode to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Task", path: "/task" },
    { name: "Completed", path: "/completed" },
    { name: "About", path: "/about" },
  ];

  return (
    <section className="bg-gray-300 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Container>
        <nav className="px-1 py-3 sticky top-0 z-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-xl">
              Student Task Management
            </div>
            <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`cursor-pointer transition ${
                      active === link.name
                        ? "text-cyan-700 dark:text-cyan-400 font-semibold"
                        : "hover:text-cyan-700 dark:hover:text-cyan-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              {/* Dark/Light Toggle Button */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="flex flex-col mt-4 gap-4 md:hidden text-sm font-medium bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`cursor-pointer transition ${
                      active === link.name
                        ? "text-cyan-700 dark:text-cyan-400 font-semibold"
                        : "hover:text-cyan-700 dark:hover:text-cyan-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className="flex items-center bg-white dark:bg-gray-700 rounded-md px-2 border border-gray-300 dark:border-gray-600">
               
              </div>
            </ul>
          )}
        </nav>
      </Container>
    </section>
  );
}
