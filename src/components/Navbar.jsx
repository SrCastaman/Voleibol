import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Detectar dirección del scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b shadow-sm transition-all duration-500 bg-white/70 border-gray-200 text-gray-800 ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center px-8 py-4 max-w-7xl mx-auto">
        {/* === IZQUIERDA: TÍTULO === */}
        <div className="absolute left-8">
          <h1 className="text-lg font-bold text-gray-700 dark:text-blue-400">
            Entrena Voleibol
          </h1>
        </div>

        {/* === CENTRO: LINKS === */}
        <div className="flex gap-8 text-base font-medium relative">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors hover:text-orange-500 ${
                isActive ? "text-orange-500 font-semibold" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>

          {/* Info con desplegable */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span
              className={`cursor-pointer transition-colors hover:text-orange-500 ${
                isDropdownOpen ? "text-orange-500 font-semibold" : "text-gray-700"
              }`}
            >
              Info ▾
            </span>

            {/* Animación del desplegable */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-0.5 w-40 bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl py-2 z-50"
                >
                  <NavLink
                    to="/info"
                    className={({ isActive }) =>
                      `block px-4 py-2 hover:bg-orange-100 transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-700"
                      }`
                    }
                  >
                    Básico
                  </NavLink>
                  <NavLink
                    to="/info5_1"
                    className={({ isActive }) =>
                      `block px-4 py-2 hover:bg-orange-100 transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-700"
                      }`
                    }
                  >
                    5-1
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
