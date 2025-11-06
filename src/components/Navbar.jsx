import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detectar dirección del scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        // Scroll hacia abajo → ocultar
        setHidden(true);
      } else {
        // Scroll hacia arriba → mostrar
        setHidden(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b shadow-sm transition-all duration-500 bg-white/70 border-gray-200 text-gray-800 ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}  
    >
      <div className="relative flex items-center justify-center px-8 py-4 max-w-7xl mx-auto">
        {/* === IZQUIERDA: TÍTULO === */}
        <div className="absolute left-8">
          <h1 className="text-lg font-bold text-gray-700 dark:text-blue-400">
            Entrena Voleibol
          </h1>
        </div>

        {/* === CENTRO: LINKS === */}
        <div className="flex gap-8 text-base font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/info", label: "Info" },
            //{ to: "/quizBasic", label: "Quiz" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-orange-500 ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
}
