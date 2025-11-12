import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import JugadorModal from "../components/JugadorModal";

export default function Info51() {

  const [modalJugador, setModalJugador] = useState(null);


  const posiciones = [
    { id: "Rotacion1", nombre: "Rotación 1", gif: "/images/gifs/5-1/Rotacion-1.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-1.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-1.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-1.jpg" },
    { id: "Rotacion2", nombre: "Rotación 2", gif: "/images/gifs/5-1/Rotacion-2.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-2.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-2.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-2.jpg" },
    { id: "Rotacion3", nombre: "Rotación 3", gif: "/images/gifs/5-1/Rotacion-3.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-3.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-3.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-3.jpg" },
    { id: "Rotacion4", nombre: "Rotación 4", gif: "/images/gifs/5-1/Rotacion-4.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-4.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-4.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-4.jpg" },
    { id: "Rotacion5", nombre: "Rotación 5", gif: "/images/gifs/5-1/Rotacion-5.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-5.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-5.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-5.jpg" },
    { id: "Rotacion6", nombre: "Rotación 6", gif: "/images/gifs/5-1/Rotacion-6.gif", inicio: "/images/screenshots/5-1/estatico/Rotacion-6.jpg", fin: "/images/screenshots/5-1/movidos/Rotacion-6.jpg", statica: "/images/screenshots/5-1/movidos/Rotacion-6.jpg" }
  ];

  // === NUEVO ===
  const jugadores = [
    { id: "colocador", nombre: "Colocador", letra: "S", imagen: "/images/screenshots/5-1/players/Colocador.png" },
    { id: "opuesto", nombre: "Opuesto", letra: "O", imagen: "/images/screenshots/5-1/players/Opuesto.png" },
    { id: "central1", nombre: "Central Lejano", letra: "C1", imagen: "/images/screenshots/5-1/players/Central lejano.png" },
    { id: "central2", nombre: "Central Cercano", letra: "C2", imagen: "/images/screenshots/5-1/players/Central cercano.png" },
    { id: "receptor1", nombre: "Receptor Lejano", letra: "R1", imagen: "/images/screenshots/5-1/players/Receptor lejano.png" },
    { id: "receptor2", nombre: "Receptor Cercano", letra: "R2", imagen: "/images/screenshots/5-1/players/Receptor cercano.png" },
    { id: "libero", nombre: "Líbero", letra: "L", imagen: "/images/screenshots/5-1/players/Libero.png" },
  ];

  const [playing, setPlaying] = useState({});
  const [showButton, setShowButton] = useState(false);
  const togglePlay = (id) => setPlaying((prev) => ({ ...prev, [id]: !prev[id] }));

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={window.location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="p-6 min-h-screen scroll-smooth transition-colors duration-500 bg-orange-200 text-gray-800 relative"
      >

        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          SISTEMA 5–1 EN VOLEIBOL
        </h2>

        <p className="text-center mb-10 max-w-3xl mx-auto text-lg text-gray-800">
          Aprende cómo se distribuyen los <strong>7 jugadores</strong> en el sistema 5–1, 
          sus posiciones base y las rotaciones según la ubicación del colocador.
        </p>

        {/* === ÍNDICE === */}
        <div className="rounded-xl shadow-md p-4 mb-10 border bg-gray-200 border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">📘 Índice</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#jugadores" className="px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-300 font-semibold">Roles</a>
            <a href="#posiciones-base" className="px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-300 font-semibold">Posiciones base</a>
            {posiciones.map((pos) => (
              <a key={pos.id} href={`#${pos.id}`} className="px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-300 font-semibold">
                {pos.nombre}
              </a>
            ))}
          </div>
        </div>

        {/* === NUEVO BLOQUE: JUGADORES CON CARDS === */}
        <section id="jugadores" className="rounded-2xl shadow-lg p-10 border bg-gray-100 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 underline">Roles</h3>

          {/* Primera fila: 4 jugadores */}
          <div className="flex flex-wrap justify-center">
            {jugadores.slice(0, 4).map((jug) => (
              <motion.div
                key={jug.nombre}
                className="group w-[180px] h-[180px] relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 cursor-pointer"
                style={{ margin: "8px" }}
                whileHover={{
                  scale: 1.08,
                }}
                onClick={() => setModalJugador(jug)}
              >
                <img
                  src={jug.imagen}
                  alt={jug.nombre}
                  className="w-[150px] h-[150px] object-cover mx-auto mt-2"
                />

                {/* Overlay inferior con nombre */}
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 text-center">
                  <h4 className="text-md font-semibold truncate">{jug.nombre}</h4>
                </div>

                {/* Overlay con tooltip visible en cualquier parte del card */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full shadow-md"
                  >
                    🔍 Haz clic para info
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Segunda fila: 3 jugadores */}
          <div className="flex justify-center flex-wrap mt-6">
            {jugadores.slice(4).map((jug) => (
              <motion.div
                key={jug.nombre}
                className="group w-[180px] h-[180px] relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 cursor-pointer"
                style={{ margin: "8px" }}
                whileHover={{
                  scale: 1.08,
                }}
                onClick={() => setModalJugador(jug)}
              >
                <img
                  src={jug.imagen}
                  alt={jug.nombre}
                  className="w-[150px] h-[150px] object-cover mx-auto mt-2"
                />

                {/* Overlay inferior con nombre */}
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 text-center">
                  <h4 className="text-md font-semibold truncate">{jug.nombre}</h4>
                </div>

                {/* Overlay con tooltip visible en cualquier parte del card */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full shadow-md"
                  >
                    🔍 Haz clic para info
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        <JugadorModal
          jugador={modalJugador}
          isOpen={!!modalJugador}
          onClose={() => setModalJugador(null)}
        />




        {/* === NUEVO BLOQUE: POSICIONES BASE === */}
        <section id="posiciones-base" className="rounded-2xl shadow-lg p-6 border bg-gray-100 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 underline">Posiciones Base según el Colocador</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center">
              <img src="/images/screenshots/5-1/campo_5-1_base_2.jpg" alt="Colocador delantero" className="rounded-xl shadow-md w-[400px]" />
              <p className="mt-3 text-gray-700 font-medium">Colocador delante de la línea de zaguero</p>
            </div>
            <div className="text-center">
              <img src="/images/screenshots/5-1/campo_5-1_base.jpg" alt="Colocador zaguero" className="rounded-xl shadow-md w-[400px]" />
              <p className="mt-3 text-gray-700 font-medium">Colocador detrás de la línea de zaguero</p>
            </div>
          </div>
        </section>

       {/* === ROTACIONES === */}
        <div className="space-y-16">
          {posiciones.map((pos, i) => (
            <motion.div
              id={pos.id}
              key={pos.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-lg p-6 border bg-gray-100"
            >
              <h3 className="text-2xl underline font-bold text-gray-700 mb-6 text-center">{pos.nombre}</h3>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Imagen de inicio con etiqueta azul */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={pos.inicio}
                      alt={`Inicio ${pos.nombre}`}
                      className="rounded-xl shadow-md w-[400px]"
                    />
                    <span className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                      Inicio
                    </span>
                  </div>
                </div>

                {/* GIF clicable con texto inferior */}
                <div
                  onClick={() => togglePlay(pos.id)}
                  className="relative rounded-xl p-3 cursor-pointer transform hover:scale-105 transition-transform duration-300 flex justify-center items-center bg-gray-900"
                >
                  <img
                    src={playing[pos.id] ? pos.gif : pos.statica}
                    alt={`Transición ${pos.nombre}`}
                    className="w-[400px] rounded-lg object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                    {playing[pos.id] ? "Pausar" : "Reproducir"}
                  </div>
                </div>

                {/* Imagen final con etiqueta verde */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={pos.fin}
                      alt={`Final ${pos.nombre}`}
                      className="rounded-xl shadow-md w-[400px]"
                    />
                    <span className="absolute bottom-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                      Final
                    </span>
                  </div>
                </div>
              </div>

              {/* Texto explicativo debajo del GIF */}
              <p className="text-center mt-4 text-gray-500 text-lg italic">
                {playing[pos.id]
                  ? "Haz clic en el GIF para pausar la animación."
                  : "Haz clic en el GIF para ver la transición."}
              </p>
            </motion.div>
          ))}
        </div>


        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-16 h-16 bg-orange-500 text-white rounded-full shadow-xl hover:bg-orange-600 transition-all flex items-center justify-center"
            title="Volver arriba"
          >
            <ChevronUp size={36} strokeWidth={3} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
