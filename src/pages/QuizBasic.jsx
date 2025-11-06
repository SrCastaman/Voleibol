
import Court from "../components/Court";




export default function QuizBasic() {


  const AREAS_CORRECTAS = {
    "BASE/V": {
      1: { x: [280, 315], y: [140, 175] },
      2: { x: [300, 340], y: [60, 95] },
      3: { x: [225, 260], y: [60, 95] },
      4: { x: [130, 180], y: [60, 95] },
      5: { x: [170, 200], y: [140, 175] },
      6: { x: [225, 260], y: [230, 265] },
    },
    "FREEBALL K4": {
      1: { x: [283, 335], y: [241, 271] },
      2: { x: [293, 335], y: [130, 161] },
      3: { x: [227, 259], y: [50, 91] },
      4: { x: [131, 163], y: [130, 161] },
      5: { x: [131, 183], y: [241, 271] },
      6: { x: [227, 259], y: [190, 215] },
    },
    "RECEPCIÓN K1": {
      1: { x: [302, 334], y: [216, 247] },
      2: { x: [302, 334], y: [120, 151] },
      3: { x: [227, 259], y: [60, 91] },
      4: { x: [152, 182], y: [120, 151] },
      5: { x: [152, 184], y: [216, 247] },
      6: { x: [227, 259], y: [204, 235] },
    },
    "DEFENSA K2 (2)": {
      1: { x: [333, 364], y: [130, 181] },
      2: { x: [306, 332], y: [47, 63] },
      3: { x: [288, 304], y: [47, 63] },
      4: { x: [176, 227], y: [89, 110] },
      5: { x: [172, 213], y: [166, 197] },
      6: { x: [223, 254], y: [262, 293] },
    },
    "DEFENSA K2 (4)": {
      1: { x: [263, 315], y: [165, 197] },
      2: { x: [248, 310], y: [89, 110] },
      3: { x: [161, 217], y: [42, 58] }, 
      4: { x: [134, 190], y: [42, 58] }, 
      5: { x: [105, 147], y: [145, 176] },
      6: { x: [223, 255], y: [259, 291] },
    },
    "DEFENSA K2 (3)": {
      1: { x: [274, 305], y: [143, 175] },
      2: { x: [284, 315], y: [85, 116] },
      3: { x: [227, 259], y: [49, 71] },
      4: { x: [150, 182], y: [85, 116] },
      5: { x: [170, 202], y: [143, 175] },
      6: { x: [207, 249], y: [235, 277] },
    },
    "DEFENSA K2 (ZAG)": {
      1: { x: [303, 334], y: [236, 268] },
      2: { x: [303, 334], y: [126, 158] },
      3: { x: [227, 259], y: [126, 158] },
      4: { x: [151, 182], y: [126, 158] },
      5: { x: [151, 182], y: [236, 268] },
      6: { x: [227, 259], y: [236, 268] },
    },
    "APOYO K3 (2)": {
      1: { x: [309, 340], y: [75, 107] },
      2: { x: [309, 340], y: [51, 82] },
      3: { x: [268, 299], y: [51, 82] },
      4: { x: [202, 234], y: [99, 121] },
      5: { x: [218, 260], y: [225, 257] },
      6: { x: [268, 299], y: [75, 107] },
    },
    "APOYO K3 (4)": {
      1: { x: [216, 248], y: [225, 257] },
      2: { x: [232, 264], y: [120, 151] },
      3: { x: [161, 192], y: [51, 83] },
      4: { x: [111, 142], y: [51, 83] },
      5: { x: [111, 142], y: [94, 125] },
      6: { x: [161, 192], y: [93, 125] },
    }     
  }

  const JUGADORES =   [
    { id: 1, numero: 1, x: 80, y: 60, imagen: "/images/players/basics/Jugador 1.png", correct: null },
    { id: 2, numero: 2, x: 60, y: 20, imagen: "/images/players/basics/Jugador 2.png", correct: null },
    { id: 3, numero: 3, x: 40, y: 20, imagen: "/images/players/basics/Jugador 3.png", correct: null },
    { id: 4, numero: 4, x: 20, y: 20, imagen: "/images/players/basics/Jugador 4.png", correct: null },
    { id: 5, numero: 5, x: 20, y: 60, imagen: "/images/players/basics/Jugador 5.png", correct: null },
    { id: 6, numero: 6, x: 60, y: 60, imagen: "/images/players/basics/Jugador 6.png", correct: null },
  ]


  return (
    <div
      className="p-6 min-h-screen flex flex-col items-center bg-orange-200 text-gray-800"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        QUIZ DE POSICIONAMIENTO
      </h2>

      <p className="text-center mb-10 max-w-3xl mx-auto text-lg text-gray-800 italic">Desafiate para comprobar lo estudidado</p>


      <div
        className="shadow-lg rounded-2xl p-6 w-full max-w-4xl transition-colors duration-300 bg-gray-200"
      >
        <Court 
          areasCorrectas={AREAS_CORRECTAS}
          jugadoresIniciales={JUGADORES}
        />
      </div>

    </div>
  );
}
