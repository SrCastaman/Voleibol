import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import { useTheme } from "./context/ThemeContext";
import QuizBasic from "./pages/QuizBasic";

function App() {
  const { darkMode } = useTheme();
  return (
    <BrowserRouter>
      <Navbar />

      <main className={darkMode ? "bg-gray-900 pt-20 min-h-screen" : "bg-orange-200 pt-20 min-h-screen"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/quizBasic" element={<QuizBasic />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
