import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Conoceme from "./pages/Conoceme";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";

import { useVinyl } from "./hooks/useVinyl";

export default function App() {
  const { startAtmosphere } = useVinyl();

  useEffect(() => {
    const handleFirstInteraction = () => {
      startAtmosphere();
      window.removeEventListener("click", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);

    return () => window.removeEventListener("click", handleFirstInteraction);
  }, [startAtmosphere]);

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-[#171717]">
      <Router>
        <ScrollToTop />

        <Header />

        <main className="relative z-0 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/biography" element={<Conoceme />} />
            <Route path="/catalog" element={<Proyectos />} />
            <Route path="/feedback" element={<Contacto />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}