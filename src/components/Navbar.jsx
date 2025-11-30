import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Ocultar navbar al hacer scroll
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
    <>
      {/* NAVBAR PRINCIPAL */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b shadow-sm transition-all duration-500 bg-white/70 border-gray-200 text-gray-800 ${
          hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="relative flex items-center justify-center px-8 py-4 max-w-7xl mx-auto">

          {/* TITULO IZQUIERDA */}
          <div className="absolute left-6 md:left-8">
            <h1 className="text-lg font-bold text-gray-700">
              Entrena Voleibol
            </h1>
          </div>

          {/* ENLACES CENTRADOS (DESKTOP) */}
          <div className="hidden md:flex gap-10 text-base font-medium">
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

            {/* Info */}
            <div
              className="relative"
              onMouseEnter={() => setIsInfoOpen(true)}
              onMouseLeave={() => setIsInfoOpen(false)}
            >
              <span
                className={`cursor-pointer transition-colors hover:text-orange-500 ${
                  isInfoOpen ? "text-orange-500 font-semibold" : "text-gray-700"
                }`}
              >
                Info ▾
              </span>

              <AnimatePresence>
                {isInfoOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1 w-40 bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl py-2 z-50"
                  >
                    <NavLink
                      to="/info"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-orange-100 transition-colors ${
                          isActive
                            ? "text-orange-500 font-semibold"
                            : "text-gray-700"
                        }`
                      }
                    >
                      Básico
                    </NavLink>
                    <NavLink
                      to="/info5_1"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-orange-100 transition-colors ${
                          isActive
                            ? "text-orange-500 font-semibold"
                            : "text-gray-700"
                        }`
                      }
                    >
                      5-1
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quiz */}
            <div
              className="relative"
              onMouseEnter={() => setIsQuizOpen(true)}
              onMouseLeave={() => setIsQuizOpen(false)}
            >
              <span
                className={`cursor-pointer transition-colors hover:text-orange-500 ${
                  isQuizOpen ? "text-orange-500 font-semibold" : "text-gray-700"
                }`}
              >
                Quiz ▾
              </span>

              <AnimatePresence>
                {isQuizOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1 w-40 bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl py-2 z-50"
                  >
                    <NavLink
                      to="/quizBasic"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-orange-100 transition-colors ${
                          isActive
                            ? "text-orange-500 font-semibold"
                            : "text-gray-700"
                        }`
                      }
                    >
                      Básico
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden absolute right-6 text-gray-700 hover:text-orange-500 transition"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* ===================================================== */}
      {/* === OVERLAY PARA CERRAR AL CLIC FUERA (MÓVIL) === */}
      {/* ===================================================== */}

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* ===================================================== */}
      {/* === MENÚ MÓVIL DESLIZABLE === */}
      {/* ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl border-l z-50 p-6 flex flex-col gap-4 text-lg"
            onClick={(e) => e.stopPropagation()} // evita cerrar al tocar dentro
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end text-gray-700 mb-4"
            >
              <X size={26} />
            </button>

            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Home
            </NavLink>

            <details>
              <summary className="cursor-pointer text-gray-700 hover:text-orange-500">
                Info
              </summary>
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <NavLink
                  to="/info"
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-600 hover:text-orange-500"
                >
                  Básico
                </NavLink>
                <NavLink
                  to="/info5_1"
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-600 hover:text-orange-500"
                >
                  5-1
                </NavLink>
              </div>
            </details>

            <details>
              <summary className="cursor-pointer text-gray-700 hover:text-orange-500">
                Quiz
              </summary>
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <NavLink
                  to="/quizBasic"
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-600 hover:text-orange-500"
                >
                  Básico
                </NavLink>
              </div>
            </details>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
