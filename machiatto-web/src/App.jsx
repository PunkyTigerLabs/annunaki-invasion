import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Otras rutas se agregarán aquí a medida que se desarrollen las páginas */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
