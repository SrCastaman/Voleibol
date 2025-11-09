import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Info_5_1() {
  const posiciones = [
    { id: "Rotacion1", nombre: "Rotación 1", gif: "/images/gifs/5-1/Rotacion-1.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-1.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-1.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-1.jpg" },
    { id: "Rotacion2", nombre: "Rotación 2", gif: "/images/gifs/5-1/Rotacion-2.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-2.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-2.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-2.jpg" },
    { id: "Rotacion3", nombre: "Rotación 3", gif: "/images/gifs/5-1/Rotacion-3.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-3.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-3.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-3.jpg" },
    { id: "Rotacion4", nombre: "Rotación 4", gif: "/images/gifs/5-1/Rotacion-4.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-4.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-4.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-4.jpg" },  
    { id: "Rotacion5", nombre: "Rotación 5", gif: "/images/gifs/5-1/Rotacion-5.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-5.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-5.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-5.jpg" },
    { id: "Rotacion6", nombre: "Rotación 6", gif: "/images/gifs/5-1/Rotacion-6.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-6.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-6.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-6.jpg" }    
  ];

  const [playing, setPlaying] = React.useState({});
  const [showButton, setShowButton] = useState(false);

  const togglePlay = (id) => setPlaying((prev) => ({ ...prev, [id]: !prev[id] }));

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={window.location.pathname} 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.3 }}
        className="p-6 min-h-screen scroll-smooth transition-colors duration-500 bg-orange-200 text-gray-800 relative"
        >

        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center tracking-tight">
          POSICIONES DEL VOLEIBOL
        </h2>

        <p className="text-center mb-10 max-w-3xl mx-auto text-lg text-gray-800 dark:text-gray-300">
          Aprende visualmente las <strong>posiciones básicas</strong> del voleibol
          y sus transiciones en diferentes fases del juego.  
          Usa el índice para ir directamente a cada posición. 
        </p>

        {/* Índice */}
        <div className="rounded-xl shadow-md p-4 mb-10 border transition-colors duration-300 bg-gray-200 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            📘 Índice de Posiciones
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {posiciones.map((pos) => (
              <a
                key={pos.id}
                href={`#${pos.id}`}
                className="text-sm md:text-base px-4 py-2 rounded-full font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-300"
              >
                {pos.nombre}
              </a>
            ))}
          </div>
        </div>

        {/* Contenido */}
        <div className="space-y-16">
          {posiciones.map((pos, i) => (
            <motion.div
              id={pos.id}
              key={pos.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-lg p-6 border transition-all duration-500 bg-gray-200 border-gray-200 hover:shadow-blue-100"
            >
              <h3 className="text-2xl underline font-bold text-gray-700 mb-6 text-center">
                {pos.nombre}
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Inicio */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={pos.inicio}
                      alt={`Inicio ${pos.nombre}`}
                      className="rounded-xl shadow-md w-[400px] h-auto object-contain"
                    />
                    <span className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                      Inicio
                    </span>
                  </div>
                </div>

                {/* GIF clicable */}
                <div
                  onClick={() => togglePlay(pos.id)}
                  className="relative rounded-xl p-3 cursor-pointer transform hover:scale-105 transition-transform duration-300 flex justify-center items-center bg-gray-900"
                >
                  <img
                    src={playing[pos.id] ? pos.gif : pos.statica}
                    alt={`Transición ${pos.nombre}`}
                    className="w-[400px] h-auto rounded-lg object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                    {playing[pos.id] ? "Pausar" : "Reproducir"}
                  </div>
                </div>

                {/* Final */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={`${pos.inicio}?v=${i}`}
                      alt={`Final ${pos.nombre}`}
                      className="rounded-xl shadow-md w-[400px] h-auto object-contain"
                    />
                    <span className="absolute bottom-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                      Final
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-center mt-4 text-gray-500 dark:text-gray-400 text-xl italic">
                {playing[pos.id]
                  ? "Haz clic en el GIF para pausar la animación."
                  : "Haz clic en el GIF para ver la transición."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Botón flotante volver arriba */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-16 h-16 bg-orange-500 text-white rounded-full shadow-xl 
                      hover:bg-orange-600 transition-all duration-300 flex items-center justify-center
                      text-4xl font-bold animate-bounce-slow"
            title="Volver arriba"
          >
            <ChevronUp size={36} strokeWidth={3}/>
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
