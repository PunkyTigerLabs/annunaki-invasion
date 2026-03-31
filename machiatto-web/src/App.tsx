import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import UniversoPage from './pages/UniversoPage';
import ComoJugarPage from './pages/ComoJugarPage';
import ColeccionesPage from './pages/ColeccionesPage';
import GaleriaPage from './pages/GaleriaPage';
import ComunidadPage from './pages/ComunidadPage';
import TiendaPage from './pages/TiendaPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/universo" element={<UniversoPage />} />
        <Route path="/como-jugar" element={<ComoJugarPage />} />
        <Route path="/colecciones" element={<ColeccionesPage />} />
        <Route path="/arte" element={<GaleriaPage />} />
        <Route path="/comunidad" element={<ComunidadPage />} />
        <Route path="/tienda" element={<TiendaPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router basename="/machiatto">
      <div className="flex flex-col min-h-screen bg-[#0D0A1F]">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
