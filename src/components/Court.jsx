import { useState, useRef, useEffect } from "react";
import PlayerMarker from "./PlayerMarker";

export default function Court({ areasCorrectas, jugadoresIniciales }) {
  const ORIGINAL_WIDTH = 486;
  const ORIGINAL_HEIGHT = 341;

  const preguntasBase = Object.keys(areasCorrectas);
  const [preguntasRestantes, setPreguntasRestantes] = useState([...preguntasBase]);
  const [preguntaActual, setPreguntaActual] = useState(
    preguntasBase[Math.floor(Math.random() * preguntasBase.length)]
  );

  // -------------------------------
  // Inicializar jugadores en 2x3 escalados al tamaño del court
  // -------------------------------
  const inicializarPosiciones = () => {
  const bloqueWidth = 100;
  const bloqueHeight = 150;
  const cols = 2;
  const rows = 3;

    return jugadoresIniciales.map((j, idx) => {
      const fila = Math.floor(idx / cols);
      const col = idx % cols;

      const x = col * (bloqueWidth / (cols - 1 || 1));
      const y = fila * (bloqueHeight / (rows - 1 || 1));

      return { ...j, x, y, correct: null };
    });
  };


  const [jugadores, setJugadores] = useState(() => inicializarPosiciones());

  // -------------------------------
  // Court resize
  // -------------------------------
  const courtRef = useRef(null);
  const [renderSize, setRenderSize] = useState({ w: ORIGINAL_WIDTH, h: ORIGINAL_HEIGHT });

  useEffect(() => {
    const handleResize = () => {
      if (!courtRef.current) return;
      const rect = courtRef.current.getBoundingClientRect();
      setRenderSize({ w: rect.width, h: rect.height });
    };

    const img = courtRef.current?.querySelector("img");
    if (img && !img.complete) {
      img.onload = handleResize;
    } else {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // -------------------------------
  // Reescalar posiciones al tamaño del court
  // -------------------------------
  useEffect(() => {
    if (!renderSize.w || !renderSize.h) return;
    setJugadores(inicializarPosiciones(renderSize.w, renderSize.h));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderSize]);

  // -------------------------------
  // Drag & report
  // -------------------------------
  const handleDrop = (id, newX, newY) => {
    setJugadores((prev) =>
      prev.map((j) => (j.id === id ? { ...j, x: newX, y: newY } : j))
    );
  };

  const reportSize = (id, width, height) => {
    setJugadores((prev) =>
      prev.map((j) =>
        j.id === id && (!j.size || j.size.w !== width || j.size.h !== height)
          ? { ...j, size: { w: width, h: height } }
          : j
      )
    );
  };

  // -------------------------------
  // Corrección
  // -------------------------------
  const corregir = () => {
    const areas = areasCorrectas[preguntaActual];
    const scaleX = ORIGINAL_WIDTH / renderSize.w;
    const scaleY = ORIGINAL_HEIGHT / renderSize.h;

    setJugadores((prev) =>
      prev.map((p) => {
        const centerRenderX = p.x;
        const centerRenderY = p.y;
        const centerOrigX = centerRenderX * scaleX;
        const centerOrigY = centerRenderY * scaleY;
        const area = areas[p.numero];
        const correcto =
          centerOrigX >= area.x[0] &&
          centerOrigX <= area.x[1] &&
          centerOrigY >= area.y[0] &&
          centerOrigY <= area.y[1];

        return { ...p, correct: correcto };
      })
    );
  };

  // -------------------------------
  // Reiniciar posiciones
  // -------------------------------
  const reiniciar = () => {
    setJugadores(inicializarPosiciones(renderSize.w, renderSize.h));
  };

  const siguientePregunta = () => {
    const restantes = preguntasRestantes.filter((p) => p !== preguntaActual);

    if (restantes.length === 0) {
      alert("Has completado todas las posiciones. Se reinicia el quiz");
      setPreguntasRestantes([...preguntasBase]);
      const nueva = preguntasBase[Math.floor(Math.random() * preguntasBase.length)];
      setPreguntaActual(nueva);
    } else {
      const nueva = restantes[Math.floor(Math.random() * restantes.length)];
      setPreguntasRestantes(restantes);
      setPreguntaActual(nueva);
    }

    setJugadores(inicializarPosiciones(renderSize.w, renderSize.h));
  };

  // -------------------------------
  // Render
  // -------------------------------
  return (
    <div>
      <div className="relative w-full max-w-4xl mx-auto aspect-[486/341] bg-gray-200 rounded-lg overflow-hidden">
        <img
          ref={courtRef}
          src="/images/campo.png"
          alt="Cancha"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {jugadores.map((j) => (
          <PlayerMarker
            key={j.id}
            player={j}
            handleDrop={handleDrop}
            reportSize={reportSize}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-3">
          <button
            onClick={corregir}
            className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-500"
          >
            Corregir
          </button>

          <button
            onClick={siguientePregunta}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-500"
          >
            Siguiente -&gt;
          </button>

          <button
            onClick={reiniciar}
            className="px-4 py-2 bg-gray-400 text-gray-800 rounded-md shadow hover:bg-gray-300"
          >
            Reiniciar
          </button>
        </div>

        <div className="text-lg md:text-xl font-bold text-blue-600">
          <span className="mr-2 text-gray-800">Posición: </span>
          <span className="text-orange-700">{preguntaActual}</span>
        </div>
      </div>
    </div>
  );
}
