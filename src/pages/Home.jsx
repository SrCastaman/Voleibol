import { useNavigate } from "react-router-dom";
import Carousel from "../components/CarouselSwiper";

export default function Home() {
  const navigate = useNavigate();

  const infoSlides = [
    {
      image: "/images/screenshots/Posicion-linea.jpg",
      title: "Aprender posiciones básicas",
      subtitle: "Te llevará a la sección de información",
      onClick: () => navigate("/info"),
    },
    {
      image: "/images/screenshots/5-1/estatico/Rotacion-1.jpg",
      title: "Aprender posiciones del 5-1",
      subtitle: "Te llevará a la sección de información",
      onClick: () => navigate("/info5_1"),
    },
  ];

  const quizSlides = [
    {
      image: "/images/quizBasic.jpg",
      title: "Quiz de posicionamiento básico",
      subtitle: "Pon a prueba lo aprendido",
      onClick: () => navigate("/quizBasic"),
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-orange-200 text-gray-800 p-8">
      <h1 className="text-5xl font-extrabold text-orange-600 mb-4 text-center">
        Entrena Voleibol
      </h1>

      

      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl leading-relaxed">
        Plataforma educativa para comprender y practicar las{" "}
        <strong>posiciones y tácticas básicas</strong> del voleibol.
      </p>

      {/* Info Section */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Información
      </h2>
      <div className="w-full max-w-4xl mb-12">
        <Carousel slides={infoSlides} />
      </div>

      {/* Quizzes Section */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center mt-12">
        Quizzes / Prácticas
      </h2>
      <div className="w-full max-w-4xl mb-12">
        <Carousel slides={quizSlides} />
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        Versión beta • {new Date().getFullYear()}
      </footer>
    </div>
  );
}
