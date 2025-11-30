
import Court from "../components/Court";




export default function QuizBasic() {
  const IMAGENES_CAMPO = {
    "BASE/V": "/images/campos/Base_cruz.jpg",
    "FREEBALL K4": "/images/campos/Freeball_cruz.jpg",
    "RECEPCIÓN K1": "/images/campos/Recepcion_cruz.jpg",
    "DEFENSA K2 (2)": "/images/campos/Defensa_2_cruz.jpg",
    "DEFENSA K2 (4)": "/images/campos/Defensa_4_cruz.jpg",
    "DEFENSA K2 (3)": "/images/campos/Defensa_3_cruz.jpg",
    "DEFENSA K2 (ZAG)": "/images/campos/Defensa_Zag_cruz.jpg",
    "APOYO K3 (2)": "/images/campos/Apoyo_2_cruz.jpg",
    "APOYO K3 (4)": "/images/campos/Apoyo_4_cruz.jpg"
  }


  const AREAS_CORRECTAS = {
    "BASE/V": {
      1: { x: [280, 315], y: [140, 175] },
      2: { x: [300, 340], y: [50, 95] },
      3: { x: [225, 260], y: [50, 95] },
      4: { x: [130, 180], y: [50, 95] },
      5: { x: [170, 200], y: [140, 175] },
      6: { x: [225, 260], y: [230, 265] },
    },
    "FREEBALL K4": {
      1: { x: [283, 335], y: [226, 271] },
      2: { x: [273, 315], y: [125, 161] },
      3: { x: [217, 259], y: [50, 105] },
      4: { x: [131, 183], y: [125, 161] },
      5: { x: [131, 183], y: [226, 271] },
      6: { x: [215, 259], y: [175, 215] },
    },
    "RECEPCIÓN K1": {
      1: { x: [292, 334], y: [216, 247] },
      2: { x: [292, 334], y: [110, 151] },
      3: { x: [217, 259], y: [50, 91] },
      4: { x: [142, 172], y: [110, 151] },
      5: { x: [142, 174], y: [216, 247] },
      6: { x: [217, 259], y: [204, 235] },
    },
    "DEFENSA K2 (2)": {
      1: { x: [333, 364], y: [130, 181] },
      2: { x: [306, 332], y: [47, 63] },
      3: { x: [273, 299], y: [47, 63] },
      4: { x: [176, 227], y: [89, 110] },
      5: { x: [157, 183], y: [156, 187] },
      6: { x: [213, 244], y: [242, 273] },
    },
    "DEFENSA K2 (4)": {
      1: { x: [263, 315], y: [165, 197] },
      2: { x: [248, 310], y: [89, 110] },
      3: { x: [161, 217], y: [42, 58] }, 
      4: { x: [134, 190], y: [42, 58] }, 
      5: { x: [105, 147], y: [125, 176] },
      6: { x: [213, 255], y: [239, 271] },
    },
    "DEFENSA K2 (3)": {
      1: { x: [274, 305], y: [133, 175] },
      2: { x: [284, 315], y: [75, 116] },
      3: { x: [217, 259], y: [49, 71] },
      4: { x: [150, 182], y: [75, 116] },
      5: { x: [160, 202], y: [133, 175] },
      6: { x: [207, 249], y: [225, 287] },
    },
    "DEFENSA K2 (ZAG)": {
      1: { x: [293, 334], y: [226, 268] },
      2: { x: [293, 334], y: [126, 158] },
      3: { x: [217, 259], y: [126, 158] },
      4: { x: [141, 182], y: [126, 158] },
      5: { x: [141, 182], y: [226, 268] },
      6: { x: [217, 259], y: [226, 268] },
    },
    "APOYO K3 (2)": {
      1: { x: [309, 340], y: [75, 107] },
      2: { x: [309, 340], y: [41, 82] },
      3: { x: [268, 299], y: [41, 82] },
      4: { x: [209, 236], y: [112, 139] },
      5: { x: [268, 299], y: [75, 107]},
      6: { x: [223, 270], y: [210, 248] },
    },
    "APOYO K3 (4)": {
      1: { x: [151, 192], y: [93, 125] },
      2: { x: [232, 264], y: [112, 139] },
      3: { x: [161, 192], y: [49, 83] },
      4: { x: [101, 142], y: [49, 83] },
      5: { x: [101, 142], y: [84, 125] },
      6: { x: [206, 248], y: [205, 237]},
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
          imagenesCampos={IMAGENES_CAMPO}
        />
      </div>

    </div>
  );
}
