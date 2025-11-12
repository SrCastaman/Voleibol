import { AnimatePresence, motion } from "framer-motion";

export default function JugadorModal({ jugador, isOpen, onClose }) {
  if (!jugador) return null;

  const infoPorJugador = {
    colocador:
      "El colocador es el cerebro del equipo. Su trabajo es distribuir la pelota y decidir cuál atacante recibe el pase según la situación del juego. Puede estar en la primera línea (cerca de la red) o en la segunda línea, pero siempre su objetivo es crear las mejores opciones de ataque para su equipo.",
    opuesto:
      "El opuesto, llamado así porque está ubicado en la posición opuesta al colocador en la rotación, es un atacante potente que normalmente juega en la esquina derecha de la cancha. Su función principal es atacar, pero también ayuda en el bloqueo y puede participar en defensa si está en la segunda línea.",
    libero:
      "El líbero es un especialista defensivo que solo juega en la parte trasera de la cancha. Su tarea es recibir saques y defender ataques rivales. No puede atacar por encima de la red ni sacar, y siempre se distingue por un uniforme diferente para que los árbitros y compañeros lo identifiquen fácilmente.",
    receptor2:
      "El receptor cercano se encuentra al lado del colocador en las rotaciones. Se centra en recibir saques, ayudar en la defensa y realizar ataques.",
    receptor1:
      "El receptor lejano se encuentra más lejos del colocador, con una separación de dos posiciones en cada rotación. Se centra en recibir saques, ayudar en la defensa y realizar ataques.",
    central2:
      "El central cercano se encuentra al lado del colocador en las rotaciones. Su principal rol es realizar bloqueos en la defensa y también hacer ataques rápidos en la posición 3 del campo.",
    central1:
      "El central lejano se encuentra más lejos del colocador, con una separación de dos posiciones en cada rotación. Su rol principal es realizar bloqueos en la defensa y también hacer ataques rápidos en la posición 3 del campo.",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-orange-100 to-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative border border-orange-300"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Imagen superior */}
            <div className="relative">
              <img
                src={jugador.imagen}
                alt={jugador.nombre}
                className="w-full h-48 object-contain bg-white p-4"
              />
              <button
                className="absolute top-3 right-3 bg-white/80 hover:bg-orange-200 text-gray-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow"
                onClick={onClose}
              >
                ×
              </button>
            </div>

            {/* Contenido */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{jugador.nombre}</h2>
              <p className="text-orange-600 font-medium italic mb-4">
                {jugador.rol}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                {infoPorJugador[jugador.id]}
              </p>
            </div>

            {/* Línea decorativa inferior */}
            <div className="h-2 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
