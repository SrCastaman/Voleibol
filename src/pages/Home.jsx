import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/info");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-200 text-gray-800 p-8">

      {/* Título principal */}
      <h1 className="text-5xl font-extrabold text-orange-600 mb-4 text-center">
        🏐 Entrena Voleibol
      </h1>

      {/* Subtítulo */}
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl leading-relaxed">
        Plataforma educativa para comprender y practicar las{" "}
        <strong>posiciones y tácticas básicas</strong> del voleibol.
      </p>

      {/* Imagen clickeable con aviso */}
      <div
        onClick={handleClick}
        className="relative w-full max-w-3xl h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer group transition-all"
      >
        <img
          src="/images/screenshots/Posicion-linea.jpg"
          alt="Posiciones en línea"
          className="w-full h-full object-cover filter blur-sm brightness-75 group-hover:blur-none transition-all duration-500"
        />

        {/* Overlay con texto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30 group-hover:bg-black/10 transition-colors duration-500">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 drop-shadow-lg">
            Haz clic para aprender las posiciones
          </h2>
          <p className="text-sm md:text-base italic text-gray-200">
            Te llevará a la sección de información
          </p>
        </div>
      </div>

      {/* Sección futura / aviso beta */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-md p-6 mt-10 max-w-xl text-center">
        <h2 className="text-2xl font-semibold text-orange-700 mb-2">
          Próximamente:
        </h2>
        <ul className="text-gray-700 space-y-2">
          <li>• Prácticas interactivas de posicionamiento</li>
          <li>• Rotaciones automáticas con feedback</li>
          <li>• Modo de entrenamiento visual</li>
        </ul>
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        Versión beta • {new Date().getFullYear()}
      </footer>
    </div>
  );
}
